import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Context from './modules/Context';
import Split from './modules/Split';
import Memo from './modules/Memo';
import Hooks from './modules/Hooks';
import './style.css';

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
					<Link to="/memo">Memo</Link>
					<hr />
					<Link to="/hooks">Hooks</Link>
					<hr />
					<Route path="/" exact component={Context}></Route>
					<Route path="/context" component={Context}></Route>
					<Route path="/lazy" component={Split}></Route>
					<Route path="/memo" component={Memo}></Route>
					<Route path="/hooks" component={Hooks}></Route>
				</div>
			</Router>
		);
	}
}

export default App;