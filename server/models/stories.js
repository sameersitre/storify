const mongoose = require('mongoose');
var storySchema = new mongoose.Schema({
    title: String,
    cid: String,
    description: String,
    edit: Boolean,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
    },
    contributors: [],
});
module.exports= mongoose.model("Stories", storySchema);