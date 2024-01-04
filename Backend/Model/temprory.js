const mongoose = require('mongoose');

const tempDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
    },
    id_Proof: {
        type: String,
        required: true,
    },
    liveImage: {
        type: String, 
        required: true,
    },
    address: {
        type: String,
        maxlength: 150,
        required: true,
    },
    description: {
        type: String,
        maxlength: 2000,
        required: true,
    },
    compensation: {
        type: String,
        maxlength: 2000,
        required: true,
    },
    mobileNumber: {
        type: String, 
        required: true,
    },
    otherContactDetails: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const TemporaryCollection = mongoose.model('temporary', tempDataSchema);
module.exports = TemporaryCollection;