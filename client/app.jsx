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
			showComponent2: false,
			name: '',
			email: '',
			password: ''
		};
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		var { name, email, password } = this.state;
		var user = { name, email, password };
		$.ajax({
			type: 'POST',
			url: '/user',
			data: { user: user },
			dataType: 'json'
		});
		console.log(user);
		this.setState({
			showComponent2: true
		});
	}
	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div className="main">
				<h2>Please fill in the information below</h2>
				<form>
					<input
						name="name"
						type="name"
						placeholder="please input your name"
						onChange={this.changed.bind(this)}
					/>{' '}
					<br /> <br />
					<input
						name="email"
						type="email"
						placeholder="please input your email"
						onChange={this.changed.bind(this)}
					/>{' '}
					<br /> <br />
					<input
						name="password"
						type="password"
						placeholder="please input your password"
						onChange={this.changed.bind(this)}
					/>
				</form>
				<br />
				<button onClick={this.onButtonClick}>next</button>
				{this.state.showComponent2 ? <Form2 /> : null}
			</div>
		);
	}
}

class Form2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent3: false,
			firstAdress: '',
			secondAdress: '',
			city: '',
			state: '',
			zipcode: ''
		};
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		var { firstAdress, secondAdress, city, state, zipcode } = this.state;
		var shipping = { firstAdress, secondAdress, city, state, zipcode };
		$.ajax({
			type: 'POST',
			url: '/user',
			data: { shipping: shipping },
			dataType: 'json'
		});
		console.log(shipping);
		this.setState({
			showComponent3: true
		});
	}
	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		return (
			<div className="main">
				<h2>Please fill in the shipping information below</h2>
				<form>
					<input
						onChange={this.changed.bind(this)}
						type="adress"
						name="firstAdress"
						placeholder="please input your adress 1"
					/>{' '}
					<br /> <br />
					<input
						onChange={this.changed.bind(this)}
						type="adress"
						name="secondAdress"
						placeholder="please input your adress 2"
					/>{' '}
					<br /> <br />
					<input
						onChange={this.changed.bind(this)}
						type="city"
						name="city"
						placeholder="please input the city"
					/>{' '}
					<br /> <br />
					<input
						onChange={this.changed.bind(this)}
						type="state"
						name="state"
						placeholder="please input the state"
					/>{' '}
					<br /> <br />
					<input
						onChange={this.changed.bind(this)}
						type="zip code"
						name="zipcode"
						placeholder="please input your zip-code"
					/>
				</form>
				<br />
				<button onClick={this.onButtonClick}>next</button>
				{this.state.showComponent3 ? <Form3 /> : null}
			</div>
		);
	}
}

class Form3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			creditCardNumber: '',
			expiryDate: '',
			ccv: '',
			billingZipCode: ''
		};
		this.onButtonClick = this.onButtonClick.bind(this);
	}
	changed(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onButtonClick() {
		var that = this;
		$.ajax({
			type: 'POST',
			url: '/user',
			data: { card: that.state },
			dataType: 'json'
		});
		console.log(this.state);
	}

	render() {
		return (
			<div className="main">
				<h2>Please fill in your credit card information below</h2>
				<form>
					<input
						onChange={this.changed.bind(this)}
						type="number"
						name="creditCardNumber"
						placeholder="credit card number"
					/>{' '}
					<br /> <br />
					<input
						onChange={this.changed.bind(this)}
						type="date"
						name="expiryDate"
						placeholder="credit card expiry date"
					/>{' '}
					<br /> <br />
					<input onChange={this.changed.bind(this)} type="number" name="ccv" placeholder="CVV" /> <br />{' '}
					<br />
					<input
						onChange={this.changed.bind(this)}
						type="number"
						name="billingZipCode"
						placeholder="billing zip code"
					/>
				</form>{' '}
				<br /> <br />
				<button onClick={this.onButtonClick}>Confirm Purchace</button>
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('challenge3'));
