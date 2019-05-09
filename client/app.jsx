// import React from 'react';
// import $ from 'jquery';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent1: false
		};
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.setState({
			showComponent1: true
		});
	}
	render() {
		return (
			<div className="main">
				<h1>Amazon</h1>
				<img
					src="https://res.cloudinary.com/spectrumobile/image/fetch/e_trim/w_360,h_480,c_fit,f_auto,q_auto,fl_lossy/http%3A%2F%2Fres.cloudinary.com%2Fspectrumobile%2Fimage%2Fupload%2Fv1536795115%2FSpecturm%2520Mobile%2520Buy%2520Flow%2FApple%2FiPhone%2520XS%2520Max%2FMT5C2LLA_HERO.png"
					alt="iphoneXSMax"
				/>{' '}
				<h3>$1000</h3>
				<br /> <br />
				<button onClick={this.onButtonClick}>PURCHASE</button>
				{this.state.showComponent1 ? <Form1 /> : null}
			</div>
		);
	}
}

class Form1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent2: false
		};
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.setState({
			showComponent2: true,
			info: ''
		});
	}

	saveFromClient(info) {
		console.log(`${info} was added `);
		console.log(info);
		$.ajax({
			url: '/user',
			method: 'POST',
			data: {
				name: info,
				email: info,
				password: info
			},
			dataType: 'json'
		});
	}

	render() {
		return (
			<div className="main">
				<h2>Please fill in the information below</h2>
				<form>
					<input
						value={this.state.info}
						name="name"
						type="name"
						placeholder="please input your name"
						onChange={this.onChange}
					/>{' '}
					<br /> <br />
					<input
						value={this.state.info}
						name="email"
						type="email"
						placeholder="please input your email"
						onChange={this.onChange}
					/>{' '}
					<br /> <br />
					<input
						value={this.state.info}
						name="password"
						type="password"
						placeholder="please input your password"
						onChange={this.onChange}
					/>
				</form>
				<br />
				<button onClick={this.onButtonClick}>next</button>
				{this.state.showComponent2 ? <Form2 /> : null}
			</div>
		);
	}
}
// && this.saveFromClient
class Form2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent3: false
		};
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.setState({
			showComponent3: true
		});
	}
	render() {
		return (
			<div className="main">
				<h2>Please fill in the shipping information below</h2>
				<form>
					<input type="adress" name="firstAdress" placeholder="please input your adress 1" /> <br /> <br />
					<input type="adress" name="secondAdress" placeholder="please input your adress 2" /> <br /> <br />
					<input type="city" name="city" placeholder="please input the city" /> <br /> <br />
					<input type="state" name="state" placeholder="please input the state" /> <br /> <br />
					<input type="zip code" name="zipCode" placeholder="please input your zip-code" />
				</form>
				<br />
				<button onClick={this.onButtonClick}>next</button>
				{this.state.showComponent3 ? <Form3 /> : null}
			</div>
		);
	}
}

class Form3 extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		confirm: false
	// 	};
	// }
	// onButtonClick() {
	// 	confirm: true;
	// }
	render() {
		return (
			<div className="main">
				<h2>Please fill in your credit card information below</h2>
				<form>
					<input type="number" name="creditCardNumber" placeholder="credit card number" /> <br /> <br />
					<input type="date" name="expiryDate" placeholder="credit card expiry date" /> <br /> <br />
					<input type="number" name="CVV" placeholder="CVV" /> <br /> <br />
					<input type="number" name="billingZipCode" placeholder="billing zip code" />
				</form>{' '}
				<br /> <br />
				<button>Confirm Purchace</button>
				{/* {this.state.confirm ? <Menue /> : null} */}
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('challenge3'));
