import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Counter from "../Counter";

let getByTestId;


beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})


afterEach(() => {
    cleanup();
})


it('should render header with correct text', () => {
    const headerElement = getByTestId('header');

    expect(headerElement.textContent).toBe('Counter');
})


it('should start at 0', () => {
    const counterElement = getByTestId('counter');

    expect(counterElement.textContent).toBe('0');
})


it('should have initial value of 1', () => {
    const inputElement = getByTestId('input');

    expect(inputElement.value).toBe('1');
})


it('should render with + sign', () => {
    const addButton = getByTestId('add-button');

    expect(addButton.textContent).toBe('+');
})


it('should render with - sign', () => {
    const subtractButton = getByTestId('subtract-button');

    expect(subtractButton.textContent).toBe('-');
})


it('should change the value of input', () => {
    const inputElement = getByTestId('input');

    // initial state
    expect(inputElement.value).toBe('1');

    // state change after onChange event
    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    });

    expect(inputElement.value).toBe('5');
})


it('should add one when + button is clicked', () => {
    const addButton = getByTestId('add-button');
    const counterElement = getByTestId('counter');

    // initial state
    expect(counterElement.textContent).toBe('0');

    fireEvent.click(addButton);

    // state change after onClick event
    expect(counterElement.textContent).toBe('1');

})


it('should subtract one when - button is clicked', () => {
    const subtractButton = getByTestId('subtract-button');
    const counterElement = getByTestId('counter');

    // initial state
    expect(counterElement.textContent).toBe('0');

    fireEvent.click(subtractButton);

    // state change after onClick event
    expect(counterElement.textContent).toBe('-1');

})


it('should count up by set amount when input value is chaged', () => {
    const addButton = getByTestId('add-button');
    const counterElement = getByTestId('counter');
    const inputElement = getByTestId('input');

    // initial state
    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    })

    fireEvent.click(addButton);

    // state change after onClick event
    expect(counterElement.textContent).toBe('5');

})


it('should count down by set amount when input value is chaged', () => {
    const subtractButton = getByTestId('subtract-button');
    const counterElement = getByTestId('counter');
    const inputElement = getByTestId('input');

    // initial state
    fireEvent.change(inputElement, {
        target: {
            value: '5'
        }
    })

    fireEvent.click(subtractButton);

    // state change after onClick event
    expect(counterElement.textContent).toBe('-5');
})


it('should both add and subract while rendering the correct counter number', () => {
    const addButton = getByTestId('add-button');
    const subtractButton = getByTestId('subtract-button');
    const counterElement = getByTestId('counter');
    const inputElement = getByTestId('input');

    // initial state
    fireEvent.change(inputElement, {
        target: {
            value: '10'
        }
    })

    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(subtractButton)
    fireEvent.click(subtractButton)

    // state change after onClick event
    expect(counterElement.textContent).toBe('20');
})