var router = require('express').Router(); //Adding Router Method

var product = require('../api/product') //Adding product file location
var category = require('../api/category') //Adding category file location

router.use('/product', product) //Adding URI to product file location
router.use('/category', category) //Adding URI to category file location

module.exports = router; //Exporing Router