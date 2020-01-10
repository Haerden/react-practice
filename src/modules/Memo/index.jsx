import React, { Component, PureComponent, memo } from 'react';


export class Foo extends PureComponent {
    render() {
        console.log('Foo render');
        return <div>{this.props.count}</div>;
    }
}



const FooFunc = function Foo(props) {
    console.log('Foo With Memo render');
    return <div>{props.count}</div>;

}

const FooFuncMemo = memo(FooFunc);

class App extends Component {
    state = {
        count: 0,
        person: {
            age: 12
        }
    };

    render() {
        // const person = this.state.person;

        return (
            <>
                <button onClick={() => {
                    this.setState((state) => ({person: {...state.person, age: state.person.age + 2}}))
                }} >Add</button>
                <FooFuncMemo count={0} />
            </>
        );
    }
}

export default App;