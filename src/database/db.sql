-- to create a new database
CREATE DATABASE wikimediadb;

-- to use database
use wikimediadb;

-- creating a new table. There is no need to create this manually since it's created during app runtime
CREATE TABLE donor (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  lName VARCHAR(50) NOT NULL,
  fName VARCHAR(50) NOT NULL,
  address VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  region VARCHAR(50) NOT NULL,
  country VARCHAR(50) NOT NULL,
  code VARCHAR(50) NOT NULL,
  phone VARCHAR(15),
  email VARCHAR(50) NOT NULL,
  contact VARCHAR(50) NOT NULL,
  payment VARCHAR(10) NOT NULL,
  frequency VARCHAR(10) NOT NULL,
  amount INT(100) NOT NULL,
  comments TEXT NOT Null
);

-- to show all tables
show tables;
