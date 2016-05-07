var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

function getEventsAttending (userId, cb) {
  knex("guests").select().where("userId", userId)
    .then( (data) => cb(null, data) )
    .catch( (err) => cb(err) )
}

module.exports = {
  getEventsAttending: getEventsAttending
}
