var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var passportLocalMongoose = require('passport-local-mongoose');

// define the User model schema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        default: '',
        required: true
    },
    username: {
        type: String,
        required: true
    }
});
var options = ({missingPasswordError: "Wrong password"});
UserSchema.plugin(passportLocalMongoose, options);


module.exports = mongoose.model('User', UserSchema);