const mongoose = require('mongoose');
require('dotenv').config;

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://sanjayjadar53:VD2Ardjzr4tIekON@portfolio.76hvi7e.mongodb.net/OnlineOrganDonation?retryWrites=true&w=majority");
        console.log(`MongoDB Connected` + conn.connection.host);
    }
    catch(err){
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;