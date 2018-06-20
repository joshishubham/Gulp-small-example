var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/', function(req, res) {
	res.sendFile(__dirname+ "/dist/html/index.html")
})

app.listen(7890, console.log("http://localhost:7890"));