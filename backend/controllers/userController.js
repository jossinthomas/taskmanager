const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/User');

// Validation helpers
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
};

const validatePassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
};

const sanitizeUser = (user) => ({
  _id: user._id,
  name: user.name,
  surname: user.surname,
  email: user.email,
  role: user.role
});

// Register
const registerUser = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    // Validate inputs
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({ 
        message: 'Password must be at least 8 characters long and contain uppercase, lowercase, and numbers' 
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 12); // Increased from 10 to 12 rounds
    const newUser = new UserModel({
      name: name.trim(),
      surname: surname ? surname.trim() : '',
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.json({ 
      token, 
      user: sanitizeUser(user)
    });

  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

// Get User Profile
const getUserProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(sanitizeUser(user));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate email if it's being updated
    if (req.body.email && req.body.email !== user.email) {
      if (!validateEmail(req.body.email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      // Check if new email is already in use
      const emailExists = await UserModel.findOne({ email: req.body.email.toLowerCase() });
      if (emailExists) {
        return res.status(400).json({ message: 'Email already in use' });
      }
    }

    // Validate password if it's being updated
    if (req.body.password) {
      if (!validatePassword(req.body.password)) {
        return res.status(400).json({ 
          message: 'Password must be at least 8 characters long and contain uppercase, lowercase, and numbers' 
        });
      }
      user.password = await bcrypt.hash(req.body.password, 12);
    }

    user.name = req.body.name ? req.body.name.trim() : user.name;
    user.surname = req.body.surname ? req.body.surname.trim() : user.surname;
    user.email = req.body.email ? req.body.email.toLowerCase() : user.email;

    const updatedUser = await user.save();
    res.json(sanitizeUser(updatedUser));
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message });
  }
};

// Get All Users (Admin only)
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select('-password');
    res.json(users.map(user => sanitizeUser(user)));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

module.exports = { 
  registerUser, 
  loginUser, 
  getAllUsers,
  getUserProfile,
  updateUserProfile
};