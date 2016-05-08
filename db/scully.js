// var knexConfig = require('../knexfile')
// var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
// var bcrypt = require('bcrypt')
// const saltRounds = 10;
//
// function createUser(userObj, cb){
//   bcrypt.hash(userObj.password, saltRounds,function(err, hash){
//     var obj = {
//       "name": userObj.name,
//       "email": userObj.email,
//       "hashedPassword": hash
//     }
//     knex("users").insert(obj)
//     .then( (data) => cb(null, data[0]) )
//     .catch( (err) => cb(err) )
//   })
// }
//
// function login(email, password, cb) {
//   knex.select().where("email", email).table("users")
//     .then( (data) => {
//       bcrypt.compare(password , data[0].hashedPassword,
//         (err, response) => {
//           if (response){
//             console.log("successful login", response)
//             cb(null, data[0])
//             return
//           }
//           console.log("failed login")
//           cb(err)
//       })
//     })
//     .catch( (err) => cb(err) )
// }
//
// function getEventsAttending(id,cb){
//   knex("guests").select().where("userId",id)
//     .then( (data) => cb(null, data) )
//     .catch( (err) => cb(err) )
// }
//
// function createEvent(event,cb){
//   knex('events').insert({
//     'name': event.name,
//     'date': event.date,
//     'time': event.time,
//     'description': event.description,
//     'location': event.location
//   })
//     .then( (data) => cb(null, data[0]) )
//     .catch( (err) => cb(err) )
// }
//
// function addHostOfEvent (hostEventObj, cb) {
//   knex('hosts').insert({
//     'eventId': hostEventObj.eventId,
//     'userId': hostEventObj.userId
//   })
//     .then( (data) => cb(null, data[0]) )
//     .catch( (err) => cb(err) )
// }
//
// function getEventByID(id, cb){
//   knex.select().where("id",id).table("events")
//     .then( (data) => cb(null, data[0]) )
//     .catch( (err) => cb(err) )
// }
//
// function getDishByDishId(id,cb){
//   knex.select().where("id",id).table("dishes")
//     .then( (data) => cb(null, data) )
//     .catch( (err) => cb(err) )
// }
//
// function getDishesByEventID (eventId, cb) {
//   knex.select().where('eventId', eventId).table('dishes')
//     .then( (data) => cb(null, data) )
//     .catch( (err) => cb(err) )
// }
//
// function getUserByEmail(email){
//   knex.select().where("email",email).table("users")
//     .then( (data) => cb(null, data[0]) )
//     .catch( (err) => cb(err) )
// }
//
// function getUserById (userId, cb) {
//   knex.select().where("id", userId).table("users")
//     .then( (data) => cb(null, data[0]) )
//     .catch( (err) => cb(err) )
// }
//
// function getHostedEvents(userId, cb){
//   knex.select().where("userId", userId).table("hosts")
//     .then( (events) => {
//
//       if (!events.length) {
//           cb(null, [])
//           return
//       }
//
//       Promise.all(events.map(function(evt) {
//         return knex.select().where("id", evt.eventId).table("events")
//       }))
//         .then( (events) => {
//
//           if (events[0].length) {
//             cb(null, events.map(evt => evt[0]))
//             return
//           }
//
//           cb(null, [])
//         })
//     })
//     .catch( (err) => cb(err) )
// }
//
// function getGuestedEvents (userId, cb) {
//   knex.select().where("userId", userId).table("guests")
//     .then( (events) => {
//
//       if (!events.length) {
//           cb(null, [])
//           return
//       }
//
//       Promise.all(events.map(function(evt) {
//         return knex.select().where("id", evt.eventId).table("events")
//       }))
//         .then( (events) => {
//
//           if (events[0].length) {
//             cb(null, events.map(evt => evt[0]))
//             return
//           }
//
//           cb(null, [])
//         })
//     })
//     .catch( (err) => cb(err) )
// }
//
// function insertDishHost (eventId, course, cb) {
//   knex('dishes').insert({
//       'eventId': eventId,
//       'course': course
//     })
//     .then( (data) => cb(null, data))
//     .catch( (err) => cb(err) )
// }
//
// module.exports = {
//   createUser: createUser,
//   getUserByEmail: getUserByEmail,
//   login: login,
//   getHostedEvents: getHostedEvents,
//   getGuestedEvents: getGuestedEvents,
//   createEvent: createEvent,
//   getEventByID: getEventByID,
//   getDishesByEventID: getDishesByEventID,
//   insertDishHost: insertDishHost,
//   addHostOfEvent: addHostOfEvent,
//   getUserById: getUserById
// }
