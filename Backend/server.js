const express = require('express');
const cors = require('cors');
const connectDB = require('./dataBase');    // Get connect database file
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DataBase
connectDB();

// Home Api
app.get('/', (req,res)=>{
    res.json({"Hello":"Hi Boss"});
})

// Temporary API's 
app.use('/', require('./Route/Temporary'));

// Main API's
app.use('/', require('./Route/Recipient'));

app.listen(process.env.PORT || 5400, ()=>{
    console.log('Server is Running');
})


// https://onlineorgandonationbackend.onrender.com/main/get
// https://onlineorgandonationbackend.onrender.com/main/post
// https://onlineorgandonationbackend.onrender.com/main/delete/:id
// https://onlineorgandonationbackend.onrender.com/main/get/:id

// https://onlineorgandonationbackend.onrender.com/get
// https://onlineorgandonationbackend.onrender.com/post
// https://onlineorgandonationbackend.onrender.com/delete/:id
// https://onlineorgandonationbackend.onrender.com/get/:id 