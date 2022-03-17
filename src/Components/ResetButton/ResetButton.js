import Button from 'react-bootstrap/Button';
import { reset } from '../../actions';

import { useDispatch } from 'react-redux';

function ResetButton() {

  const dispatch = useDispatch();

    return (
      <div>
          <Button
                type="button"
                className="btn
                           btn-secondary
                           mb-4"
                onClick={() => dispatch(reset())}
          >Clear</Button>
      </div>
    );
  }

  export default ResetButton;