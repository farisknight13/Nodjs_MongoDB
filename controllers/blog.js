const { body, validationResult } = require('express-validator');

const bg = require('../models/blog.js')


exports.findAll = async (req, res, next) => {

    await bg.find({}).then((docs) => {
        console.log(docs)
        res.render('blog', { data: docs });
    })
}

exports.insert = async (req, res, next) => {
    // console.log(req.body)
    // res.render('addblog');
    const result = validationResult(req);
    const errors = result.errors
    if (!result.isEmpty()) {
        // return res.status(422).json({ errors: errors.array() });
        // console.log(errors)
        res.render('addblog', { errors: errors })
    } else {
        //insert to db
        bg.insert({
            name: req.body.name,
            description: req.body.description,
            author: req.body.author
        }, function (err, blog) {
            if (err) {
                res.send(err)
            } else {
                res.location('/blog')
                res.redirect('/blog')
            }
        })
    }
}