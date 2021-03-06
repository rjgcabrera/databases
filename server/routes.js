var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

// newly added route
router.post('/rooms', controller.rooms.post);
// router.get('/a', controller.messages.get);


module.exports = router;
