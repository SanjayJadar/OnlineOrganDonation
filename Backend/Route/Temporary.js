const mongoose = require('mongoose');
const express = require('express'); 
const TemporaryCollection = require('../Model/temprory');
const router = express.Router();

// Post Data
router.post('/post', async(req,res)=>{
    await TemporaryCollection.insertMany(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

// Get Data
router.get('/get', async(req,res)=>{
    await TemporaryCollection.find({}) 
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
router.get('/get/:id', async(req,res)=>{
    const id = req.params.id;
    await TemporaryCollection.findById({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

// Delete Particular Data
router.delete('/delete/:id', async(req,res)=>{
    const id = req.params.id;
    await TemporaryCollection.findByIdAndDelete({_id:id})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

module.exports = router;