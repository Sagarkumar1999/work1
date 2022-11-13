const path = require('path')
const express = require('express');

const router = express.Router();

router.use('/contact', (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact.html'));
});

router.use('/success', (req,res,next)=>{
    console.log('----')
    res.sendFile(path.join(__dirname,'../','views','success.html'));

})

   

router.post('/contact-us', (req,res,next)=>{
    res.send("thanks ")
});

module.exports = router;
