var express = require('express')
var router = express.Router()
var guest = require('../db/guests')

// Add dish to event
router.post('/', function(req, res){
  console.log('### POST /guest ')

  res.send('you tried to add a guest. this feature is not implemented yet.')
})

module.exports = router
