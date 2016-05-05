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
//Details about the event
var event = [
  "<div>",
  "<h1>James Potluck Dinner</h1>",
  "<h4>Date: 12 May</h4>",
  "<h4>Time: 8pm</h4>",
  "<h4>description: All you can eat buffet. There will be food, booze and girls. The theme is the 80s</h4>",
  "</div>"
]

module.exports = event;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
$(function(){

  var addDishFields = require("./addDishFields")
  var guestDishList = require("./guestDishList")
  var event = require("./event")

  $("#addDishFields").html(addDishFields)
  $("#dishList").html(guestDishList)
  $("#event").html(event)
  require("./addDish")

});

},{"./addDish":1,"./addDishFields":2,"./event":3,"./guestDishList":4}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hZGREaXNoLmpzIiwianMvYWRkRGlzaEZpZWxkcy5qcyIsImpzL2V2ZW50LmpzIiwianMvZ3Vlc3REaXNoTGlzdC5qcyIsImpzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoXCIjYWRkRGlzaFwiKS5jbGljayhleGVjdXRlKVxuXG5mdW5jdGlvbiBleGVjdXRlKCl7XG4gIHZhciBndWVzdE5hbWUgPSAkKFwiI2d1ZXN0XCIpLnZhbCgpXG4gIHZhciBkaXNoVHlwZSA9ICQoXCIjZGlzaFR5cGVcIikudmFsKClcbiAgdmFyIGRpc2ggPSAkKFwiI2Rpc2hcIikudmFsKClcblxuXG4gICQoXCIjZ3Vlc3REaXNoTGlzdFwiKS5hcHBlbmQoXG4gICAgWyc8ZGl2IGNsYXNzPVwiZW50cnlcIj4nLFxuICAgICAgJzxkaXYgY2xhc3M9XCJndWVzdFwiPicgKyBndWVzdE5hbWUgKyAnPC9kaXY+JyxcbiAgICAgICc8ZGl2IGNsYXNzPVwiZGlzaFwiPicrIGRpc2hUeXBlICsgJzwvZGl2PicsXG4gICAgICAnPGRpdiBjbGFzcz1cImRpc2huYW1lXCI+JyArIGRpc2ggKyAnPC9kaXY+JyxcbiAgICAnPC9kaXY+J10uam9pbihcIlwiKVxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge2V4ZWN1dGU6IGV4ZWN1dGV9XG4iLCJ2YXIgYWRkRGlzaEZpZWxkcyA9IFtcbic8ZGl2PicsXG5cdCc8aW5wdXQgaWQ9XCJndWVzdFwiIHR5cGU9XCJ0ZXh0XCI+Jyxcblx0JzxzZWxlY3QgaWQ9XCJkaXNoVHlwZVwiIG5hbWU9XCJkaXNoVHlwZVwiPicsXG5cdFx0JzxvcHRpb24gdmFsdWU9XCJFbnRyZWVcIj5FbnRyZWU8L29wdGlvbj4nLFxuXHRcdCc8b3B0aW9uIHZhbHVlPVwiTWFpblwiPk1haW48L29wdGlvbj4nLFxuXHRcdCc8b3B0aW9uIHZhbHVlPVwiRGVzZXJ0XCI+RGVzZXJ0PC9vcHRpb24+Jyxcblx0Jzwvc2VsZWN0PicsXG5cdCc8aW5wdXQgaWQ9XCJkaXNoXCIgdHlwZT1cInRleHRcIj4nLFxuXHQnPGJ1dHRvbiBpZD1cImFkZERpc2hcIj5BZGQgeW91ciBkaXNoISA8L2J1dHRvbj4nLFxuJzwvZGl2PiddLmpvaW4oXCJcIilcblxubW9kdWxlLmV4cG9ydHMgPSBhZGREaXNoRmllbGRzXG4iLCIvL0RldGFpbHMgYWJvdXQgdGhlIGV2ZW50XG52YXIgZXZlbnQgPSBbXG4gIFwiPGRpdj5cIixcbiAgXCI8aDE+SmFtZXMgUG90bHVjayBEaW5uZXI8L2gxPlwiLFxuICBcIjxoND5EYXRlOiAxMiBNYXk8L2g0PlwiLFxuICBcIjxoND5UaW1lOiA4cG08L2g0PlwiLFxuICBcIjxoND5kZXNjcmlwdGlvbjogQWxsIHlvdSBjYW4gZWF0IGJ1ZmZldC4gVGhlcmUgd2lsbCBiZSBmb29kLCBib296ZSBhbmQgZ2lybHMuIFRoZSB0aGVtZSBpcyB0aGUgODBzPC9oND5cIixcbiAgXCI8L2Rpdj5cIlxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50O1xuIiwidmFyIGRpc2hMaXN0ID0gW1xuJzxkaXYgaWQ9XCJndWVzdERpc2hMaXN0XCI+Jyxcblx0JzxkaXYgY2xhc3M9XCJoZWFkZXJcIj4nLFxuXHRcdCc8ZGl2IGNsYXNzPVwiZ3Vlc3RcIj5HdWVzdDwvZGl2PicsXG5cdFx0JzxkaXYgY2xhc3M9XCJkaXNoXCI+RGlzaDwvZGl2PicsXG5cdFx0JzxkaXYgY2xhc3M9XCJkaXNobmFtZVwiPkRpc2ggTmFtZTwvZGl2PicsXG5cdCc8L2Rpdj4nLFxuXHQnPGRpdiBjbGFzcz1cImVudHJ5XCI+Jyxcblx0XHQnPGRpdiBjbGFzcz1cImd1ZXN0XCI+QnJpYW48L2Rpdj4nLFxuXHRcdCc8ZGl2IGNsYXNzPVwiZGlzaFwiPkVudHJlZTwvZGl2PicsXG5cdFx0JzxkaXYgY2xhc3M9XCJkaXNobmFtZVwiPkNoZWVzZSAmIENyYWNrZXJzPC9kaXY+Jyxcblx0JzwvZGl2PicsXG5cdCc8ZGl2IGNsYXNzPVwiZW50cnlcIj4nLFxuXHRcdCc8ZGl2IGNsYXNzPVwiZ3Vlc3RcIj5MdWN5PC9kaXY+Jyxcblx0XHQnPGRpdiBjbGFzcz1cImRpc2hcIj5NYWluPC9kaXY+Jyxcblx0XHQnPGRpdiBjbGFzcz1cImRpc2huYW1lXCI+U3BhZ2JvbGxlPC9kaXY+Jyxcblx0JzwvZGl2PicsXG5cdCc8ZGl2IGNsYXNzPVwiZW50cnlcIj4nLFxuXHRcdCc8ZGl2IGNsYXNzPVwiZ3Vlc3RcIj5QZXRlcjwvZGl2PicsXG5cdFx0JzxkaXYgY2xhc3M9XCJkaXNoXCI+RGVzZXJ0PC9kaXY+Jyxcblx0XHQnPGRpdiBjbGFzcz1cImRpc2huYW1lXCI+U29yYmV0PC9kaXY+Jyxcblx0JzwvZGl2PicsXG4nPC9kaXY+J10uam9pbihcIlwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpc2hMaXN0XG4iLCIkKGZ1bmN0aW9uKCl7XG5cbiAgdmFyIGFkZERpc2hGaWVsZHMgPSByZXF1aXJlKFwiLi9hZGREaXNoRmllbGRzXCIpXG4gIHZhciBndWVzdERpc2hMaXN0ID0gcmVxdWlyZShcIi4vZ3Vlc3REaXNoTGlzdFwiKVxuICB2YXIgZXZlbnQgPSByZXF1aXJlKFwiLi9ldmVudFwiKVxuXG4gICQoXCIjYWRkRGlzaEZpZWxkc1wiKS5odG1sKGFkZERpc2hGaWVsZHMpXG4gICQoXCIjZGlzaExpc3RcIikuaHRtbChndWVzdERpc2hMaXN0KVxuICAkKFwiI2V2ZW50XCIpLmh0bWwoZXZlbnQpXG4gIHJlcXVpcmUoXCIuL2FkZERpc2hcIilcblxufSk7XG4iXX0=
