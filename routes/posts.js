const express = require('express');
const Questions = require('../models/Questions');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send('We are currently on posts page')
});

router.post('/', (req,res) =>{
    console.log(req.body);
    const questions = new Questions({
        mcq : req.body.mcq
    })

    questions.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
         res.json({message : err.message})
    })
});


module.exports = router;
