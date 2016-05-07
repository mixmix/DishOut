var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

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

module.exports = {
  hostEvent: hostEvent
}
