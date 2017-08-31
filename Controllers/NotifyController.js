const Controller = require('./Controller');
// A base class is defined using the new reserved 'class' keyword
class NotifyController extends Controller {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor() {
        super();
        this.name = 'NotifyController';
    };
    index(req, res, next) {
        res.render('index', { title: 'Express' + this.subMd.getModelName() });
    }
}
module.exports = new NotifyController();