var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

function getDishByDishId (dishId,cb){
  knex.select().where("id", dishId).table("dishes")
    .then( (data) => cb(null, data) )
    .catch( (err) => cb(err) )
}

function getDishesByEventId (eventId, cb) {
  knex.select().where('eventId', eventId).table('dishes')
    .then( (data) => cb(null, data) )
    .catch( (err) => cb(err) )
}

function dishAddedByHost (eventId, course, cb) {
  knex('dishes').insert({
      'eventId': eventId,
      'course': course
    })
    .then( (data) => cb(null, data))
    .catch( (err) => cb(err) )
}

function addGuestToDish (dishObj, cb) {
  knex('dishes').where({
      'id': dishObj.dishId,
      'eventId': dishObj.eventId
    })
    .update({
      'userId': dishObj.guestId,
      'name': dishObj.name
    })
    .then( (data) => cb(null, data))
    .catch( (err) => cb(err) )
}

module.exports = {
  getDishByDishId: getDishByDishId,
  getDishesByEventId: getDishesByEventId,
  dishAddedByHost: dishAddedByHost,
  addGuestToDish: addGuestToDish
}
