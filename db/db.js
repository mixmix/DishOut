var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
var bcrypt = require('bcrypt')
const saltRounds = 10;

function createUser(name, email, password,cb){
  console.log("before", name, email, password)
  bcrypt.hash(password, saltRounds,function(err, hash){
    var obj = {
      "name": name,
      "email": email,
      "hashedPassword": hash
    }
    console.log("after", obj)
    knex("users").insert(obj)
      .then(function(data){
        console.log("asdf", data)
        cb(null,data[0])
      })
      .catch(function(err){
        cb(err)
      })
  })
}

function login(email, password, cb){
  knex.select().where("email", email).table("users")
    .then(function(data){
      console.log("here is the user's hashed password: ",data[0].hashedPassword)
      bcrypt.compare(password , data[0].hashedPassword, function(err,response){
        if(response){
          console.log("successful login", response)
          cb(null, data[0])
        }
        else{
          console.log("failed login")
          cb(err)
        }
      })
    })
    .catch(function(err){
      cb(err)
    })
}

function getEventsAttending(id,cb){
  knex("guests").select().where("userId",id)
  .then(function(data){
    cb(null,data)
  })
  .catch(function(err){
    cb(err)
  })
}

function createEvent(event,cb){
  knex('events').insert({
    'name': event.name,
    'date': event.date,
    'time': event.time,
    'description': event.description,
    'location': event.location
  })
  .then(function(data){
    cb(null,data)
  })
  .catch(function(err){
    cb(err)
  })
}

function hostEvent(eventId,userId,cb){
  knex('hosts').insert({
    eventId:eventId,
    userId:userId
  })
  .then(function(data){
    cb(null,data)
  })
  .catch(function(err){
    cb(err)
  })
}

function getEventByID(id, cb){
  knex.select().where("id",id).table("events")
  .then(function(data){
    cb(null,data[0])
  })
  .catch(function(err){
    cb(err)
  })
}

function getDishByDishId(id,cb){
  knex.select().where("id",id).table("dishes")
    .then(function(data){
      cb(null,data)
    })
    .catch(function(err){
      cb(err)
    })
}

function getDishesByEventID (eventId, cb) {
  knex.select().where('eventId', eventId).table('dishes')
    .then( (data) => cb(null, data) )
    .catch( (err) => cb(err) )
}

function getUserByEmail(email){
  knex.select().where("email",email).table("users")
    .then(function(data){
      console.log("Here is the users data: ", data)
    })
    .catch(function(err){
      if (err) throw err
    })
}

function getHostedEvents(id, cb){
  console.log("getHostedEvents", id)
  knex.select().where("userId", id).table("hosts")
    .then(function(data){
      console.log("fdas", data)
      Promise.all(data.map(function(d) {
        return knex.select().where("id", d.eventId).table("events")
      }))
        .then(function (events) {
          if (events[0].length) {
            console.log("inside if?: ", events)
            cb(null, events.map(event => event[0]))
            return
          }
          console.log("outside if?: ", events)
          cb(null, [])
        })
        .catch(function(err){
          cb(err)
        })
    })
    .catch(function(err){
      cb(err)
    })
}

function getTenativeEvents(id, cb){
  knex.select().where("userId",id).table("guests")
    .then(function(data){
      Promise.all(data.map(function(d) {
        return knex.select().where("id", d.eventId).table("events")
      }))
        .then(function (data) {
          cb(null, data.map(d => d[0]))
        })
    })
    .catch(function(err){
      cb(err)
    })
}

function insertDishHost (eventId, course, cb) {
  knex('dishes').insert({
      'eventId': eventId,
      'course': course
    })
    .then( (data) => cb(null, data))
    .catch( (err) => cb(err) )
}

module.exports = {
  createUser: createUser,
  getUserByEmail: getUserByEmail,
  login: login,
  getHostedEvents: getHostedEvents,
  getTenativeEvents: getTenativeEvents,
  createEvent: createEvent,
  getEventByID: getEventByID,
  getDishesByEventID: getDishesByEventID,
  insertDishHost: insertDishHost,
  hostEvent: hostEvent
}

// login("ben@scully.com","", function(err,data){
//   console.log(data)
// })
//
// // createUser("Jack","Happy@mormon.org","123",function(err,data){
// //   console.log(data)
// // })
//
// getHostedEvents("1",function(err,data){
//   console.log(data)
// })
//
// getTenativeEvents("1",function(err,data){
//   console.log(data)
// })
//
// getEvent("2",function(err,data){
//   console.log(data)
// })
//
// getDishById("3",function(err,data){
//   console.log(data)
// })
//
//
// var event = {
//   name:"Jim",
//   date:"15/10",
//   time:"12:00",
//   description:"day time party",
//   location:"12 jack view rd"
// }
//
// createEvent(event, function(err,data){
//   console.log(data)
// })
//
// getEventsAttending("2",function(err,data){
//   console.log("Here are the events you are attending ", data)
// })



// function login(email,password){
//   knex.select().where("email",email)
//   .then(function(data){
//     if(bcrypt.compareSync(password,data.body.hashedPassword)){
//       console.log("Password is correct")
//     }
//     else{
//       console.log("Password is wrong")
//     }
//   })
//   .catch(err){
//     if (err) throw err
//   }
// }

// function createUser(name,email,password){
//
//   bcrypt.genSalt(saltRounds,function(err,salt){
//     bcrypt.hash(password,salt,function(err,hash){
//       knex.insert("userTable").values({name:name,email:email,hashedPassword:hash})
//       .then(function(data){
//         console.log("Successfully inserted data! ", data)
//       })
//       .catch(function(err){
//         if (err) throw err
//       })
//     })
//   })
// }
