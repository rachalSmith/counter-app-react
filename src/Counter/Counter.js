import React from 'react';

import { useState } from 'react';

function Counter() {

    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue);
    }

    const substractFromCounter = () => {
        setCounterValue(counterValue - inputValue);
    }


    return (
      <div>
          <h3 data-testid="header">Counter</h3>
          <h2 data-testid="counter">{ counterValue }</h2>
          <button
                data-testid="subtract-button"
                onClick={substractFromCounter}

          >-</button>
          <input
                data-testid="input"
                type="number"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(parseInt(e.target.value));
                }}
            />
          <button
                data-testid="add-button"
                onClick={addToCounter}

          >+</button>
      </div>
    );
  }

  export default Counter;
