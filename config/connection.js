const Sequelize = require('sequelize');
require('dotenv').config();

console.log('testing', process.env.DB_NAME)
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log('notJawsDB')
  sequelize = new Sequelize(
<<<<<<< HEAD
    'user_db',
    'root',
    '2524',
=======
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
>>>>>>> e1cda3ddb1af9ef4787648a3aee83b08e77935d7
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
module.exports = sequelize;

// Basic connections file for env usage. Keep this.