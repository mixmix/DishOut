exports.up = function(knex, Promise) {
  console.log('create table')

  return Promise.all( [knex.schema.createTableIfNotExists('userTable', function(table) {
    table.increments('id')
    table.string('name')
    table.string('email').unique()
    table.string('hashedPassword')
  }),
  knex.schema.createTableIfNotExists('hostTable', function(table) {
    // table.increments('eventId')
    table.string('eventId')
    table.string('userId')
  }),
 knex.schema.createTableIfNotExists('guestTable', function(table) {
    // table.increments('eventId')
    table.string('eventId')
    table.string('userId')
  }),
   knex.schema.createTableIfNotExists('eventsTable', function(table) {
    table.increments('id')
    table.string('name')
    table.string('date')
    table.string('time')
    table.string('description')
    table.string('location')
  })])
};

exports.down = function(knex, Promise) {
  return Promise.all ([knex.schema.dropTableIfExists('userTable').then(function () {
    console.log('userTable was dropped')
  }),
  knex.schema.dropTableIfExists('hostTable').then(function () {
    console.log('hostTable was dropped')
  }),
  knex.schema.dropTableIfExists('guestTable').then(function () {
    console.log('guestTable was dropped')
  }),
  knex.schema.dropTableIfExists('eventsTable').then(function () {
    console.log('eventsTable was dropped')
  })
  ])

};
