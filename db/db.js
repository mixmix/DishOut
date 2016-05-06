var knexConfig = require('./knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
var bcrypt = require('bcrypt')
const saltRounds = 10;

  function createUser(name,email,password){
    var hashPassword = "";

    bcrypt.genSalt(saltRounds,function(err,salt){
      bcrypt.hash(password,salt,function(err,hash){
        hashPassword = hash
      })
    })
    knex.insert("userTable").values({name:name,email:email,hashedPassword:hash})
    .then(function(data){
      console.log("Successfully inserted data! ", data)
    })
    .catch(function(err){
      if (err) throw err
    })
  }

  function getUserByEmail(email){
    knex.select().where({"email",email})
    .then(function(data){
      console.log("Here is the users data: ", data)
    })
    .catch(function(err){
      if (err) throw err
    })
  }

  function login(email,password){
    knex.select().where("email",email)
    .then(function(data){
      if(bcrypt.compareSync(password,data.body.hashedPassword)){
        console.log("Password is correct")
      }
      else{
        console.log("Password is wrong")
      }
    })
    .catch(err){
      if (err) throw err
    }
  }
