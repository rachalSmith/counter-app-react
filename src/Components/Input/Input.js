import PropTypes from 'prop-types';

function Input({ inputValue, addToCounter, substractFromCounter, onChange }) {
    return (
      <div className="input-container">
          <button
                className="subtract-button"
                data-testid="subtract-button"
                onClick={substractFromCounter}

          >-</button>
          <input
                data-testid="input"
                type="number"
                value={inputValue}
                onChange={onChange}
                className="input-field"
            />
          <button
                className="add-button"
                data-testid="add-button"
                onClick={addToCounter}
          >+</button>
      </div>
    );
}

export default Input;

Input.propTypes = {
      inputValue : PropTypes.number.isRequired,
      addToCounter : PropTypes.func.isRequired,
      substractFromCounter : PropTypes.func.isRequired,
      onChange : PropTypes.func.isRequired
}

