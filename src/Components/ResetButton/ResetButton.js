function ResetButton({ resetValues }) {
    return (
      <div>
          <button
                data-testid="reset-button"
                onClick={resetValues}
          >Clear</button>
      </div>
    );
  }

  export default ResetButton;