import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import OneState from './one';
import TwoEffect from './two';
import ThContext from './three';
import Memo from './four';
import Ref from './five';
import Six from './six';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<section className="sub-link">
						<Link to="/hooks/state">1.Use State</Link>
						<hr />
						<Link to="/hooks/effect">2.Use Effect</Link>
						<hr />
						<Link to="/hooks/context">3.Context Hooks</Link>
						<hr />
						<Link to="/hooks/memo">4.Use Memo Callback</Link>
						<hr />
						<Link to="/hooks/ref">5.Use Ref</Link>
						<hr />
						<Link to="/hooks/use">6.Use </Link>
						<hr />
					</section>

					<Route path="/hooks/state" exact component={OneState}></Route>
					<Route path="/hooks/effect" component={TwoEffect}></Route>
					<Route path="/hooks/context" component={ThContext}></Route>
					<Route path="/hooks/memo" component={Memo}></Route>
					<Route path="/hooks/ref" component={Ref}></Route>
					<Route path="/hooks/use" component={Six}></Route>
				</div>
			</Router>
		);
	}
}

export default App;