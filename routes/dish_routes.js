var express = require('express')
var router = express.Router()
var dishes = require("../db/dishes")

// Add dish to event
router.post('/:eventId/:userId', function(req, res){
  console.log('### POST /dish/:eventId/:userId')

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

router.post('/claim/:dishId/:userId/:eventId', function(req, res){
  console.log('### POST /dish/claim/:dishId/:userId/:eventId')

  dishes.addGuestToDish({
    'dishId': req.params.dishId,
    'userId': req.params.userId
    },
    (err, data) => {
      if (err) {
        console.log('Failed addGuestToDish', err)
        res.send('Failed addGuestToDish')
        return
      }
      console.log('Successfully addGuestToDish', data)
      res.redirect('/event/' + req.params.eventId)
  })
})

module.exports = router
