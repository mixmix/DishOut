var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 8080
var db = require('./db/db')
var routing = require('./routes')

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

app.use('/', routing)

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port + '\n')
})
