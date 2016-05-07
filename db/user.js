var knex = require('./knexJames')(process.env.NODE_ENV || "development")
var bcrypt = require('bcrypt')
const saltRounds = 10;

function login(email, password, cb){
  knex.select().where("email", email).table("users")
    .then(function(data){
      console.log("here is the user's hashed password: ",data[0].hashedPassword)
      bcrypt.compare(password , data[0].hashedPassword, function(err,response){
        if(response){
          console.log("successful login", response)
          cb(null, data[0])
        }
        else{
          console.log("failed login")
          cb(err)
        }
      })
    })
    .catch(function(err){
      cb(err)
    })
}

function createUser(name,email,password,cb){
  bcrypt.hash(password,saltRounds,function(err,hash){
    knex("users").insert({
      name:name,
      email:email,
      hashedPassword:hash
    })
    .then(function(data){
      cb(null,data[0])
    })
    .catch(function(err){
      cb(err)
    })
  })
}

function getUserByEmail(email){
  knex.select().where("email",email).table("users")
    .then(function(data){
      console.log("Here is the users data: ", data)
    })
    .catch(function(err){
      if (err) throw err
    })
}

module.exports = {login:login,
  createUser:createUser,
  getUserByEmail:getUserByEmail
}
