const { User, Admin } = require('./User');

class UserFactory {
  static createUser(name, email, password, role = 'user') {
    if (role === 'admin') {
      return new Admin(name, email, password);
    }
    return new User(name, email, password, role);
  }
}

module.exports = UserFactory;
