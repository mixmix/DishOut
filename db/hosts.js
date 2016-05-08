var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

function addHostOfEvent (hostEventObj, cb) {
  knex('hosts').insert({
    'eventId': hostEventObj.eventId,
    'userId': hostEventObj.userId
  })
    .then( (data) => cb(null, data[0]) )
    .catch( (err) => cb(err) )
}

module.exports = {
  addHostOfEvent: addHostOfEvent
}
