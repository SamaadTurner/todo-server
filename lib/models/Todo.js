'use strict';

const todo = (sequelize, DataTypes) => sequelize.define('ToDo', {
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  assignee: {
    type: DataTypes.STRING,
    allowNull: false
  },
  difficulty: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  complete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

module.exports = todo;