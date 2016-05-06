(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$("#addDish").click(execute)

function execute(){
  var guestName = $("#guest").val()
  var dishType = $("#dishType").val()
  var dish = $("#dish").val()


  $("#guestDishList").append(
    ['<div class="entry">',
      '<div class="guest">' + guestName + '</div>',
      '<div class="dish">'+ dishType + '</div>',
      '<div class="dishname">' + dish + '</div>',
    '</div>'].join("")
  )
}

module.exports = {execute: execute}

},{}],2:[function(require,module,exports){
var addDishFields = [
'<div>',
	'<input id="guest" type="text">',
	'<select id="dishType" name="dishType">',
		'<option value="Entree">Entree</option>',
		'<option value="Main">Main</option>',
		'<option value="Desert">Desert</option>',
	'</select>',
	'<input id="dish" type="text">',
	'<button id="addDish">Add your dish! </button>',
'</div>'].join("")

module.exports = addDishFields

},{}],3:[function(require,module,exports){
var createEventView = [
	'<form action="/event" method="post">',
	  'Event Name:<br/>',
	  '<input type="text" name="eventName" placeholder="type event name here">',
	  '<br/>Date:<br/>',
	  '<input type="date" name="date">',
	  '<br/>Time:<br/>',
	  '<input type="text" name="time" placeholder="type event name here">',
	  '<br/>Description:<br/>',
	  '<input type="text" name="description" placeholder="type brief event description here">',
		'<br/>',
		'<input type="submit" value="Submit">',
	'</form>'
].join("")

module.exports = createEventView

},{}],4:[function(require,module,exports){
//Details about the event
var event = [
  "<div>",
  "<h1>James's Potluck Dinner</h1>",
  "<h4>Date: 12 May</h4>",
  "<h4>Time: 8pm</h4>",
  "<h4>description: All you can eat buffet. There will be food, booze and girls. The theme is the 80s</h4>",
  "</div>"
]

module.exports = event;

},{}],5:[function(require,module,exports){
var dishList = [
'<div id="guestDishList">',
	'<div class="header">',
		'<div class="guest">Guest</div>',
		'<div class="dish">Dish</div>',
		'<div class="dishname">Dish Name</div>',
	'</div>',
	'<div class="entry">',
		'<div class="guest">Brian</div>',
		'<div class="dish">Entree</div>',
		'<div class="dishname">Cheese & Crackers</div>',
	'</div>',
	'<div class="entry">',
		'<div class="guest">Lucy</div>',
		'<div class="dish">Main</div>',
		'<div class="dishname">Spagbolle</div>',
	'</div>',
	'<div class="entry">',
		'<div class="guest">Peter</div>',
		'<div class="dish">Desert</div>',
		'<div class="dishname">Sorbet</div>',
	'</div>',
'</div>'].join("")

module.exports = dishList

},{}],6:[function(require,module,exports){
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

},{"./addDish":1,"./addDishFields":2,"./createEventView":3,"./event":4,"./guestDishList":5}]},{},[6]);
