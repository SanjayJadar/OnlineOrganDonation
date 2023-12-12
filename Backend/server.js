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

app.listen(process.env.port || 5400, ()=>{
    console.log('Server is Running');
})