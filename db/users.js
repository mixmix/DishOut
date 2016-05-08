var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
var bcrypt = require('bcrypt')
const saltRounds = 10

function createUser(userObj, cb){
  bcrypt.hash(userObj.password, saltRounds,function(err, hash){
    var obj = {
      "name": userObj.name,
      "email": userObj.email,
      "hashedPassword": hash
    }
    knex("users").insert(obj)
    .then( (data) => cb(null, data[0]) )
    .catch( (err) => cb(err) )
  })
}

function getUserByEmail(email,cb){
  knex.select().where("email",email).table("users")
    .then( (data) => cb(null, data[0] || 'undefined') )
    .catch( (err) => cb(err) )
}

function getUserById (userId, cb) {
  knex.select().where("id", userId).table("users")
    .then( (data) => cb(null, data[0]) )
    .catch( (err) => cb(err) )
}

function login(email, password, cb) {
  knex.select().where("email", email).table("users")
    .then( (data) => {
      bcrypt.compare(password , data[0].hashedPassword,
        (err, response) => {
          if (response){
            console.log("successful login", response)
            cb(null, data[0])
            return
          }
          console.log("failed login")
          cb(err)
      })
    })
    .catch( (err) => cb(err) )
}

module.exports = {
  createUser: createUser,
  getUserByEmail: getUserByEmail,
  getUserById: getUserById,
  login: login
}
