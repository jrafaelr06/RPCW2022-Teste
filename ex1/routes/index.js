var express = require('express');
var router = express.Router();

var Controller = require('../controllers/cidade')

/* Devolve a lista das cidades, com os campos: id, nome, e distrito*/
router.get('/cidades', function(req, res) {
  let query = req.query.distrito
  if (query) {
    Controller.distrito()
      .then(data => res.send(data))
      .catch(error => res.status(504).send({ error: error }))
  } else {
    Controller.list()
      .then(data => res.send(data))
      .catch(error => res.status(501).send({ erorr: error }))
  }
});

router.get('/cidades/:id', function(req, res) {
  Controller.cidade(req.params.id)
    .then(data => res.send(data))
    .catch(error => res.status(502).send({ error: error}))
})

router.get('/cidades/nomes', function(req, res) {
  Controller.cidadesAlfa()
    .then(data => res.send(data))
    .catch(error => res.status(503).send({ error: error }))
})

router.get('/distritos', function(req, res) {
  res.send({})
})

router.get('/ligacoes', function(req, res) {
  let origem = req.query.origem
  let dist = req.query.dist
  if (origem) {
    Controller.origem(origem)
      .then(data => res.send(data))
      .catch(error => res.status(505).send({ error: error }))
  } else if (dist) {
    Controller.distancia(dist)
      .then(data => res.send(data))
      .catch(error => res.status(506).send({ error: error }))
  }
})

module.exports = router;
