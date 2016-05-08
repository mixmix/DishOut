var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 8080
var passport = require('passport')
var Strategy = require('passport-facebook').Strategy;
require('dotenv').config()

var basic_routes = require('./routes/basic_routes')
var user_routes = require('./routes/user_routes')
var event_routes = require('./routes/event_routes')
var dish_routes = require('./routes/dish_routes')
var guest_routes = require('./routes/guest_routes')

var users = require("./db/users")

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

//Passport stuff:
passport.use(new Strategy({
    clientID:process.env.FBID,
    clientSecret:process.env.FBSECRET,
    callbackURL: "http://localhost:8080/auth/facebook/callback",
    profileFields: ['displayName','email']
  },
  function(accessToken, refreshToken,profile,cb){
    console.log("here is the user's profile name:",profile._json)
    //create a new fb user if user is not in db,after insert, db will return id, when u get the id, assign it to req.session.userId,
    //if user already exists ,find out the id, and assign to session
    users.getUserByEmail(profile._json.email,function(err,data){
      if(err){
        console.log(" here is the error:", err)
        return
      }
      console.log("here is the getuser data:" , data)
      if (data){
        console.log("Made it to user data")
        cb(data[0])
        return
      }
      else{
        users.createUser({
          name:profile._json.name,
          email:profile._json.email,
          password:""
        },function(err,data){
          if (err){
            console.log("here is the create user error: ",err)
            return
          }
          console.log("in create user", data)
          cb(data)
        })
      }
    })
  }
))

passport.serializeUser(function(user, cb) {
  //this gets called around verification
  console.log("<<  ".green + "I just serialized a user".red, new Date().toJSON() )
  //console.log("<<  ", user)
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  // this gets called with req.user
  console.log(">>  ".green + "I just deserialize a user".red)
  //console.log(">>  ", obj)
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());

/////////

app.get('/', function (req, res) {
  console.log("hit the rendering route")
  res.render('index')
})

// send to fb to authenticate
app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['email'] }));


app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  function(req, res,x) {
    console.log("wizard!", x)
    // console.log('Facebook redirected browser back here (/auth/facebook/callback)'.blue, new Date().toJSON() )
    // console.log('also including an authentication code:'.blue, req.query)
    console.log("here is the argument length", arguments.length)
    // Successful authentication, redirect home.
    //res.redirect("/user/"+req.session.userId) //userId, req.session.passport
  })

//end of passport stuff


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port + '\n')
})
