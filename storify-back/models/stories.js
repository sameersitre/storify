const mongoose = require('mongoose');
var storySchema = new mongoose.Schema({
    title: String,
    characters: [],
    description: String,
    createdBy: String,
    contributors: [],
});
module.exports= mongoose.model("Stories", storySchema);