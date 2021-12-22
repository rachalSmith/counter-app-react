function ResetButton({ resetValues }) {
    return (
      <div>
          <button
                className="reset-button"
                data-testid="reset-button"
                onClick={resetValues}
          >Clear</button>
      </div>
    );
  }

  export default ResetButton;