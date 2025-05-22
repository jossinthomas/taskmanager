const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const { UserModel } = require('./models/User');

dotenv.config();

const checkAndCreateAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

  
    const admin = await UserModel.findOne({ email: 'admin@bookstore.com' });
    
    if (admin) {
      console.log('Admin user found:', {
        email: admin.email,
        role: admin.role,
        name: admin.name
      });
      
      
      const hashedPassword = await bcrypt.hash('admin123', 10);
      admin.password = hashedPassword;
      await admin.save();
      console.log('Admin password updated successfully');
    } else {
      
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const newAdmin = new UserModel({
        name: 'Admin',
        email: 'admin@bookstore.com',
        password: hashedPassword,
        role: 'admin'
      });
      await newAdmin.save();
      console.log('New admin user created successfully');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

checkAndCreateAdmin(); 