var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

function getEventsAttending (userId, cb) {
  knex("guests").select().where("userId", userId)
    .then( (data) => cb(null, data) )
    .catch( (err) => cb(err) )
}

function inviteGuestsByEmail(email,eventId,cb){
  knex("users").select().where("email",email)
  .then(function(data){
    console.log('if found,what i get ',data)
    knex("guests").insert({
      id: Date.now(),
      eventId:eventId,
      userId:data[0].id
    }).then(function(data){
      cb(data)
    })
  })
  .catch(function(err){
    console.log("db error: ", err)
  })
}

module.exports = {
  getEventsAttending: getEventsAttending,
  inviteGuestsByEmail: inviteGuestsByEmail
}
