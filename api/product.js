var router = require('express').Router(); //Adding Router Method
var Product = require('../models/product.model');//Importing Schema for Product


//Add Product
router.post('/addProduct', (req, res) => {
    var product = new Product({ 
        name: req.body.name,
        price: req.body.price,
        categoryId: req.body.categoryId
    });
    product.save((err, result) => {
        if (err) {
            res.json({ status: -1, message: 'Error occured', error: err })
        } else {
            res.json({ status: 1, message: 'Product added Successfully', result: result })
        }
    })
});

//Get Product by CategoryId
router.get('/productByCategory/:id',(req,res)=>{
    var myquery = { categoryId: req.params.id };
    Product.find(myquery,function (err, result) {
        if (err){
            res.json({ status: -1, message: 'Error occured', error: err });
        } else if (result.length == 0) {
            res.json({ status: 0, message: 'No Product Found by CategoryId' });
        } else{
            res.json({ status: 1, message: 'Product by category fetched Successfully', result: result });
        }
    });
});

module.exports = router; //Exporing Router