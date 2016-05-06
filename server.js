var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 8080
var db = require('./db/db')

var session = require('express-session')

app.use(session({
  secret: 'ssshhhhhh! Top secret!',
  saveUninitialized: true,
  resave: true
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')
app.set('views', __dirname + '/public/views')

// app.use(express.static(__dirname + '/public'))

var currentUserID = {}

// STRANGER go to DISHOUT homepage
app.get('/', function(req, res){
  console.log('/')
  console.log('STRANGER to DISHOUT landing page (with login/signup)')

  res.render('stranger_show')
})

// redirect STRANGER go to DISHOUT homepage
app.get('/home', function(req, res){
  console.log('/home')
  console.log("redirecting to '/' which is the landing page")
  res.redirect('/')
})


app.post('/login', function(req, res){
  console.log('/login')
  console.log("try and login via db")

  console.log("req/body: ", req.body)

  db.login(
    req.body.email,
    req.body.password,
    (err, data) => {
      if (err) {
        console.log("failed to login, redirected to '/'", err)
        res.redirect('/')
        return
      }
        console.log("here is the data for the session",data)
        console.log("req: ", req.body)
        req.session.userId = data.id
        console.log("successful login, redirected to '/user/:id'")
        console.log("currentUserID: ", currentUserID)
        res.redirect('/user/' + data.id)
    })
})

app.get("/logout",function(req,res){
  req.session.destroy()
  res.redirect("/")
})

app.post('/signup', function(req, res){
  console.log('/signup')
  console.log("try and signup via db: ", req.body)

  db.createUser(
    req.body.name,
    req.body.email,
    req.body.password,
    (err, id) => {
      if (err) {
        console.log("failed to signup, redirected to '/'", err)
        res.redirect('/')
        return
      }
      console.log(id[0])
      req.session.id = id[0]
      console.log("successful signup, redirected to '/user/:id'")
      res.redirect('/user/' + id)
    })
})

// USER go to users homepage
app.get('/user/:id', function(req, res){
  console.log('/user/:id')
  console.log('USER go to users homepage: ', req.body, req.params)
  console.log('currentUserID: ', currentUserID)
  console.log("Session id: ", req.session.userId)

  db.getHostedEvents(req.params.id,
    (err, host) => {
      db.getTenativeEvents(req.params.id,
        (err, guest) => {
          res.render('user_show',
            {
              eventsHosting: host,
              eventsInvitedTo: guest
            })
        })
    })
})

// HOST go to create new event page
app.get('/event/new', function(req, res){
  console.log('/event/new ')
  console.log('HOST go to create new event page')

  res.render('event_new')
})

// HOST post the event host wants to create
app.post('/event', function(req, res) {
  console.log("HOST post the event host wants to create: ")

  db.createEvent({
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      description: req.body.description,
      location: req.body.location
    },
    (err, id) => {
      console.log('Event successfully created, redirecting to /event/' + id)
      res.redirect('/event/' + id)
    })
})

// HOST add courses & invitess to event
app.get('/event/:id/addinfo', function(req, res){
  console.log('/event/:id/addinfo ', 'req.params: ', req.params)
  console.log('HOST add Dishes & invite Guests to event')

  res.render('event_addinfo')
})

// GUEST view event page
app.get('/event/:id', function(req, res){
  console.log('/event/:id ', 'req.params: ', req.params)
  console.log('GUEST view event page')

  res.render('event_show',
    { event: {
        id: 3030,
        name: "bennie",
        time: "6pm",
        date: "1st Feb",
        description: "90's Themed",
        location: "123 Fake St"
      },
      dishes: [
        4,
        5,
        8
      ]
    })
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port + '\n')
})
