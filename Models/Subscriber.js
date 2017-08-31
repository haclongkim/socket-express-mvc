const Model = require('./Model');
const mongoose = require('../config/database');
const Schema = mongoose.Schema;
const co = require('co');

// A base class is defined using the new reserved 'class' keyword
class Subscriber extends Model {
    // ..and an (optional) custom class constructor. If one is
    // not supplied, a default constructor is used instead:
    // constructor() { }
    constructor() {
        var schema = {
            username: String,
        };
        super(schema);
        this.name = 'Subscriber';
        this.model = this.mongoose.model('Subscriber', this);

    };
    findByUsername() {
        return this.model.findOne({username:'863141863703455'}).exec();
    }
}
module.exports = new Subscriber();