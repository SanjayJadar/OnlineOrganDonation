const mongoose = require('mongoose');

const RecipientSchema = new mongoose.Schema({
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

const RecipientCollection = mongoose.model('recipients', RecipientSchema);
module.exports = RecipientCollection;