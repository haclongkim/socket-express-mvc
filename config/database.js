const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(env.DATABASE, {
    useMongoClient: true
});
// mongoose.connect('mongodb://localhost:1993/mkul', {
//     useMongoClient: true
// });
// mongoose.connect('mongodb://localhost:1993/mkul', function (err, db) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("successfully connected to the database");
//     }
// // db.close();
// });
mongoose.set('debug', true);

module.exports = mongoose;
