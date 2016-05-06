<<<<<<< HEAD
$(function(){
  var addDishFields = require("./addDishFields")
  var guestDishList = require("./guestDishList")
  var event = require("./event")
  var selectDishes = require("./selectDishes")
  var createEventView = require("./createEventView")

  $("#selectDishes").html(selectDishes)
  $("#addDishFields").html(addDishFields)
  $("#dishList").html(guestDishList)
  $("#event").html(event)


  require("./addDish")
  $("#createEvent").html(createEventView)
});
=======
$(init)

function init () {
  
}
>>>>>>> 49c7d5fabdead64ec4e1d77311c13f2255ed08e6
