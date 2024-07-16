// sequelize.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize('crud', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
