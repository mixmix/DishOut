$(function(){
  var addDishFields = require("./addDishFields")
  var guestDishList = require("./guestDishList")
  var event = require("./event")
  var createEventView = require("./createEventView")

  $("#addDishFields").html(addDishFields)
  $("#dishList").html(guestDishList)
  $("#event").html(event)
  require("./addDish")
  $("#createEvent").html(createEventView)
});
