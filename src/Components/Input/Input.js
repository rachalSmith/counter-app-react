import PropTypes from 'prop-types';

function Input({ inputValue, addToCounter, substractFromCounter, onChange }) {
  return (
    <>
      <label
        className="label-custom row mb-1"
        htmlFor="number-input">Enter a number:
      </label>
      <div className="input-group mb-4">
        <div className="input-group-prepend">
          <button
            type="button"
            className="btn
                       btn-override
                       btn-primary
                       shadow-sm"
            onClick={substractFromCounter}
          >-</button>
        </div>
        <input
          className="form-control
                     text-center
                     shadow-sm"
          id="number-input"
          type="number"
          value={inputValue}
          onChange={onChange}
          aria-label="number input"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn
                       btn-override
                       btn-primary
                       shadow-sm"
            onClick={addToCounter}
            type="button"
           >+</button>
        </div>
      </div>
    </>
  );
}

export default Input;

Input.propTypes = {
      inputValue : PropTypes.number.isRequired,
      addToCounter : PropTypes.func.isRequired,
      substractFromCounter : PropTypes.func.isRequired,
      onChange : PropTypes.func.isRequired
}

