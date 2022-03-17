import { increment, decrement } from '../../actions';

import { useDispatch } from 'react-redux';

function Input() {

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
            onClick={() => dispatch(decrement())}
          >-</button>
        </div>
        <input
          className="form-control
                     text-center
                     shadow-sm"
          id="number-input"
          type="number"
          value='10000000000'
          // onChange={onChange}
          aria-label="number input"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn
                       btn-override
                       btn-primary
                       shadow-sm"
            onClick={() => dispatch(increment())}
            type="button"
           >+</button>
        </div>
      </div>
    </>
  );
}

export default Input;

