var express = require('express')
var app = express()
var port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'))

app.get('/wizard', function(req, res){
  res.send('To get to the shell station');
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
})
