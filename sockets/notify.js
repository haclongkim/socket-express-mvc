module.exports = function (socket) {
    "use strict";
    socket.on('pushNotify', function(data) {
        "use strict";
        socket.broadcast.emit('notify');
    });
    socket.on('event', function(data){

    });
    socket.on('disconnect', function(){});
};