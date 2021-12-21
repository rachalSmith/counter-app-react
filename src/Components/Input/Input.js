function Input({ inputValue, addToCounter, substractFromCounter, onChange }) {
    return (
      <div>
          <button
                data-testid="subtract-button"
                onClick={substractFromCounter}

          >-</button>
          <input
                data-testid="input"
                type="number"
                value={inputValue}
                onChange={onChange}

            />
          <button
                data-testid="add-button"
                onClick={addToCounter}
          >+</button>
      </div>
    );
  }

  export default Input;

