const mongoose = require('mongoose');
var promptSchema = new mongoose.Schema({
    character1: String,
    character2: String,
    location: String,
});
module.exports= mongoose.model("Prompts", promptSchema);