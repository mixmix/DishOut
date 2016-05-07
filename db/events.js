var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

function createEvent(event,cb){
  knex('events').insert({
    'name': event.name,
    'date': event.date,
    'time': event.time,
    'description': event.description,
    'location': event.location
  })
  .then(function(data){
    cb(null,data)
  })
  .catch(function(err){
    cb(err)
  })
}

function getHostedEvents(id, cb){
  knex.select().where("userId", id).table("hosts")
    .then(function(data){
      Promise.all(data.map(function(d) {
        return knex.select().where("id", d.eventId).table("events")
      }))
        .then(function (events) {
          if (events[0].length) {
            console.log("inside if?: ", events)
            cb(null, events.map(event => event[0]))
            return
          }
          console.log("outside if?: ", events)
          cb(null, [])
        })
    })
    .catch(function(err){
      cb(err)
    })
}

function getEventByID(id, cb){
  knex.select().where("id",id).table("events")
  .then(function(data){
    cb(null,data[0])
  })
  .catch(function(err){
    cb(err)
  })
}


module.exports = {
  createEvent:createEvent,
  getHostedEvents:getHostedEvents,
  getEventByID:getEventByID
}
