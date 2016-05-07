var express = require('express')
var router = express.Router()
var dishes = require("../db/dishes")

// Add dish to event
router.post('/:eventId/:userId', function(req, res){
  console.log('### POST /dish ', 'req.body')

  dishes.dishAddedByHost(req.params.eventId, req.body.course,
    (err, dishId) => {
      if (err) {
        console.log('Failed inserting dish as host', err)
        res.send('Failed inserting dish as host')
        return
      }
      console.log('Successfully inserted dish as host', dishId)
      res.redirect('/event/' + req.params.eventId + '/addinfo')
    })
})

module.exports = router
