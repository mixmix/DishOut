var knexConfig = require('./knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
var bcrypt = require('bcrypt')
const saltRounds = 10;

function createUser(name,email,password,cb){
  knex("users").insert({name:name,
    email:email,
    hashedPassword:password
  })
  .then(function(data){
    console.log("Successfully inserted data! ", data)
    cb(null,data)
  })
  .catch(function(err){
    cb(err)
  })
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

function getEventsWhereUserIsHost(name,cb){
  knex.select().where("name",name).table("events")
  .then(function(data){
    cb(null,data)
  })
  .catch(function(err){
    cb(err)
  })
}

function getEventsWhereUserIsGuest(userId){

}

function login(email,password,cb){
  knex.select().where("email",email).table("users")
  .then(function(data){
    console.log("Worked, here is the data", data)
    cb(null,data)
  })
  .catch(function(err){
    cb(err)
  })
  return "hello"
}




module.exports = {createUser:createUser,getUserByEmail:getUserByEmail,login:login}

login("ben@scully.com","", function(err,data){
  console.log(data)
})

createUser("Jack","Happy@mormon.org","123",function(err,data){
  console.log(data)
})

getEventsWhereUserIsHost("Bill Clinton",function(err,data){
  console.log(data)
})



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
