var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])


function getDishByDishId (dishId,cb){
  knex.select().where("id", dishId).table("dishes")
    .then( (data) => cb(null, data) )
    .catch( (err) => cb(err) )
}

function getDishesByEventId (eventId, cb) {
  knex.select().where('eventId', eventId).table('dishes')
    .then( (data) => cb(null, data) )
    .catch( (err) => cb(err) )
}

function dishAddedByHost (dishObj, cb) {
  var num = parseInt(dishObj.numberOf) || 1
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push({
              'eventId': dishObj.eventId,
              'course': dishObj.course
            })
  }
  knex('dishes').insert(arr)
    .then( (data) => cb(null, data))
    .catch( (err) => cb(err) )
}

function addGuestToDish (dishObj, cb) {
  knex('dishes').where('id', dishObj.dishId)
    .update({
      'userId': dishObj.userId
    })
    .then( (data) => cb(null, data))
    .catch( (err) => cb(err) )
}

function addNameToDish (dishObj, cb) {
  console.log("db method- dishObj: ", dishObj)
  knex('dishes').where('id', dishObj.dishId)
    .update({
      'name': dishObj.name
    })
    .then( (data) => cb(null, data))
    .catch( (err) => cb(err) )
}

function addUserNameToEachDish (dishes, cb) {
  Promise.all(dishes.map( (dish) => {
    return knex.select('id', 'name').where("id", dish.userId).table("users")
  }))
    .then( (usersInArray) => {
      var users = usersInArray.map(d => {
          if(d[0]) { return d[0] }
          else     { return {} }
        })

      if (users.length) {
        var updated = dishes.map( (dish, index) => {
          if (users[index].name) {
            dish.userName = users[index].name
          }
          return dish
        })
        cb(null, updated)
        return
      }

      cb(null, [])
    })
    .catch( (err) => cb(err) )
}



module.exports = {
  getDishByDishId: getDishByDishId,
  getDishesByEventId: getDishesByEventId,
  dishAddedByHost: dishAddedByHost,
  addGuestToDish: addGuestToDish,
  addUserNameToEachDish: addUserNameToEachDish,
  addNameToDish: addNameToDish
}
