(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
  var selectDishes = require("./selectDishes")
  var createEventView = require("./createEventView")

  $("#selectDishes").html(selectDishes)
  $("#addDishFields").html(addDishFields)
  $("#dishList").html(guestDishList)
  $("#event").html(event)

  require("./addDish")
  $("#createEvent").html(createEventView)
});

},{"./addDish":1,"./addDishFields":2,"./createEventView":3,"./event":4,"./guestDishList":5,"./selectDishes":7}],7:[function(require,module,exports){

var selectDishes = [
  '<div>',
  '<h3>Enter the types of dishes you need for the event (e.g starters, main, snack, dessert etc.)</h3>',
  '<input id="selectDishes" type="post">',
  '</div>'
];

module.exports = selectDishes;


//
// <script>
// var allInputs = $( ":input" );
// var formChildren = $( "form > *" );
// $( "#messages" ).text( "Found " + allInputs.length + " inputs and the form has " +
//   formChildren.length + " children." );
//
// $( "form" ).submit(function( event ) {
//   event.preventDefault();
// });
// </script>
//
// </body>
// </html>

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hZGREaXNoLmpzIiwianMvYWRkRGlzaEZpZWxkcy5qcyIsImpzL2NyZWF0ZUV2ZW50Vmlldy5qcyIsImpzL2V2ZW50LmpzIiwianMvZ3Vlc3REaXNoTGlzdC5qcyIsImpzL2luZGV4LmpzIiwianMvc2VsZWN0RGlzaGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGFkZERpc2hGaWVsZHMgPSBbXG4nPGRpdj4nLFxuXHQnPGlucHV0IGlkPVwiZ3Vlc3RcIiB0eXBlPVwidGV4dFwiPicsXG5cdCc8c2VsZWN0IGlkPVwiZGlzaFR5cGVcIiBuYW1lPVwiZGlzaFR5cGVcIj4nLFxuXHRcdCc8b3B0aW9uIHZhbHVlPVwiRW50cmVlXCI+RW50cmVlPC9vcHRpb24+Jyxcblx0XHQnPG9wdGlvbiB2YWx1ZT1cIk1haW5cIj5NYWluPC9vcHRpb24+Jyxcblx0XHQnPG9wdGlvbiB2YWx1ZT1cIkRlc2VydFwiPkRlc2VydDwvb3B0aW9uPicsXG5cdCc8L3NlbGVjdD4nLFxuXHQnPGlucHV0IGlkPVwiZGlzaFwiIHR5cGU9XCJ0ZXh0XCI+Jyxcblx0JzxidXR0b24gaWQ9XCJhZGREaXNoXCI+QWRkIHlvdXIgZGlzaCEgPC9idXR0b24+Jyxcbic8L2Rpdj4nXS5qb2luKFwiXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gYWRkRGlzaEZpZWxkc1xuIiwiJChcIiNhZGREaXNoXCIpLmNsaWNrKGV4ZWN1dGUpXG5cbmZ1bmN0aW9uIGV4ZWN1dGUoKXtcbiAgdmFyIGd1ZXN0TmFtZSA9ICQoXCIjZ3Vlc3RcIikudmFsKClcbiAgdmFyIGRpc2hUeXBlID0gJChcIiNkaXNoVHlwZVwiKS52YWwoKVxuICB2YXIgZGlzaCA9ICQoXCIjZGlzaFwiKS52YWwoKVxuXG5cbiAgJChcIiNndWVzdERpc2hMaXN0XCIpLmFwcGVuZChcbiAgICBbJzxkaXYgY2xhc3M9XCJlbnRyeVwiPicsXG4gICAgICAnPGRpdiBjbGFzcz1cImd1ZXN0XCI+JyArIGd1ZXN0TmFtZSArICc8L2Rpdj4nLFxuICAgICAgJzxkaXYgY2xhc3M9XCJkaXNoXCI+JysgZGlzaFR5cGUgKyAnPC9kaXY+JyxcbiAgICAgICc8ZGl2IGNsYXNzPVwiZGlzaG5hbWVcIj4nICsgZGlzaCArICc8L2Rpdj4nLFxuICAgICc8L2Rpdj4nXS5qb2luKFwiXCIpXG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7ZXhlY3V0ZTogZXhlY3V0ZX1cbiIsInZhciBjcmVhdGVFdmVudFZpZXcgPSBbXG5cdCc8Zm9ybSBhY3Rpb249XCIvZXZlbnRcIiBtZXRob2Q9XCJwb3N0XCI+Jyxcblx0ICAnRXZlbnQgTmFtZTo8YnIvPicsXG5cdCAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJldmVudE5hbWVcIiBwbGFjZWhvbGRlcj1cInR5cGUgZXZlbnQgbmFtZSBoZXJlXCI+Jyxcblx0ICAnPGJyLz5EYXRlOjxici8+Jyxcblx0ICAnPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIj4nLFxuXHQgICc8YnIvPlRpbWU6PGJyLz4nLFxuXHQgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGltZVwiIHBsYWNlaG9sZGVyPVwidHlwZSBldmVudCBuYW1lIGhlcmVcIj4nLFxuXHQgICc8YnIvPkRlc2NyaXB0aW9uOjxici8+Jyxcblx0ICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJ0eXBlIGJyaWVmIGV2ZW50IGRlc2NyaXB0aW9uIGhlcmVcIj4nLFxuXHRcdCc8YnIvPicsXG5cdFx0JzxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj4nLFxuXHQnPC9mb3JtPidcbl0uam9pbihcIlwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUV2ZW50Vmlld1xuIiwiLy9EZXRhaWxzIGFib3V0IHRoZSBldmVudFxudmFyIGV2ZW50ID0gW1xuICBcIjxkaXY+XCIsXG4gIFwiPGgxPkphbWVzJ3MgUG90bHVjayBEaW5uZXI8L2gxPlwiLFxuICBcIjxoND5EYXRlOiAxMiBNYXk8L2g0PlwiLFxuICBcIjxoND5UaW1lOiA4cG08L2g0PlwiLFxuICBcIjxoND5kZXNjcmlwdGlvbjogQWxsIHlvdSBjYW4gZWF0IGJ1ZmZldC4gVGhlcmUgd2lsbCBiZSBmb29kLCBib296ZSBhbmQgZ2lybHMuIFRoZSB0aGVtZSBpcyB0aGUgODBzPC9oND5cIixcbiAgXCI8L2Rpdj5cIlxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50O1xuIiwidmFyIGRpc2hMaXN0ID0gW1xuJzxkaXYgaWQ9XCJndWVzdERpc2hMaXN0XCI+Jyxcblx0JzxkaXYgY2xhc3M9XCJoZWFkZXJcIj4nLFxuXHRcdCc8ZGl2IGNsYXNzPVwiZ3Vlc3RcIj5HdWVzdDwvZGl2PicsXG5cdFx0JzxkaXYgY2xhc3M9XCJkaXNoXCI+RGlzaDwvZGl2PicsXG5cdFx0JzxkaXYgY2xhc3M9XCJkaXNobmFtZVwiPkRpc2ggTmFtZTwvZGl2PicsXG5cdCc8L2Rpdj4nLFxuXHQnPGRpdiBjbGFzcz1cImVudHJ5XCI+Jyxcblx0XHQnPGRpdiBjbGFzcz1cImd1ZXN0XCI+QnJpYW48L2Rpdj4nLFxuXHRcdCc8ZGl2IGNsYXNzPVwiZGlzaFwiPkVudHJlZTwvZGl2PicsXG5cdFx0JzxkaXYgY2xhc3M9XCJkaXNobmFtZVwiPkNoZWVzZSAmIENyYWNrZXJzPC9kaXY+Jyxcblx0JzwvZGl2PicsXG5cdCc8ZGl2IGNsYXNzPVwiZW50cnlcIj4nLFxuXHRcdCc8ZGl2IGNsYXNzPVwiZ3Vlc3RcIj5MdWN5PC9kaXY+Jyxcblx0XHQnPGRpdiBjbGFzcz1cImRpc2hcIj5NYWluPC9kaXY+Jyxcblx0XHQnPGRpdiBjbGFzcz1cImRpc2huYW1lXCI+U3BhZ2JvbGxlPC9kaXY+Jyxcblx0JzwvZGl2PicsXG5cdCc8ZGl2IGNsYXNzPVwiZW50cnlcIj4nLFxuXHRcdCc8ZGl2IGNsYXNzPVwiZ3Vlc3RcIj5QZXRlcjwvZGl2PicsXG5cdFx0JzxkaXYgY2xhc3M9XCJkaXNoXCI+RGVzZXJ0PC9kaXY+Jyxcblx0XHQnPGRpdiBjbGFzcz1cImRpc2huYW1lXCI+U29yYmV0PC9kaXY+Jyxcblx0JzwvZGl2PicsXG4nPC9kaXY+J10uam9pbihcIlwiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpc2hMaXN0XG4iLCIkKGZ1bmN0aW9uKCl7XG4gIHZhciBhZGREaXNoRmllbGRzID0gcmVxdWlyZShcIi4vYWRkRGlzaEZpZWxkc1wiKVxuICB2YXIgZ3Vlc3REaXNoTGlzdCA9IHJlcXVpcmUoXCIuL2d1ZXN0RGlzaExpc3RcIilcbiAgdmFyIGV2ZW50ID0gcmVxdWlyZShcIi4vZXZlbnRcIilcbiAgdmFyIHNlbGVjdERpc2hlcyA9IHJlcXVpcmUoXCIuL3NlbGVjdERpc2hlc1wiKVxuICB2YXIgY3JlYXRlRXZlbnRWaWV3ID0gcmVxdWlyZShcIi4vY3JlYXRlRXZlbnRWaWV3XCIpXG5cbiAgJChcIiNzZWxlY3REaXNoZXNcIikuaHRtbChzZWxlY3REaXNoZXMpXG4gICQoXCIjYWRkRGlzaEZpZWxkc1wiKS5odG1sKGFkZERpc2hGaWVsZHMpXG4gICQoXCIjZGlzaExpc3RcIikuaHRtbChndWVzdERpc2hMaXN0KVxuICAkKFwiI2V2ZW50XCIpLmh0bWwoZXZlbnQpXG5cbiAgcmVxdWlyZShcIi4vYWRkRGlzaFwiKVxuICAkKFwiI2NyZWF0ZUV2ZW50XCIpLmh0bWwoY3JlYXRlRXZlbnRWaWV3KVxufSk7XG4iLCJcbnZhciBzZWxlY3REaXNoZXMgPSBbXG4gICc8ZGl2PicsXG4gICc8aDM+RW50ZXIgdGhlIHR5cGVzIG9mIGRpc2hlcyB5b3UgbmVlZCBmb3IgdGhlIGV2ZW50IChlLmcgc3RhcnRlcnMsIG1haW4sIHNuYWNrLCBkZXNzZXJ0IGV0Yy4pPC9oMz4nLFxuICAnPGlucHV0IGlkPVwic2VsZWN0RGlzaGVzXCIgdHlwZT1cInBvc3RcIj4nLFxuICAnPC9kaXY+J1xuXTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZWxlY3REaXNoZXM7XG5cblxuLy9cbi8vIDxzY3JpcHQ+XG4vLyB2YXIgYWxsSW5wdXRzID0gJCggXCI6aW5wdXRcIiApO1xuLy8gdmFyIGZvcm1DaGlsZHJlbiA9ICQoIFwiZm9ybSA+ICpcIiApO1xuLy8gJCggXCIjbWVzc2FnZXNcIiApLnRleHQoIFwiRm91bmQgXCIgKyBhbGxJbnB1dHMubGVuZ3RoICsgXCIgaW5wdXRzIGFuZCB0aGUgZm9ybSBoYXMgXCIgK1xuLy8gICBmb3JtQ2hpbGRyZW4ubGVuZ3RoICsgXCIgY2hpbGRyZW4uXCIgKTtcbi8vXG4vLyAkKCBcImZvcm1cIiApLnN1Ym1pdChmdW5jdGlvbiggZXZlbnQgKSB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyB9KTtcbi8vIDwvc2NyaXB0PlxuLy9cbi8vIDwvYm9keT5cbi8vIDwvaHRtbD5cbiJdfQ==
