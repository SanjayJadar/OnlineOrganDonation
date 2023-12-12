const mongoose = require('mongoose');

const DonerSchema = new mongoose.Schema({
    
});

const DonerCollection = mongoose.model('doners', DonerSchema);
module.exports = DonerCollection;