import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Context from './modules/Context';
import Split from './modules/Split';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Link to="/">Home</Link>
					<hr />
					<Link to="/context">Context</Link>
					<hr />
					<Link to="/lazy">代码分割</Link>
					<hr />
					<Route path="/" exact component={Context}></Route>
					<Route path="/context" component={Context}></Route>
					<Route path="/lazy" component={Split}></Route>
				</div>
			</Router>
		);
	}
}

export default App;