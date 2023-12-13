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

app.listen(process.env.port || 5400, ()=>{
    console.log('Server is Running');
})


// http://localhost:5400/main/get
// http://localhost:5400/main/post
// http://localhost:5400/main/delete/:id
// http://localhost:5400/main/get/:id

// http://localhost:5400/get
// http://localhost:5400/post
// http://localhost:5400/delete/:id
// http://localhost:5400/get/:id 