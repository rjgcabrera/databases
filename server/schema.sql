DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  /* Describe your table here.*/
  id int not null primary key auto_increment,
  name varchar(25) not null unique
);

CREATE TABLE users (
  /* Describe your table here.*/
  id int not null primary key auto_increment,
  name varchar(40) not null unique
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id integer primary key auto_increment,

  -- createdAt date not null,
  room_id integer not null,
  user_id integer not null,
  content varchar(250),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (room_id) REFERENCES rooms(id)
);



insert into rooms (name) values ('room1'),
  ('room2'),
  ('room3'),
  ('room4');

insert into users (name) values ('RJ'), ('Louie'), ('Oli'), ('Andy');

insert into messages (user_id, room_id, content) values
(1, 1, 'The J stands for Jimothy!'),
(2, 2, 'K-town!'),
(3, 3, 'LA/OC in the house'),
(4, 4, '2-0 undefeated!');



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
