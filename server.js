const express = require('express');
let app = express();
const dataBase = require('./dataBase');
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/user', function(req, res) {
	if (req.body.user) {
		console.log(req.body.user);
		dataBase.saveUser(req.body.user);
	}
	if (req.body.shipping) {
		console.log(req.body.shipping);
		dataBase.saveUserShipping(req.body.shipping);
	}
	if (req.body.card) {
		console.log(req.body.card);
		dataBase.saveUserCreditCard(req.body.card);
	}
});

let port = 1998;

app.listen(port, function() {
	console.log(`listening on port ${port}`);
});
