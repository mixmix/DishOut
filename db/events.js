var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

function createEvent(event, cb) {
  knex('events').insert({
    'name': event.name,
    'date': event.date,
    'time': event.time,
    'description': event.description,
    'location': event.location
  })
    .then( (data) => cb(null, data[0]) )
    .catch( (err) => cb(err) )
}

function getEventById(eventId, cb){
  knex.select().where("id", eventId).table("events")
    .then( (data) => cb(null, data[0]) )
    .catch( (err) => cb(err) )
}

function getHostedEvents(userId, cb){
  knex.select().where("userId", userId).table("hosts")
    .then( (events) => {

      if (!events.length) {
          cb(null, [])
          return
      }

      Promise.all(events.map(function(evt) {
        return knex.select().where("id", evt.eventId).table("events")
      }))
        .then( (events) => {

          if (events[0].length) {
            cb(null, events.map(evt => evt[0]))
            return
          }

          cb(null, [])
        })
    })
    .catch( (err) => cb(err) )
}

function getGuestedEvents (userId, cb) {
  knex.select().where("userId", userId).table("guests")
    .then( (events) => {

      if (!events.length) {
          cb(null, [])
          return
      }

      Promise.all(events.map(function(evt) {
        return knex.select().where("id", evt.eventId).table("events")
      }))
        .then( (events) => {

          if (events[0].length) {
            cb(null, events.map(evt => evt[0]))
            return
          }

          cb(null, [])
        })
    })
    .catch( (err) => cb(err) )
}

module.exports = {
  createEvent: createEvent,
  getEventById: getEventById,
  getHostedEvents: getHostedEvents,
  getGuestedEvents: getGuestedEvents
}
