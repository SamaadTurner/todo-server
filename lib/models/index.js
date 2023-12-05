'use strict'

const { Sequelize, DataTypes } = require('sequelize');
const createUserModel = require('./User.js');
const createTodoModel = require('./Todo.js');

const CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

// connect to our DB
let sequelize = new Sequelize(CONNECTION_STRING);

// sequelize.sync(); // call this before you start something that requires DB access. -> greedy synching

module.exports = {
  sequelize,
  UserModel: createUserModel(sequelize, DataTypes),
  ToDoModel: createTodoModel(sequelize, DataTypes),
}