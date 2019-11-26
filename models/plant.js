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
        waterDesc: {
            type: String
        },
        weeks: {
            // type: Integer
            type: Number
        },
        days: {
            // type: Integer,
            type: Number,
            required: true
        }
    },
    nonToxic: {
        type: Boolean
    },
    plantPic: {
        type: String
    }
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;