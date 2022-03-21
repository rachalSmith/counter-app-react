export const increment = (number) => {
    return {
        type: 'input/increment',
        payload: number
    }
}

export const decrement = (number) => {
    return {
        type: 'input/decrement',
        payload: number
    }
}

export const reset = () => {
    return {
        type: 'input/reset'
    }
}

export const multiplier = () => {
    return {
        type: 'input/multiplier'
    }
}