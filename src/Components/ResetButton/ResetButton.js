import Button from 'react-bootstrap/Button';

function ResetButton({ resetValues }) {
    return (
      <div>
          <Button
                type="button"
                className="btn
                           btn-secondary
                           mb-4"
                onClick={resetValues}
          >Clear</Button>
      </div>
    );
  }

  export default ResetButton;