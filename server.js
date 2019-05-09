const express = require('express');
let app = express();
const dataBase = require('./dataBase');
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/user', function(req, res) {
	console.log(req.body);
});
let port = 1128;

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});
