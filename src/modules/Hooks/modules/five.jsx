import React, { useState, useRef, useEffect } from 'react';

function Counter(props) {
    return <h1>{props.count}</h1>
};

export default function App() {
    const [count, setCount] = useState(0);
    // let it;
    // 渲染周期之间可以保持
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

    return (
        <div>
            <button type="button"
                onClick={() => setCount(count => count + 1)}
            >
                Click ({count})
            </button>
            <Counter />
        </div>
    )
}
