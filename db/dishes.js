var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

module.exports = {

  getDishByDishId: (dishId, cb) => {
    knex.select().where("id", dishId).table("dishes")
      .then( (data) => cb(null, data) )
      .catch( (err) => cb(err) )
  },

  getDishesByEventId: (eventId, cb) => {
    knex.select().where('eventId', eventId).table('dishes')
      .then( (data) => cb(null, data) )
      .catch( (err) => cb(err) )
  },

  createManyDishes: (manyDishObjs, cb) => {
    knex('dishes').insert(manyDishObjs)
      .then( (data) => cb(null, data))
      .catch( (err) => cb(err) )
  },

  updateGuest: (dishObj, cb) => {
    knex('dishes').where('id', dishObj.dishId)
    .update({'userId': dishObj.userId})
      .then( (data) => cb(null, data))
      .catch( (err) => cb(err) )
  },

  updateName: (dishObj, cb) => {
    knex('dishes').where('id', dishObj.dishId)
    .update({'name': dishObj.name})
      .then( (data) => cb(null, data))
      .catch( (err) => cb(err) )
  },

  updateUserNameOfMany: (dishes, cb) => {
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

}
