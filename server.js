var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')
app.set('views', __dirname + '/public/views')

app.use(express.static(__dirname + '/public'))

// STRANGER go to DISHOUT homepage
app.get('/home', function(req, res){
  console.log("STRANGER welcome to DISHOUT: ")
  res.render('stranger')
})

// // redirect STRANGER go to DISHOUT homepage
// app.get('/home', function(req, res){
//   console.log("redirect STRANGER welcome to DISHOUT: ")
//   res.redirect('/')
// })

// USER go to users homepage
app.get('/user/:id', function(req, res){
  console.log("USER go to users homepage: ")
  res.send('USER go to users homepage')
})

// HOST go to create new event page
app.get('/event/new', function(req, res){
  console.log("HOST go to create new event page: ")
  res.send('HOST go to create new event page')
})

// HOST post the event host wants to create
app.post('/event', function(req, res){
  console.log(
    "HOST post the event host wants to create: ",
    req.body)
  res.send('HOST post the event host wants to create')
})

// HOST add courses & invitess to event
app.get('/event/:id/addinfo', function(req, res){
  console.log("HOST add courses & invitess to event: ")
  res.send('HOST add courses & invitess to event')
})

// GUEST view event page
app.get('/event/:id', function(req, res){
  console.log("GUEST view event page: ")
  res.send('GUEST view event page')
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port)
})
