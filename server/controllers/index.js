//CONTROLLA

var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get()
        .then((data) => {
          console.log('data INSIDE CONTROLLER: ', data);
          res.send(data);
        })
        .catch((err) => {
          console.log('err from controller messages.get: ', err);
        });
    }, // a function which handles a get request for all messages

    post: function(req, res) {
      console.log('MESSAGE RECEIVED IN CONTROLLA: ', req.body);
      models.messages.post(req.body)
        .then((data) => {
          res.end();
        }).catch((err) => {
          console.log('err from controller messages.post: ', err);
        });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      models.users.get()
        .then((data) => {
          res.send(data);
        }).catch((err) => {
          console.log('err from controller users.get: ', err);
        });
    },
    post: function(req, res) {
      //console.log('YOOOO: ', req.body);
      models.users.post(req.body)
        .then((data) => {
          res.send();
        }).catch((err) => {
          console.log('err from controller users.post: ', err);
        });
    }
  },

  rooms: {
    get: function (req, res) {
      models.rooms.get()
        .then((data) => {
          res.send(data);
        }).catch((err) => {
          console.log('err from controller rooms.get: ', err);
        });
    },
    post: function (req, res) {
      console.log('NEW ROOM IN CONTROLLA: ', req.body);
      models.rooms.post(req.body)
        .then((data) => {
          res.send();
        }).catch((err) => {
          console.log('err from controller rooms.post: ', err);
        });
    }
  }
};
