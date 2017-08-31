const mongoose = require('../config/database');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const co = require('co');

// A base class is defined using the new reserved 'class' keyword
class Model extends Schema {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor(obj={}) {
        super(obj);
        this.name = 'Model';
        this.mongoose = mongoose;
    };
    getModelName() {
        return this.name;
    };
}
module.exports = Model;