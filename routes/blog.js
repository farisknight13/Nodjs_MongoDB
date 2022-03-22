var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const blog = require("../controllers/blog");

/* GET users listing. */
router.get('/', blog.findAll);

router.get('/add', function (req, res, next) {
    res.render('addblog');
});

router.post('/add', [
    body('name', 'Please insert your blog name').not().isEmpty(),
    body('description', 'Please insert your blog description').not().isEmpty(),
    body('author', 'Please insert your blog author').not().isEmpty(),
], blog.insert);

module.exports = router;