var express = require('express')
var router = express.Router()
var db = require('./db/db')

// Homepage
router.get('/', function(req, res){
  console.log("### GET '/'")

  res.render('index')
})

// Redirect to Homepage
router.get('/home', function(req, res){
  console.log("### GET '/home'")

  res.redirect('/')
})

// Login
router.post('/login', function(req, res){
  console.log('### POST /login')

  db.login(
    req.body.email,
    req.body.password,
    (err, data) => {
      if (err) {
        console.log("Failed to login", err)
        res.send('Failed login')
        return
      }
      console.log("Successful login")
      req.session.userId = data.id
      res.redirect('/user/' + data.id)
    })
})

// Logout
router.get("/logout",function(req,res){
  console.log('### GET /login')

  req.session.destroy()
  res.redirect("/")
})

// Signup
router.post('/signup', function(req, res){
  console.log('### POST /signup', req.body)

  db.createUser(
    req.body.name,
    req.body.email,
    req.body.password,
    (err, userId) => {
      if (err) {
        console.log("Failed signup", err)
        res.send('Failed signup')
        return
      }
      console.log("successful signup", userId)
      req.session.userId = userId
      res.redirect('/user/' + req.session.userId)
    })
})

// Users Homepage
router.get('/user/:id', function(req, res){
  console.log('### GET /user/:id', req.session)

  db.getHostedEvents(req.session.userId,
    (err, host) => {
      if (err) {
        console.log("Error getHostedEvents from DB", err)
        res.send('Failed getHostedEvents')
        return
      }
      console.log("getHostedEvents returned, now on to getTenativeEvents")
      db.getTenativeEvents(req.session.userId,
        (err, guest) => {
          if (err) {
            console.log("Error getTenativeEvents from DB", err)
            res.send('Failed getTenativeEvents')
            return
          }
          console.log("Successful getting Users Events", host, guest)
          res.render('user_show',
            {
              eventsHosting: host,
              eventsInvitedTo: guest
            })
        })
    })
})

// Screen for creating an event
router.get('/event/new', function(req, res){
  console.log('### GET /event/new')

  res.render('event_new')
})

// Creating event
router.post('/event', function(req, res) {
  console.log('### POST /event ')

  db.createEvent({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      description: req.body.description,
      location: req.body.location
    },
    (err, eventId) => {
      if (err) {
        console.log('Error creating event', err)
        res.send('Failed event creation')
        return
      }
      console.log('Event successfully created', eventId)
      db.hostEvent(eventId, req.session.userId, function(err,data) {
        if (err) {
          console.log('Error adding to Hosts table', err)
          res.send('Failed adding to Hosts table')
          return
        }
        console.log('Event successfully added to Hosts')
        res.redirect('/event/' + eventId + '/addinfo')
      })
    })
})

// Screen for adding info to an event
router.get('/event/:id/addinfo', function(req, res){
  console.log('### GET /event/:id/addinfo')

  db.getDishesByEventID(req.params.id,
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
        'dishes': dishes
      })
    })
})

// View event page
router.get('/event/:id', function(req, res){
  console.log('### GET /event/:id')

  db.getEventByID(req.params.id,
    (err, event) => {
      if (err) {
        console.log('Failed to get event by id')
        res.send('Failed to get event by id')
        return
      }
      console.log('Successfully got event', event)
      db.getDishesByEventID(req.params.id,
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

// Add dish to event
router.post('/dish/:eventId/:userId', function(req, res){
  console.log('### POST /dish ', 'req.body')

  db.insertDishHost(req.params.eventId, req.body.course,
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
