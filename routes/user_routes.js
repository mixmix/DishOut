var express = require('express')
var router = express.Router()
var user = require('../db/user')
var hosts = require("../db/hosts")
var guest = require("../db/guest")

// Users Homepage
router.get('/:id', function(req, res) {
  console.log('### GET /user/:id', req.session.userId)

  user.getUserById(req.session.userId,
    (err, user) => {
      if (err) {
        console.log("Error getUserById from DB", err)
        res.send('Failed getUserById')
        return
      }
      console.log("getUserById returned, now on to getHostedEvents")
      hosts.getHostedEvents(req.session.userId,
        (err, host) => {
          if (err) {
            console.log("Error getHostedEvents from DB", err)
            res.send('Failed getHostedEvents')
            return
          }
          console.log("getHostedEvents returned, now on to getGuestedEvents")
          guest.getGuestedEvents(req.session.userId,
            (err, guest) => {
              if (err) {
                console.log("Error getTenativeEvents from DB", err)
                res.send('Failed getTenativeEvents')
                return
              }
              console.log("Successful getting Users Events", host, guest)
              res.render('user_show',
                {
                  'user': user,
                  'hostedEvents': host,
                  'guestedEvents': guest
                })
            })
        })
    })
})

router.get('/:id/edit', function (req, res) {
  res.end('temp before we write user/:id/edit')
})

module.exports = router
