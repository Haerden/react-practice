import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import OneState from './one';
import TwoEffect from './two';
// import Memo from './three';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Link to="/hooks/state">Use State</Link>
					<hr />
					<Link to="/hooks/effect">Use Effect</Link>
					<hr />
					<Link to="/hooks/lazy">Use</Link>
					<hr />
					<Link to="/hooks/memo">Use</Link>
					<hr />

					<Route path="/hooks/state" exact component={OneState}></Route>
					<Route path="/hooks/effect" component={TwoEffect}></Route>
					<Route path="/state1" component={OneState}></Route>
					<Route path="/state2" component={OneState}></Route>

				</div>
			</Router>
		);
	}
}

export default App;