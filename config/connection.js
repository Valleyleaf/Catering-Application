const Sequelize = require('sequelize');
require('dotenv').config();

console.log('testing', process.env.DB_NAME)
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log('notJawsDB')
  sequelize = new Sequelize(
    'user_db',
    'root',
    'Ayxhee2n',
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
module.exports = sequelize;

// Basic connections file for env usage. Keep this.