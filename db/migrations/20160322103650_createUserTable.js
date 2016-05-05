exports.up = function(knex, Promise) {
  console.log('create table')

  return knex.schema.createTableIfNotExists('userTable', function(table) {
    table.increments('id')
    table.string('name')
    table.string('email').unique()
    table.string('hashedPassword')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userTable').then(function () {
    console.log('userTable was dropped')
  })
};
