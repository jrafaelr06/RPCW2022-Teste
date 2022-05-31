var express = require('express');
var router = express.Router();

var Cidade = require('../controllers/cidade')
var cidade = require('../models/cidade')

/* Devolve a lista das cidades, com os campos: id, nome, e distrito*/
router.get('/cidades', function(req, res) {
  Cidade.list()
    .then(data => res.send(data))
    .catch(error => res.status(501).send({ erorr: error }))
});

module.exports = router;
