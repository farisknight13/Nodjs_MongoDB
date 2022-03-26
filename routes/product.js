var express = require('express');
var router = express.Router();
const product = require("../controllers/product");

/* GET users listing. */
router.get('/', product.findAll);

router.get('/add', function (req, res, next) {
    res.send('Add Product');
});

router.get('/edit', function (req, res, next) {
    res.send('Edit Product');
});

router.get('/delete', function (req, res, next) {
    res.send('Delete Product');
});

module.exports = router;