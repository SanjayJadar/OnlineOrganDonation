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
    .then(data=>{
        // Reverse Data
        const reversedData = data.slice().reverse();
        const page = req.query.page;
        const limit = req.query.limit;

        const startIndex = (page-1)*limit;
        const endIndex = page*limit;

        const result = reversedData.slice(startIndex, endIndex);
        res.json(result);
    })
    .catch(err=>res.json(err));
})

// Get Particular Data BloodGroup
router.get('/main/get/blood/:id', async(req,res)=>{
    const id = req.params.id;
    await RecipientCollection.find({bloodGroup:id})
    .then(data=>{
        // Reverse Data
        const reversedData = data.slice().reverse();
        const page = req.query.page;
        const limit = req.query.limit;
        
        if(page && limit){
            const startIndex = (page-1)*limit;
            const endIndex = page*limit;
    
            const result = reversedData.slice(startIndex, endIndex);
            res.json(result);
        }
        else{
            res.json(reversedData);
        }
    })
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