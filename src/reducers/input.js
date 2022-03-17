let initialState = {value: 10};

const inputReducer = (state = initialState, action) => {
    if (action.type === 'input/increment') {
        return {
            ...state,
            value: state.value +1
        }
    }

    else if (action.type === 'input/decrement') {
        return {
            ...state,
            value: state.value +1
        }
    }

    else {
        return state
    }
}

export default inputReducer;