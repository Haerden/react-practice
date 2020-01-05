import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Context from './modules/Context';

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

const Product = () => (
	<div>
		<h2>Product</h2>
	</div>
)

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Link to="/">Home</Link>
					<hr />
					<Link to="/context">Context</Link>
					<hr />
					<Link to="/Product">Product</Link>
					<hr />
					<Route path="/" exact component={Context}></Route>
					<Route path="/context" component={Context}></Route>
					<Route path="/product" component={Product}></Route>
				</div>
			</Router>
		);
	}
}

export default App;