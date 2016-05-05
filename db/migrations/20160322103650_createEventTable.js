
exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('eventsTable', function(table) {
    table.increments('id')
    table.string('name')
    table.string('date')
    table.string('time')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('eventsTable').then(function () {
    console.log('eventsTable was dropped')
  })
};
