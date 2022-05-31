var express = require('express');
const axios = require('axios')
var router = express.Router();

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTRlY2VhNmI1ZDVjMjQ3NmNmMDhiMSIsImxldmVsIjozLjUsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InJwY3cyMDIyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDAxMTQyOSwiZXhwIjoxNjU0MDQwMjI5fQ.U8PiPg_JwXPVw8jkkB6H3WdPVT6w329ouK8BW33EU3HHoDETf0yUmArFdnMMO8Ih0z-6T4WtA_fX-bZ5VRl16E1bWw27qdAZS72rHyl2cMzuftUFkMi2dGQKTDW_mIgaJv_LKFpaYSVqH80QA4QtTdWWUn9YUrb4_ErJMTP6MZI7x78_rPkPcb4jkkGjw-Ii3GRMH4XYh9sCsACjGEUXt2Ch23yVomL7JRzGCa9jtiQcrIVk-gVfUncYycGRWrTnJ7GIUCHqludmkA1YRbSBnGqTECflmZfjWpjbxxWa3312hgHBd3srwmqi4cTog1K_MHZOshR6gY4qUbOTE-DGTQ'

/* GET home page. */
router.get('/', function(req, res) {
  res.render('main', { });
});

router.get('/classes', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + token)
    .then(response => {
      let lista = response.data
      res.render('classes', {classes: lista})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

router.get('/codigo/:id', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + req.params.id + '?token=' + token)
    .then(response => {
      let data = response.data
      res.render('classe', {info: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

router.get('/termos', function(req, res) {
  axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + token)
    .then(response => {
      let data = response.data
      res.render('termos', {termos: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

module.exports = router;
