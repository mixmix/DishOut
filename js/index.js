$(function(){

  var addDishFields = require("./addDishFields")
  var guestDishList = require("./guestDishList")

  $("#addDishFields").html(addDishFields)
  $("#dishList").html(guestDishList)
  require("./addDish")
  
});
