CREATE DATABASE event_management;

USE event_management;

CREATE TABLE organizers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone_number VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE vendor_events (
  vendor_id INT NOT NULL,
  event_id INT NOT NULL,
  PRIMARY KEY (vendor_id, event_id),
  FOREIGN KEY (vendor_id) REFERENCES vendors (id),
  FOREIGN KEY (event_id) REFERENCES events (id)
);

CREATE TABLE vendors (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone_number VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE organizer_events (
  organizer_id INT NOT NULL,
  event_id INT NOT NULL,
  PRIMARY KEY (organizer_id, event_id),
  FOREIGN KEY (organizer_id) REFERENCES organizers (id),
  FOREIGN KEY (event_id) REFERENCES events (id)
);

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  location VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);