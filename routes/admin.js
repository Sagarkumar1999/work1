const path = require('path')
const express = require('express');

const productsController = require('../controllers/product');



const router = express.Router();

router.use('/add-product', productsController.getAddProduct);

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;