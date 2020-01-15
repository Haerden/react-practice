import React, { useState } from 'react';

export default function App() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button type="button"
                onClick={() => setCount(count => count + 1)}
            >
                Click ({count})

        </button>
        </div>
    )
}
