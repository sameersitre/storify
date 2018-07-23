const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
    items: [{
        title: String,
        description: String,
        addedBy: String,
    }],
});
module.exports= mongoose.model('Users', userSchema);