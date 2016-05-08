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

module.exports = router
