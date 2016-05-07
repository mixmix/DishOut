var knexConfig = require('../knexfile')
var knex = require('knex')

module.exports = function (environment) {
  if (!environment) {
    return knex(knexConfig[environment])
  }
  return knex(knexConfig[process.env.NODE_ENV || "development"])
}
