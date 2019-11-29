const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
    userID: {
        type: String,
        required: true,
        unique: true
    },
    plantNickname: {
        type: String
    },
    plantName: {
        type: String,
        required: true
    },
    plantSci: {
        type: String
    },
    plantCare: {
        soil: {
            type: String
        },
        sun: {
            type: String,
            required: true
        },
        water: {
            type: String
        },
        weeks: {
            type: Number
        },
        days: {
            type: Number,
            required: true
        },
        lastWatered: {
            type: Date
        }
    },
    nonToxic: {
        type: Boolean
    },
    plantPic: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true
    }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;