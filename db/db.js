var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
var bcrypt = require('bcrypt')
const saltRounds = 10;

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
