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
        var postHash = Object.assign({}, preHash)
        postHash.password = hash
        cb(null, postHash)
    })
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
//
// var num = parseInt(dishObj.numberOf) || 1
// var arr = []
// for (var i = 0; i < num; i++) {
//   arr.push({
//             'eventId': dishObj.eventId,
//             'course': dishObj.course
//           })
// }
