import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import OneState from './modules/one';
import TwoEffect from './modules/two';
import ThContext from './modules/three';
import Memo from './modules/four';
import Ref from './modules/five';
import Custom from './modules/six';
import Ans from './modules/seven';

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
						<Link to="/hooks/custom">6.Use custom Ref</Link>
						<hr />
						<Link to="/hooks/ans">7.Hooks Ans</Link>
						<hr />
					</section>

					<Route path="/hooks/state" exact component={OneState}></Route>
					<Route path="/hooks/effect" component={TwoEffect}></Route>
					<Route path="/hooks/context" component={ThContext}></Route>
					<Route path="/hooks/memo" component={Memo}></Route>
					<Route path="/hooks/ref" component={Ref}></Route>
					<Route path="/hooks/custom" component={Custom}></Route>
					<Route path="/hooks/ans" component={Ans}></Route>
				</div>
			</Router>
		);
	}
}

export default App;