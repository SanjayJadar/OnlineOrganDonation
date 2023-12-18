const mongoose = require('mongoose');

const tempDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
    },
    id_Proof: {
        type: String,
    },
    liveImage: {
        type: String, 
    },
    address: {
        type: String,
        maxlength: 150
    },
    description: {
        type: String,
        maxlength: 2000,
    },
    compensation: {
        type: String,
        maxlength: 2000,
    },
    mobileNumber: {
        type: String,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],
    },
    otherContactDetails: {
        type: String,
    },
});

const TemporaryCollection = mongoose.model('temporary', tempDataSchema);
module.exports = TemporaryCollection;