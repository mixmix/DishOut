var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
var bcrypt = require('bcrypt')
const saltRounds = 10;

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

function hostEvent(eventId,userId,cb){
  knex('hosts').insert({
    eventId:eventId,
    userId:userId
  })
  .then(function(data){
    cb(null,data)
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

function getDishById(id,cb){
  knex.select().where("id",id).table("dishes")
    .then(function(data){
      cb(null,data)
    })
    .catch(function(err){
      cb(err)
    })
}

function getDishesByEventID (eventId, cb) {
  knex.select().where('eventId', eventId).table('dishes')
    .then( (data) => cb(null, data) )
    .catch( (err) => cb(err) )
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

function insertDishHost (eventId, course, cb) {
  knex('dishes').insert({
      'eventId': eventId,
      'course': course
    })
    .then( (data) => cb(null, data))
    .catch( (err) => cb(err) )
}

module.exports = {
  // createUser: createUser,
  // getUserByEmail: getUserByEmail,
  // login: login,
  getHostedEvents: getHostedEvents,
  getTenativeEvents: getTenativeEvents,
  createEvent: createEvent,
  getEventByID: getEventByID,
  getDishesByEventID: getDishesByEventID,
  insertDishHost: insertDishHost,
  hostEvent: hostEvent
}
