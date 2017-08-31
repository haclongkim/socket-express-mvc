
// A base class is defined using the new reserved 'class' keyword
class Controller {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor() {
        this.name = 'Controller';
    };
    getControllerName() {
        return this.name;
    };
}
module.exports = Controller;