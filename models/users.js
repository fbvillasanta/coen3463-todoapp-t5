var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

// define the User model schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        index: { unique: true }
    },
    name: String
});

UserSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', UserSchema);