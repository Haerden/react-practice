import React, { useState } from "react";


function App(props) {
    // const defaultCount = props.defaultCount || 0;
    const [count, setCount] = useState(() => {
        return props.defaultCount || 0;
    }); // 延时初始化

    return (
        <button type="button"
            onClick={() => setCount(count => count + 2)} // setCount(count + 1)
        >
            Click {count}

        </button>
    )
}

export default App;