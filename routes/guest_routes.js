var express = require('express')
var router = express.Router()
var guests = require('../db/guests')

// Add guest to an event
router.post("/", (req, res) => {
  console.log('### POST /guest ')

  console.log('req.body',req.body)
  guests.inviteGuestByEmail({
    email: req.body.email,
    eventId: req.body.eventId
    },
    (err,data) => {
      if (err) {
        console.log('Failed inviteGuestByEmail', err)
        res.send('Failed inviteGuestByEmail')
        return
      }
      console.log("Successful inviteGuestByEmail", data)
      res.redirect("/event/" + req.body.eventId + '/addinfo')
  })
})

router.post("/name", (req, res) => {
  console.log('### POST /guest ')

  console.log("req.body xx", req.body)
  console.log("req.params xx", req.params)

  guests.inviteGuestByName({
    name: req.body.name,
    eventId: req.body.eventId
    },
    (err,data) => {
      if (err) {
        console.log('Failed inviteGuestByName', err)
        res.send('Failed inviteGuestByName')
        return
      }
      console.log("Successful inviteGuestByName", data)
      res.redirect("/event/" + req.body.eventId + '/addinfo')
  })
})

module.exports = router
