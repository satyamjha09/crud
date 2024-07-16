// models/user.js

const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const User = sequelize.define('user', {
    
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: true, // This will add createdAt and updatedAt fields
  createdAt: 'created_at', // Custom name for createdAt field if needed
  updatedAt: 'updated_at', // Custom name for updatedAt field if needed
});

module.exports = User;
