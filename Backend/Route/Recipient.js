const mongoose = require('mongoose');
const express = require('express');
const RecipientCollection = require('../Model/recipient');
const router = express.Router();

// Post Data
router.post('/main/post', async(req,res)=>{
    await RecipientCollection.insertMany(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

// Get Data
router.get('/main/get', async(req,res)=>{
    await RecipientCollection.find({})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

// Get Particular Data
router.get('/main/get/:id', async(req,res)=>{
    const id = req.params.id;
    await RecipientCollection.findById({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

// Delete Particular Data
router.delete('/main/delete/:id', async(req,res)=>{
    const id = req.params.id;
    await RecipientCollection.findByIdAndDelete({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

module.exports = router;