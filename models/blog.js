const db = require('monk')('localhost:27017/TotorialDB');
// const db = require('monk')('mongodb+srv://farisknight:knight1306@fariscluster.gfciy.mongodb.net/fkbackend?retryWrites=true&w=majority');

const bg = db.get('blogs')

module.exports = bg