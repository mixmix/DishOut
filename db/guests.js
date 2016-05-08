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
    knex("guests").insert({
      eventId:eventId,
      userId:data.id
    })
  })
  .then(function(data){
    console.log("Successfully inserted this into guests:", data)
  })
  .catch(function(err){
    console.log("db error: ", err)
  })
}

module.exports = {
  getEventsAttending: getEventsAttending,
  inviteGuestsByEmail: inviteGuestsByEmail
}
