const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
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
	for (var i = 0; i < data.length; i++) {
		var obj1 = {
			name: data[i].name,
			email: data[i].email,
			password: data[i].password
		};
		var savedUser = new User(obj1);
		savedUser.saveUser();
	}
};

let userShippingInfoSchema = mongoose.Schema({
	firstAdress: { type: String, trim: true, unique: false },
	secondAdress: { type: String, trim: true, unique: false },
	city: { type: String, trim: true, unique: false },
	state: { type: String, trim: true, unique: false },
	zipCode: { type: Number, trim: true, unique: false }
});

let Shipping = mongoose.model('shipping', userShippingInfoSchema);

let saveUserShipping = (data) => {
	for (var i = 0; i < data.length; i++) {
		var obj2 = {
			firstAdress: data[i].firstAdress,
			secondAdress: data[i].secondAdress,
			city: data[i].city,
			state: data[i].state,
			zipCode: data[i].zipCode
		};
		var savedUserShipping = new Shipping(obj2);
		savedUserShipping.saveUserShipping();
	}
};

let userCreditCardInfoSchema = mongoose.Schema({
	creditCardNumber: { type: Number, trim: true, unique: true },
	expiryDate: { type: Date, trim: true, unique: false },
	CCV: { type: Number, trim: true, unique: false },
	billingZipCode: { type: Number, trim: true, unique: false }
});

let CreditCard = mongoose.model('creditCard', userCreditCardInfoSchema);

let saveUserCreditCard = (data) => {
	for (var i = 0; i < data.length; i++) {
		var obj3 = {
			creditCardNumber: data[i].creditCardNumber,
			expiryDate: data[i].expiryDate,
			CCV: data[i].CCV,
			billingZipCode: data[i].billingZipCode
		};
		var savedUserCreditCard = new CreditCard(obj3);
		savedUserCreditCard.saveUserCreditCard();
	}
};

module.exports.saveUser = saveUser;
module.exports.saveUserShipping = saveUserShipping;
module.exports.saveUserCreditCard = saveUserCreditCard;
module.exports.User = User;
module.exports.Shipping = Shipping;
module.exports.CreditCard = CreditCard;
