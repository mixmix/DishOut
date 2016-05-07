var express = require('express')
var router = express.Router()
var user = require("../db/user")


// Homepage
router.get('/', function(req, res){
  console.log("### GET '/'")

  res.render('index')
})

// Login
router.post('/login', function(req, res){
  console.log('### POST /login')

  user.login(
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
  console.log('### GET /logout')

  req.session.destroy()
  res.redirect("/")
})

// Signup
router.post('/signup', function(req, res){
  console.log('### POST /signup', req.body)

  user.createUser({
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
