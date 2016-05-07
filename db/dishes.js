var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

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


module.exports= {
  getDishById:getDishById,
  getDishesByEventID: getDishesByEventID,
  insertDishHost: insertDishHost
}
