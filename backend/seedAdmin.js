const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const { UserModel } = require('./models/User');

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

  
    const existingAdmin = await UserModel.findOne({ email: 'admin@bookstore.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = new UserModel({
      name: 'Admin',
      email: 'admin@bookstore.com',
      password: hashedPassword,
      role: 'admin'
    });

    await admin.save();
    console.log('Admin user created successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin(); 