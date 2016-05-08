var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

module.exports = {

  getEventsAttending: (userId, cb) => {
    knex("guests").select().where("userId", userId)
      .then( (data) => cb(null, data) )
      .catch( (err) => cb(err) )
  },

  inviteGuestByEmail: (inviteObj, cb) => {
    knex("users").select().where("email", inviteObj.email)
      .then( (data) => {
        return knex("guests").insert({
          eventId: inviteObj.eventId,
          userId: data[0].id
        })
      })
      .then( (data) => cb(null, data) )
      .catch( (err) => cb(err) )
  },

  inviteGuestByName: (eventObj, cb) => {
    console.log("eventObj ", eventObj)
    knex("users").select().where("name",eventObj.name)
      .then((data) => {
        return knex("guests").insert({
          eventId:eventObj.eventId,
          userId:data[0].id
        })
      })
      .then((data) => cb(null,data))
      .catch((err) => cb(err))
  }
}
