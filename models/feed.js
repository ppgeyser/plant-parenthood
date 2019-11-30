const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedSchema = new Schema({
    userID: {
        type: String,
        required: true
    },
    imageURL: {
        type: String
    },
    post: {
        type: String
    },
    comment: {
        type: Array
    },
    crreatedAt: {
        type: Date
    }
});

const Plant = mongoose.model("Feed", feedSchema);

module.exports = Feed;