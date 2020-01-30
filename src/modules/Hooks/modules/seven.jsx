import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

export default function App() {
    useEffect(() => {
        // componentDidMount
        return () => {
            // componentWillUnmount
        };
    }, []);

    let renderCounter = useRef(0);
    renderCounter.current++;

    useEffect(() => {
        if (renderCounter.current > 1) {
            // componentDidUpdate
        }
    });

    return (
        <>
            <h3>常见问题</h3>
            <AppRef />
        </>
    );
}

// 类实例变量 与 ref
export class AppP {
    it = 0;
}

export function AppP2() {
    const it = useRef(0);

    if (it > 0) {
        console.log('1');
    }
}

// 获取历史props 和 state & 强制更新
function AppRef() {
    const [count, setCount] = useState(1);
    const prevCountRef = useRef();

    const [updateder, setUpdater] = useState(0);

    function forceUpdate() {
        setUpdater(updateder + 1);
    }

    useEffect(() => {
        prevCountRef.current = count;
    });

    return (
        <div onClick={() => forceUpdate()}>
            <h3 onClick={() => setCount(count + 1)}>Click:{count} pre: {prevCountRef.current}</h3>
        </div>
    )
}