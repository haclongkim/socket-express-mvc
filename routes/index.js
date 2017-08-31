var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();
var controllerPath = path.join(__dirname, "../Controllers");

fs.readdirSync(controllerPath).forEach(function (file) {
    this[file.split('.')[0]] = require("../Controllers/" + file);
});
/* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {title: 'Express' + sub.getModelName(), env: env});
// });

router.get('/', HomeController.index);
router.get('/test1', HomeController.test1);
router.get('/test2', HomeController.test2);
module.exports = router;
