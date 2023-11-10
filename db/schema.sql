DROP DATABASE IF EXISTS catering_db;
CREATE DATABASE catering_db;

-- USE catering_db;

-- CREATE TABLE users (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   username VARCHAR(30) NOT NULL,
--   user_password VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE restaurants (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   restaurant_name VARCHAR(30) NOT NULL,
--   speciality VARCHAR(15) NOT NULL
-- );

-- CREATE TABLE menu_items (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   restaurant_id INT NOT NULL,
--   item_name VARCHAR(45) NOT NULL,
--   FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
-- );

-- CREATE TABLE user_favorites (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   user_id INT NOT NULL,
--   restaurant_id INT NOT NULL,
--   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
--   FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
-- );


-- AD: Not sure if we will be using these, but just in case, I fixed a number of spelling errors.