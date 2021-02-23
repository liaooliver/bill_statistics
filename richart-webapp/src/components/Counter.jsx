import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    return ( 
        <div data-testid="counterBlock">
            <span data-testid="counter">{count}</span>
            <button data-testid="addCounterBtn" type="button" onClick={()=> { setCount(count+1) }}>+1</button>
        </div>
    );
}
 
export default Counter;