const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../models/User');
const UserFactory = require('../models/UserFactory');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { name, surname, email, password, role } = req.body;

    // Check if user already exists
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Use factory to create user object
    const userObj = UserFactory.createUser(name, email, hashedPassword, role);

    // Save to DB using Mongoose model
    const newUser = new UserModel({
      name: userObj.name,
      surname,
      email: userObj.email,
      password: userObj.password,
      role: userObj.role
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all users (for admin use)
const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find().select('-password'); // Exclude password
    res.json(users);
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers
};
