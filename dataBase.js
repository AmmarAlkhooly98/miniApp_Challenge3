const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/miniAppChallenge3');
var dataBase = mongoose.connection;
dataBase.on('error', console.error.bind(console, 'connection error!'));
dataBase.once('open', function() {
	console.log('DataBase connected!');
});

let userInfoSchema = mongoose.Schema({
	name: { type: String, trim: true, unique: false },
	email: { type: String, trim: true, unique: true },
	password: { type: String, trim: true, unique: true }
});

let User = mongoose.model('user', userInfoSchema);

let saveUser = (data) => {
	var savedUser = new User({
		name: data.name,
		email: data.email,
		password: data.password
	});
	savedUser.save((cb) => {
		console.log('saved');
	});
};

let userShippingInfoSchema = mongoose.Schema({
	firstAdress: { type: String, trim: true, unique: false },
	secondAdress: { type: String, trim: true, unique: false },
	city: { type: String, trim: true, unique: false },
	state: { type: String, trim: true, unique: false },
	zipCode: { type: Number, trim: true, unique: false }
});

let Shipping = mongoose.model('Shipping', userShippingInfoSchema);

let saveUserShipping = (data) => {
	var savedUser = new Shipping({
		firstAdress: data.firstAdress,
		secondAdress: data.secondAdress,
		city: data.city,
		state: data.state,
		zipCode: data.zipCode
	});
	savedUser.save((cb) => {
		console.log('saved');
	});
};

let userCreditCardInfoSchema = mongoose.Schema({
	creditCardNumber: { type: Number, trim: true, unique: true },
	expiryDate: { type: Date, trim: true, unique: false },
	ccv: { type: Number, trim: true, unique: false },
	billingZipCode: { type: Number, trim: true, unique: false }
});

let CreditCard = mongoose.model('creditCard', userCreditCardInfoSchema);

let saveUserCreditCard = (data) => {
	var savedUser = new CreditCard({
		creditCardNumber: data.creditCardNumber,
		expiryDate: data.expiryDate,
		ccv: data.ccv,
		billingZipCode: data.billingZipCode
	});

	savedUser.save((cb) => {
		console.log('saved');
	});
};

module.exports.saveUser = saveUser;
module.exports.saveUserShipping = saveUserShipping;
module.exports.saveUserCreditCard = saveUserCreditCard;
module.exports.User = User;
module.exports.Shipping = Shipping;
module.exports.CreditCard = CreditCard;
