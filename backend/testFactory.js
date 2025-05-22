const UserFactory = require('./models/UserFactory');

const admin = UserFactory.createUser('AdminUser', 'admin@example.com', '123456', 'admin');
const user = UserFactory.createUser('RegularUser', 'user@example.com', 'abcdef');

console.log(admin.getRole()); 
console.log(user.getRole());  
console.log(admin.canManageBooks()); 
