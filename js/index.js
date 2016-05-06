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
