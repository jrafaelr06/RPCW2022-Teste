const mongoose = require('mongoose')
var Cidade = require('../models/cidade')

module.exports.list = () => {
    return Cidade
        .find({collection: "cidades"})
        .exec()
}
