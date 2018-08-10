// This file configure sequelize for your project by specifying the paths to files required by Sequelize

const path = require('path');

module.exports = {
  "config": path.resolve('./server/config', 'config.json'),
  "models-path": path.resolve('./server/models'),
  "seeders-path": path.resolve('./server/seeders'),
  "migrations-path": path.resolve('./server/migrations')
};

// the files created by sequelize-cli
// sequelize init