const Controller = require('./Controller');
// Model
var subMd = require('../Models/Subscriber');
const co = require('co');

// A base class is defined using the new reserved 'class' keyword
class HomeController extends Controller {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor() {
        super();
        this.name = 'HomeController';
    };
    index(req, res, next) {
        co(function* () {
            var xxxx = yield subMd.findByUsername();
            res.render('index', { title: 'Express'+xxxx , env: env});
        });
    }
    test1(req, res, next) {
        res.render('index', { title: 'Express' , env: env});
    }
    test2(req, res, next) {
        res.render('index', { title: 'Express' , env: env});
    }
}
module.exports = new HomeController();