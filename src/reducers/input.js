let initialMultiplierState = {multiplierValue: 1};


const multiplierReducer = (state = initialMultiplierState, action) => {
    if (action.type === 'input/multiplier') {
        return {
            ...state,
            counterValue: state.multiplierValue +1
        }
    } else {
        return state
    }
}

export default multiplierReducer;