var express = require('express')
var router = express.Router()
var guest = require('../db/guests')

// Add dish to event
router.post('/', function(req, res){
  console.log('### POST /guest ')

  res.send('you tried to add a guest. this feature is not implemented yet.')
})

router.post("/newGuest",function(req,res){
  console.log('req.body',req.body)
  guest.inviteGuestsByEmail(req.body.email,req.body.eventId,function(err,data){
    if (err) console.log(err)
    console.log("Invite data: ", data)
    res.send("Invite sent!")
  })

})

module.exports = router
