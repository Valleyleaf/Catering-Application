DROP DATABASE IF EXISTS catering_db;
CREATE DATABASE catering_db;

USE catering_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL
  user_password VARCHAR(30) NOT NULL
);

CREATE TABLE resturants (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,z
  resturant_name VARCHAR(30) NOT NULL,
  speciality VARCHAR(15) NOT NULL,
);

-- How will we store user favorites?
