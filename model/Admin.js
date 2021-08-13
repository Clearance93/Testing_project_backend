
let mongoose = require('mongoose');


let adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id_number: {
         type: Number,
         required: true,
         unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmed_password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Admin", adminSchema);