let initialCounterState = {counterValue: 0};


const counterReducer = (state = initialCounterState, action) => {
    if (action.type === 'input/increment') {
        return {
            ...state,
            counterValue: state.counterValue +1
        }
    }

    else if (action.type === 'input/decrement') {
        return {
            ...state,
            counterValue: state.counterValue -1
        }
    }

    else if (action.type === 'input/reset') {
        return {
            counterValue: 0
        }
    }

    else {
        return state
    }
}

export default counterReducer;