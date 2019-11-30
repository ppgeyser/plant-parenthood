const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    post: {
        type: String
    },
    comment: {
        type: Array
    },
    crreatedAt: {
        type: Date,
        required: true
    }
});

const Plant = mongoose.model("Feed", feedSchema);

module.exports = Feed;
