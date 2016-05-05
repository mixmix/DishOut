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
