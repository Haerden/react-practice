import React, { useState, createContext, Component, useContext } from 'react';

const CountContext = createContext();

// 消费者 1
class Foo extends Component {
    render() {
        return (
            <CountContext.Consumer>
                {
                    count => (
                        <h1>context: {count}</h1>
                    )
                }
            </CountContext.Consumer>
        )
    }
}

// 消费者 2 优雅写法
class Bar extends React.Component {
    static contextType = CountContext;

    render() {
        const count = this.context;

        return (
            <h1>context 2: {count}</h1>
        )
    }
}

// use 写法
function Counter() {
    const count = useContext(CountContext);

    return (
        <h1>useContext 3:{count}</h1>
    )
}

// use context root App
export default function App() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button type="button"
                onClick={() => setCount(count => count + 1)}
            >
                Click ({count})
            </button>
            <CountContext.Provider value={count}>
                <Foo />
                <Bar />
                <Counter />
            </CountContext.Provider>
        </div>
    )
}
