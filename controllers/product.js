const pd = require('../models/product.js')

exports.findAll = async (req, res, next) => {
    await pd.find({}).then((docs) => {
        console.log(docs)
        res.render('product', { data: docs });
    })
}