var router = require('express').Router(); //Adding Router Method
var Product = require('../models/product.model');//Importing Schema for Product
var Category = require('../models/category.model');//Importing Schema for Product


//Get Product by CategoryId
router.get('/getAllCategory', (req, res) => {
    Category.find( function (err, result) {
        if (err) {
            res.json({ status: -1, message: 'Error occured', error: err })
        } else if(result.length==0){
            res.json({ status: 0, message: 'No Category Found' })
        } else{
            res.json({ status: 1, message: 'All Category fetched Successfully', result: result })
        }
    })
});

//Add Product
router.post('/addCategory', (req, res) => {
    var category = new Category({ name: req.body.name });
    category.save( (err, result) => {
        if (err) {
            res.json({ status: -1, message: 'Error occured', error: err })
        } else {
            res.json({ status: 1, message: 'Category added Successfully', result: result })
        }
    })
});

//Delete Category and Associated Product
router.delete('/deleteCategory/:id',(req,res)=>{
    var id = { _id: req.params.id }
    Category.findByIdAndRemove(id,(err,result)=>{
        if (err) {
            res.json({ status: -1, message: 'Error occured', error: err })
        } else {
            var categoryId = { categoryId: req.params.id}
            Product.find(categoryId,(findErr,findRes)=>{
                if (findErr) {
                    res.json({ status: -1, message: 'Error occured', error: findErr })
                } else {
                    Product.remove(categoryId,(err1,result1)=>{
                        if (err1) {
                            res.json({ status: -1, message: 'Error occured', error: err1 })
                        } else {
                            res.json({ status: 1, message: 'Category and associated Product deleted Successfully', category: result,product:findRes })
                        }
                    })
                } 
            })
        }
    })
});



module.exports = router; //Exporing Router