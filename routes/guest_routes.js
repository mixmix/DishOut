var express = require('express')
var router = express.Router()
var User = require('../db/users')
var Guest = require('../db/guests')

// Add guest to an event
router.post("/email", (req, res) => {
  console.log('### POST /guest ')

  User.getUserByEmail(req.body.email,
    (err, user) => {
      if (err) {
        console.log('Failed getUserByEmail', err)
        res.send('Failed getUserByEmail')
        return
      }
      console.log("Successful getUserByEmail", user)
      Guest.createGuest({
          'eventId': req.body.eventId,
          'userId': user.id
        },
        (err, guestId) => {
          if (err) {
            console.log('Failed createGuest', err)
            res.send('Failed createGuest')
            return
          }
          console.log("Successful createGuest", guestId)
          res.redirect("/event/" + req.body.eventId + '/addinfo')
      })
  })
})

router.post("/name", (req, res) => {
  console.log('### POST /guest ')

  User.getUserByName(req.body.name,
      (err, user) => {
        if (err) {
          console.log('Failed getUserByName', err)
          res.send('Failed getUserByName')
          return
        }
        console.log("Successful getUserByName", user)
        Guest.createGuest({
            'eventId': req.body.eventId,
            'userId': user.id
          },
          (err, guestId) => {
            if (err) {
              console.log('Failed createGuest', err)
              res.send('Failed createGuest')
              return
            }
            console.log("Successful createGuest", guestId)
            res.redirect("/event/" + req.body.eventId + '/addinfo')
        })
    })
})

module.exports = router
