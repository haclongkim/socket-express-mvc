var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var socket = require('socket.io-client')('http://localhost:5555');
    socket.emit('pushNotify');
    res.send('respond with a resource');
});

module.exports = router;
