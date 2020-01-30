import React, { useState, useRef, useEffect, useCallback } from 'react';

/*
function Counter(props) {
	return <h1>{props.count}</h1>
};
*/
// hook 返回jsx
function useCounter(count) {
	return <h1>{count}</h1>;
}

function useCount(defaultCount) {
	const [count, setCount] = useState(defaultCount);

	const it = useRef();

	useEffect(() => {
		it.current = setInterval(() => {
			setCount(count => count + 1);
		}, 900);
	}, []);

	useEffect(() => {
		if (count > 2) {
			clearInterval(it.current);
		}
	}, [count]);

	return [count, setCount];
}

function useSize() {
	const [size, setSize] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight
	});

	const onResize = useCallback(() => {
		setSize({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		});
	}, []);

	useEffect(() => {
		window.addEventListener('resize', onResize, false);
		return () => {
			window.removeEventListener('resize', onResize, false);
		}
	}, [onResize]);

	return size;
}

export default function App() {
	const [count, setCount] = useCount(1);
	const Counter = useCounter(count);
	const size = useSize();

	return (
		<div>
			<button type="button"
				onClick={() => setCount(count => count + 1)}
			>
				Click ({count}) Size: ({size.width}*{size.height})
            </button>
			{Counter}
		</div>
	)
}
