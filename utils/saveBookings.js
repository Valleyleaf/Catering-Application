
const seedUsers = require('./userSeeds');
const seedRestaurants = require('./seedRestaurants');
const seedComment = require('./commentSeed');
const seedBookings = require('./seedBookings')
const sequelize = require('../config/connection');

const query = 'INSERT INTO my_table (column1, column2) VALUES (?, ?)';

// Use the pool to get a connection and execute the query
pool.execute(query, [data1, data2], (err, results) => {
  if (err) {
    console.error('Error adding data to the database:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    console.log('Data added successfully!');
    res.status(200).json({ message: 'Data added successfully!' });
  }
});

saveBooking();

// Aston: This function will seed new user bookings into the database. For future development, we would want to add a function that either deletes or stores bookings that go past their booked date as to not bloat the DB.
