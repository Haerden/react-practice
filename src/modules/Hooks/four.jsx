import React, { useState, useMemo, memo } from 'react';

const Counter = memo(function Counter(props) {
    console.log('Counter render');

    return <h1 onClick={props.onClick}>{props.count}</h1>
});

export default function App() {
    const [count, setCount] = useState(0);

    const double = useMemo(() => {
        return count * 2;
    }, [count]);

    // half 依赖 double
    // const half = useMemo(() => { return double / 4; }, [double]); ...
    const onClick = useMemo(() => {
        return () => {
            console.log('click!');
        }
    }, []);

    /*
    const onClick = useCallback(() => {
        console.log('click!');
    }, []);
    */

    // useMemo(() => fn) , useCallBack(fn)

    return (
        <div>
            <button type="button"
                onClick={() => setCount(count => count + 1)}
            >
                Click: ({count}) double: ({double})
            </button>
            <Counter count={double} onClick={onClick} />
        </div>
    )
}
