const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { UserModel } = require('./models/User');

dotenv.config();

const fixAdminRole = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    
    const admin = await UserModel.findOne({ email: 'admin@bookstore.com' });
    if (admin) {
      admin.role = 'admin';
      await admin.save();
      console.log('Admin role updated successfully');
    } else {
      console.log('Admin user not found');
    }

    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

fixAdminRole(); 