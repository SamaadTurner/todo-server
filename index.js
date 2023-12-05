'use strict';

require('dotenv').config();
const {seedDatabase} = require('./lib/Helper/seedDatabase.js'); 
const { sequelize, UserModel } = require('./lib/models');
const { start } = require('./lib/server.js');

const PORT = process.env.PORT || 3001;

sequelize.sync()
  .then(() => {
    seedDatabase(UserModel);
    start(PORT);
  });