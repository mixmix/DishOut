var express = require('express')
var router = express.Router()
var events = require('../db/events')
var hosts = require("../db/hosts")
var dish = require("../db/dish")

// Screen for creating an event
router.get('/new', function(req, res){
  console.log('### GET /event/new')

  res.render('event_new')
})

// Creating event
router.post('/', function(req, res) {
  console.log('### POST /event ')

  events.createEvent({
      "name": req.body.name,
      "date": req.body.date,
      "time": req.body.time,
      "description": req.body.description,
      "location": req.body.location
    },
    (err, eventId) => {
      if (err) {
        console.log('Error creating event', err)
        res.send('Failed event creation')
        return
      }
      console.log('Event successfully created', eventId, req.session.userId)
      hosts.addHostOfEvent({
        'eventId': eventId,
        'userId': req.session.userId
        },
        (err, hostId) => {
          if (err) {
            console.log('Error adding to Hosts table', err)
            res.send('Failed adding to Hosts table')
            return
          }
          console.log('Event successfully added to Hosts', hostId)
          res.redirect('/event/' + eventId + '/addinfo')
      })
    })
})

// Screen for adding info to an event
router.get('/:id/addinfo', function(req, res){
  console.log('### GET /event/:id/addinfo')

  dish.getDishesByEventID(req.params.id,
    (err, dishes) => {
      if (err) {
        console.log('Failed to retrieve dishes by eventID ', err)
        res.send('Failed to retrieve dishes by eventID')
        return
      }
      console.log("Successful getDishesByEventID", dishes)
      res.render('event_addinfo', {
        'eventId': req.params.id,
        'userId': req.session.userId,
        'dishes': dishes,
        'guests': [{
            name: 'test person this isnt implemented'
          }],
        'event': {
          name: 'dummy data this isnt implemented',
          time: 'dummy data this isnt implemented',
          date: 'dummy data this isnt implemented',
          description: 'dummy data this isnt implemented',
          location: 'dummy data this isnt implemented'
        }
      })
    })
})

// View event page
router.get('/:id', function(req, res){
  console.log('### GET /event/:id')

  events.getEventByID(req.params.id,
    (err, event) => {
      if (err) {
        console.log('Failed to get event by id')
        res.send('Failed to get event by id')
        return
      }
      console.log('Successfully got event', event)
      dish.getDishesByEventID(req.params.id,
        (err, dishes) => {
          if (err) {
            console.log('Failed to get dishes by event')
            res.send('Failed to get dishes by event')
            return
          }
          console.log('Successfully got dishes', dishes)
          res.render('event_show', {
            "event": event,
            "dishes": dishes
          })
      })
    })
})

module.exports = router
