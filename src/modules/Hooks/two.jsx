import React, { Component, useState, useEffect } from 'react';

export class App2 extends Component {
	state = {
		count: 0,
		size: {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		}
	};

	onResize = () => {
		this.setState({
			size: {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		})
	}

	componentDidMount() {
		document.title = this.state.count;

		window.addEventListener('resize', this.onResize, false);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onResize, false);
	}

	componentDidUpdate() {
		document.title = this.state.count
	}

	render() {
		const { count, size } = this.state;

		return (
			<button onClick={() => this.setState({ count: count + 1 })}>
				<h2>{count}</h2>
				size: {size.width} * {size.height}
			</button>

		);
	}
}


export default App;

function App() {

	const [count, setCount] = useState(0);
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight
	});

	useEffect(() => {
		document.title = count;
	});

	useEffect(() => {
		console.log('ct:', count);
	}, [size, count]); // size 变化才触发，副作用

	function onResize() {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		});
	}

	useEffect(() => {
		window.addEventListener('resize', onResize, false);

		return () => {
			window.removeEventListener('resize', onResize, false);
		};
	}, []); // 只在第一次 render 后,组件卸载前才会运行解绑函数

	const onClick = () => {
		console.log('click span');
	};

	useEffect(() => {
		document.querySelector('#size').addEventListener('click', onClick, false);

		return () => {
			document.querySelector('#size').removeEventListener('click', onClick, false);
		};
	});

	return (
		<div>
			<button type="button"
				onClick={() => setCount(count => count + 1)}
			>
				Click ({count})

        </button>
			{
				count % 2
					? <span id='size'>&nbsp;size: {size.width} * {size.height}</span>
					: <p id="size">size: {size.width} * {size.height}</p>
			}
		</div>
	)
}
