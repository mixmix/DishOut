var express = require('express')
var router = express.Router()
var User = require("../db/users")
var helpers = require("../helpers/helpers")

// Homepage
router.get('/', function(req, res){
  console.log("### GET '/'")

  res.render('index')
})

// Login
router.post('/login', function(req, res){
  console.log('### POST /login')

  helpers.hashUserObj(req.body,
    (err, postHash) => {
      if (err) {
        console.log('Failed hash', err)
        return
      }
      console.log('Successful hash', postHash)
      User.getUserByEmail(postHash.email,
        (err, userObj) => {
          if (err) {
            console.log('Failed getUserByEmail', err)
            return
          }
          console.log('Successful getUserByEmail', userObj)

          console.log("Successful login with id", userObj.id)
          req.session.userId = userObj.id
          res.redirect('/user/' + userObj.id)
        })
  })
})

// Logout
router.get("/logout",function(req,res){
  console.log('### GET /logout')

  req.session.destroy()
  res.redirect("/")
})

// Signup
router.post('/signup', function(req, res){
  console.log('### POST /signup', req.body)

  users.createUser({
      "name": req.body.name,
      "email": req.body.email,
      "password": req.body.password
    },
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

module.exports = router
