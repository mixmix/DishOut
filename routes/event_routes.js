var express = require('express')
var router = express.Router()
var events = require('../db/events')
var hosts = require("../db/hosts")
var dishes = require("../db/dishes")

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

  events.getEventById(req.params.id,
    (err, event) => {
      if (err) {
        console.log('Failed to retrieve event by eventID ', err)
        res.send('Failed to retrieve event by eventID')
        return
      }
      console.log("Successful getEventById", event)
      dishes.getDishesByEventId(req.params.id,
        (err, dishes) => {
          if (err) {
            console.log('Failed to retrieve dishes by eventID ', err)
            res.send('Failed to retrieve dishes by eventID')
            return
          }
          console.log("Successful getDishesByEventID", dishes)
          res.render('event_addinfo', {
            'userId': req.session.userId,
            'event': event,
            'dishes': dishes,
            'guests': [{
                name: 'Mr. FakeName (this isnt implemented)'
              }]
          })
        })
    })
})

// View event page
router.get('/:id', function(req, res){
  console.log('### GET /event/:id')

  events.getEventById(req.params.id,
    (err, event) => {
      if (err) {
        console.log('Failed to get event by id', err)
        res.send('Failed to get event by id')
        return
      }
      console.log('Successfully got event', event)
      dishes.getDishesByEventId(req.params.id,
        (err, dishesByEvent) => {
          if (err) {
            console.log('Failed to get dishes by event', err)
            res.send('Failed to get dishes by event')
            return
          }
          console.log('Successfully got dishes', dishesByEvent)
          dishes.addUserNameToEachDish(dishesByEvent,
            (err, updatedDishes) => {
              if (err) {
                console.log('Failed to add user names to dishes', err)
                res.send('Failed to add user names to dishes')
                return
              }
              console.log('Successfully got dishes', updatedDishes)
              res.render('event_show', {
                "event": event,
                "dishes": updatedDishes,
                "userId": req.session.userId
              })
          })
      })
    })
})

module.exports = router
