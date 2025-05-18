const mongoose = require('mongoose');

// Check if the model is already registered (important for hot reloads / nodemon)
const UserModel = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, {
  timestamps: true
}));

// --- OOP Classes ---
class User {
  constructor(name, email, password, role = 'user') {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  getRole() {
    return this.role;
  }

  isAdmin() {
    return this.role === 'admin';
  }
}

class Admin extends User {
  constructor(name, email, password) {
    super(name, email, password, 'admin');
  }

  canManageBooks() {
    return true;
  }
}

module.exports = {
  UserModel,
  User,
  Admin
};
