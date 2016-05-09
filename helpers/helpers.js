var bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {

  hashUserObj: (preHash, cb) => {
    bcrypt.hash(preHash.password, saltRounds,
      (err, hash) => {
        if (err) {
          cb(err)
          return
        }
        var postHash = {
          "name": preHash.name,
          "email": preHash.email,
          "password": hash
        }
        cb(null, postHash)
    }
  },

  unhashUserObj : (userObj) => {
    bcrypt.compare(userObj.password , userObj.hashedPassword,
      (err, response) => {
        if (err) {
          cb(err)
          return
        }
        cb(null, response)
    })
  }

}
