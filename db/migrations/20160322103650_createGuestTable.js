
exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('guestTable', function(table) {
    // table.increments('eventId')
    table.string('eventId')
    table.string('userId')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('guestTable').then(function () {
    console.log('guestTable was dropped')
  })
};
