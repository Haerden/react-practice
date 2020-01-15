import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import OneState from './one';
import TwoEffect from './two';
import ThContext from './three';
import Memo from './four';
import Ref from './five';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Link to="/hooks/state">Use State</Link>
					<hr />
					<Link to="/hooks/effect">Use Effect</Link>
					<hr />
					<Link to="/hooks/context">Context Hooks</Link>
					<hr />
					<Link to="/hooks/memo">Use Memo Callback</Link>
					<hr />
					<Link to="/hooks/ref">Use Ref</Link>
					<hr />

					<Route path="/hooks/state" exact component={OneState}></Route>
					<Route path="/hooks/effect" component={TwoEffect}></Route>
					<Route path="/hooks/context" component={ThContext}></Route>
					<Route path="/hooks/memo" component={Memo}></Route>
					<Route path="/hooks/ref" component={Ref}></Route>
				</div>
			</Router>
		);
	}
}

export default App;