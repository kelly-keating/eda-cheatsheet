
var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getTopics(req.app.get('connection'))
    .then((topics) => res.render('home', {topics}))
})

router.get('/topic/:id', function (req, res) {
  db.getTopicById(req.params.id, req.app.get('connection'))
    .then((topic) => res.render('topic', topic))
})


function log(str) {
    console.log(str)
    return str
    // .then((str) => log(str))
}

module.exports = router
