var redtape = require('redtape')
var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig["development"])
var user = require("../db/user")
var guest = require("../db/guest")
var events = require("../db/events")
var hosts = require("../db/hosts")
var dish = require("../db/dish")


var createUserTestObj = {
  name:"Jill",
  email:"Jill@hill.com",
  password:"123"
}

var createUserUni = {
  name:"Ben",
  email:"ben@scully.com",
  password:"44"
}

var createEventObj = {
  name: "Jack Jones",
  date: "12/12",
  time: "23:00",
  description: "come here and find out!",
  location: "Wellington, NZ"
}

var test = redtape({
  beforeEach: function (callback) {
    return knex.migrate.latest()
      .then(function () {
        return knex.seed.run()
      })
      .then(function () {
        callback()
      })
  },

  afterEach: function (callback) {
    knex.migrate.rollback()
      .then(function () {
        callback()
      })
  }
})

test('setup', function (t) {
  knex.migrate.rollback()
    .then(function () {
      t.end()
    })
})

test("tests create user db function",function(t){
  user.createUser(createUserTestObj,function(err,data){
    if (err) {
      console.log(err)
    }
    t.ok(data,"Something came back!")
    t.equal(typeof data, 'number', "it returns an id number")
    t.end()
  })
})

test("tests create user db function",function(t){
  user.createUser(createUserUni,function(err,data){
    if (err) {
      console.log(err)
    }
    t.true(err)
    t.end()
  })
})

test("tests guest functions",function(t){
  guest.getEventsAttending("1",function(err,data){
    if(err){
      console.log(err)
    }
    t.ok(data,"Some data was returned")
    t.equal(typeof data, 'object', "returns an object with guest details")
    t.end()
  })
})

test("tests events functions",function(t){
  events.createEvent(createEventObj,function(err,data){
    if(err){console.log(err)}
    t.ok(data,"Something came back!")
    t.equal(typeof data[0], 'number', "it returns an id number")
    t.end()
  })
})

test("tests hosts functions",function(t){
  hosts.hostEvent("1","2",function(err,data){
    if(err){console.log(err)}
    t.ok(data,"Something came back!")
    t.equal(typeof data[0], 'number', "it returns an id number")
    t.end()
  })
})

test("tests dish functions",function(t){
  dish.getDishById("1",function(err,data){
    if(err){
      console.log(err)
    }
    t.ok(data,"Some data was returned")
    t.equal(typeof data, 'object', "returns an object with dish details")
    t.end()
  })
})

