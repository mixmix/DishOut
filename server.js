var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 8080
var db = require('./db/db')

var basic_routes = require('./routes/basic_routes')
var user_routes = require('./routes/user_routes')
var event_routes = require('./routes/event_routes')
var dish_routes = require('./routes/dish_routes')
var guest_routes = require('./routes/guest_routes')

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
app.use(express.static(__dirname + '/public'))

app.use('/', basic_routes)
app.use('/user', user_routes)
app.use('/event', event_routes)
app.use('/dish', dish_routes)

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port + '\n')
})
