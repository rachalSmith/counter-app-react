import { increment, decrement } from '../../actions';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Input() {

  const [incrementAmount, setIncrementAmount] = useState(1);

  const dispatch = useDispatch();

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
            onClick={() => dispatch(decrement(incrementAmount))}
          >-</button>
        </div>
        <input
          className="form-control
                     text-center
                     shadow-sm"
          id="number-input"
          type="number"
          value={incrementAmount}
          onChange={event => setIncrementAmount(parseInt(event.target.value))}
          aria-label="number input"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn
                       btn-override
                       btn-primary
                       shadow-sm"
            onClick={() => dispatch(increment(incrementAmount))}
            type="button"
           >+</button>
        </div>
      </div>
    </>
  );
}

export default Input;

