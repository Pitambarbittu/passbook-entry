const mongoose = require("mongoose");


const passbookSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required:true
    },
    ttype: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model("passbook",passbookSchema )