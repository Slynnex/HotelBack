const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    last_name:{
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    cell_phone:{
        type: Number,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema);