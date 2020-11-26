

-- Drops the devoured_db if it already exists --
DROP DATABASE IF EXISTS devoured_db;

-- Create the database devoured_db and specified it for use.
CREATE DATABASE devoured_db;

USE devoured_db;

-- Create the table devoured.
CREATE TABLE devoured (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO devoured (burger) VALUES ('Cheeseburger');
