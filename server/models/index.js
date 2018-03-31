//MODEL

var db = require('../db');
var Promise = require('bluebird');
var sqlString = require('sqlString');
var _ = require('underscore');

module.exports = {
  messages: {
    get: function() { // add objectId in query?
      return new Promise((resolve, reject) => {
        var queryStr = 'SELECT users.name AS username, messages.content AS text, messages.id AS objectId, rooms.name AS roomname FROM users INNER JOIN messages INNER JOIN rooms WHERE users.id = messages.user_id AND rooms.id = messages.room_id ORDER BY messages.id ASC';

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('MSG GET Error in model!: ', err);
            reject(err);
          } else {
            console.log('MSG GET success!');
            resolve(data);
          }
        });
      });
    }, // a function which produces all the messages
    post: function(message) {
      console.log('message from client: ', message);
      return new Promise((resolve, reject) => {
        var queryStr = `INSERT INTO messages (user_id, room_id, content) VALUES ((SELECT id FROM users WHERE name = '${message.username}'),(SELECT id FROM rooms WHERE name = '${message.roomname}'), '${_.escape(message.text)}')`; // insert into errthang

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('MSG POST Error in model!: ', err);
            reject(err);
          } else {
            console.log('MSG POST success!');
            resolve(data);
          }
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function() {
      return new Promise((resolve, reject) => {
        var queryStr = 'SELECT * FROM users';

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('USERS GET Error in model!: ', err);
            reject(err);
          } else {
            console.log('USERS GET success!');
            resolve(data);
          }
        });
      });
    },
    post: function(username) {
      return new Promise((resolve, reject) => {
        //console.log('YOOOOO: ')
        var queryStr = `INSERT INTO users (name) VALUES ('${username.user}')`;

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('USERS POST Error in model!: ', err);
            reject(err);
          } else {
            console.log('USERS POST success!');
            resolve(data);
          }
        });
      });
    }
  },

  rooms: {
    get: function() {
      return new Promise((resolve, reject) => {
        var queryStr = 'SELECT * FROM rooms';

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('ROOMS GET Error in model!: ', err);
            reject(err);
          } else {
            console.log('ROOMS GET success!');
            resolve(data);
          }
        });

      });
    },
    post: function(room) {
      return new Promise((resolve, reject) => {
        var query = `INSERT INTO rooms (name) VALUES ('${room}')`;

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('ROOMS POST Error in model!: ', err);
            reject(err);
          } else {
            console.log('ROOMS POST success!');
            resolve(data);
          }
        });
      });
    }
  }
};
