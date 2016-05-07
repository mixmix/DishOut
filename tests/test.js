var redtape = require('redtape')
var db = require("../db/db")
var knexConfig = require('../knexfile')
var knex = require('knex')(knexConfig["development"])
var user = require("../db/user")

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
