var Cidade = require('../models/cidade')
var Ligacoes = require('../models/ligacoes')

module.exports.list = () => {
    return Cidade
        .find({}, { _id: 0, id:1, nome:1, distrito:1 })
        .exec()
}

module.exports.cidade = id => {
    return Cidade
        .findOne({id: id})
        .exec()
}

module.exports.cidadesAlfa = () => {
    return Cidade
        .find({}, {_id: 0, nome: 1})
        .sort({nome: 1})
        .exec()
}

module.exports.distrito = distrito => {
    return Cidade
        .find({distrito: distrito})
        .exec()
}

module.exports.distritos = () => {
    return Cidade
        .find()
        .group({_id: distrito})
        .exec()
}

module.exports.origem = origem => {
    return Ligacoes
        .find({origem: origem}, {id: 1, destino: 1})
        .exec()
}

module.exports.distancia = distancia => {
    return Ligacoes
        .find({distancia: {$gte: distancia}}, {id: 1, origem: 1, destino: 1})
        .exec()
}
