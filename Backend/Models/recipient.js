const mongoose = require('mongoose');

const RecipientSchema = new mongoose.Schema({

});

const RecipientCollection = mongoose.model('recipients', RecipientSchema);
module.exports = RecipientCollection;