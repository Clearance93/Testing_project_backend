

let mongoose = require('mongoose');


let eightSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    id_number: {
        type: Number,
        required: true,
        unique: true
    },
    home_address: {
        type: String,
        required: true
    },
    criminal_record: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    ethic: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    greated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Eight", eightSchema);