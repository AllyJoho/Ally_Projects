import React, { useState, useEffect } from 'react';

function Practice(props) {
    // State (like this.state)
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('red');

    // Equivalent to componentDidMount and componentDidUpdate
    useEffect(() => {
        // Code here runs after every render (like componentDidUpdate)
        // To simulate componentDidMount, use an empty dependency array:
        // useEffect(() => { ... }, []);
        console.log('Component mounted or updated');

        // Optional: cleanup function (like componentWillUnmount)
        return () => {
            console.log('Cleanup before next render or unmount');
        };
    }, [count, color]); // Run effect when count or color changes

    // Event handler (no need to bind 'this')
    const handleIncrement = () => setCount(count + 1);
    const handleColorChange = (e) => setColor(e.target.value);

    // Render (just return JSX)
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <p>
                Color: <input value={color} onChange={handleColorChange} />
            </p>
            <p>{color}</p>
        </div>
    );
}

export default Practice;
