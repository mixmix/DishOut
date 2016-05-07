var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

function getEventsAttending(id,cb){
  knex("guests").select().where("userId",id)
  .then(function(data){
    cb(null,data)
  })
  .catch(function(err){
    cb(err)
  })
}


function getTenativeEvents(id, cb){
  knex.select().where("userId",id).table("guests")
    .then(function(data){
      Promise.all(data.map(function(d) {
        return knex.select().where("id", d.eventId).table("events")
      }))
        .then(function (data) {
          cb(null, data.map(d => d[0]))
        })
    })
    .catch(function(err){
      cb(err)
    })
}

module.exports = {
  getEventsAttending:getEventsAttending,
  getTenativeEvents:getTenativeEvents
}
