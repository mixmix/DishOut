var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
var bcrypt = require('bcrypt')
const saltRounds = 10

function createUser(userObj, cb){
  bcrypt.hash(userObj.password,saltRounds,function(err,hash){
    var newUserObj = {
      name: userObj.name,
      email: userObj.email,
      hashedPassword: hash
    }
    if (typeof userObj.name !== 'string') {
      cb("invalid user name")
      return
    }
    knex("users").insert(newUserObj)
      .then(function(data){
        cb(null,data[0])
      })
      .catch(function(err){
        cb(err)
      })
  })

}

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

function getUserByEmail(email){
  knex.select().where("email",email).table("users")
    .then( (data) => cb(null, data[0]) )
    .catch( (err) => cb(err) )
}

function getUserById (userId, cb) {
  knex.select().where("id", userId).table("users")
    .then( (data) => cb(null, data[0]) )
    .catch( (err) => cb(err) )
}

module.exports = {
  createUser:createUser,
  login:login,
  getUserByEmail:getUserByEmail,
  getUserById: getUserById
}
