const Sequelize = require('sequelize');
require('dotenv').config();

console.log('testing', process.env.DB_NAME)
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    "catering_db",
    "root",
    "Ayxhee2n",
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
module.exports = sequelize;

// Basic connections file for env usage. Keep this.