import React, { Component, lazy, Suspense } from 'react';

const About = lazy(() => import(/* webpackChunkName: 'about' */'./About'));

// ErrorBoundary
// componentDidCatch

class App extends Component {
	state = {
		hasError: false
	}

	static getDerivedStateFromError() {
		return {
			hasError: true
		}
	}

	render() {
		if (this.state.hasError) {
			return (<h2>Error</h2>);
		}

		return (
			<Suspense fallback={<div>Loading...</div>}>
				<About />
			</Suspense>
		);
	}
}

export default App;