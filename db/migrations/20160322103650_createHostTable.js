
exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('hostTable', function(table) {
    // table.increments('eventId')
    table.string('eventId')
    table.string('userId')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('hostTable').then(function () {
    console.log('hostTable was dropped')
  })
};
