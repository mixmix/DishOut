var User = require('../db/users')
var LocalStrategy   = require('passport-local').Strategy;
var helpers = require("../helpers/helpers")


module.exports = function(passport){
   // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.getUserById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req,email,password,done){
      process.nextTick(function(){
        User.getUserByEmail(email,function(err,user){
          if(err) return done(err);

          if(user){
            return done(null,false)
          }
          else{
              var newUser = {
                name:req.body.name,
                email:email,
                password: password,
              }
               helpers.hashUserObj(newUser, function(err,hashedUser){
                  createUser(hashedUser,function(err,data){
                    if(err) console.log(err)
                    console.log("user successfully create: ", hashedUser)
                    return done(null,hashedUser)
                  })
              })
            }
          }
        })
      })
    }

}
