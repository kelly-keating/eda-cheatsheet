
var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getTopics(req.app.get('connection'))
    .then((result) => {
      console.log(result)
      return result
    })
    // .then((topics) => res.render('home', {topics}))
    .then((nothing) => res.send('sup'))
})

module.exports = router
