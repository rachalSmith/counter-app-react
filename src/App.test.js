import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";


beforeEach(() => {
    const component = render(<App />);
    getByTestId = component.getByTestId;

    inputElement = getByTestId('input');
    addButton = getByTestId('add-button');
    subtractButton = getByTestId('subtract-button');
    counterElement = getByTestId('counter');

})

let getByTestId;

let addButton, subtractButton, inputElement, counterElement;


afterEach(() => {
    cleanup();
})


describe('add and substract buttons', () => {
    beforeEach(() => {
        expect(counterElement.textContent).toBe('0');
    })

    describe('add button', () => {
        it('should add one when + button is clicked', () => {
            fireEvent.click(addButton);
            expect(counterElement.textContent).toBe('1');
        })
    })

    describe('subtract button', () => {
        it('should subtract one when - button is clicked', () => {
            fireEvent.click(subtractButton);
            expect(counterElement.textContent).toBe('-1');
        })
    })
})


describe('Input field', () => {
    it('should change the value of the input field by any amount', () => {
        expect(inputElement.value).toBe('1');

        fireEvent.change(inputElement, {
            target: {
                value: "5"
            }
        });

        expect(inputElement.value).toBe('5');
    })
})


describe('add button, subtract button and input field interacting together', () => {
    it('should both add and subract while rendering the correct counter number', () => {
        fireEvent.change(inputElement, {
            target: {
                value: '10'
            }
        })

        for ( let i = 0; i < 20; i++ ) {
            fireEvent.click(addButton);
        }

        for ( let i = 0; i < 10; i++ ) {
            fireEvent.click(subtractButton);
        }

        expect(counterElement.textContent).toBe('100');
    })
})


describe('reset button', () => {
    beforeEach(() => {
        resetButton = getByTestId('reset-button');

        fireEvent.change(inputElement, {
            target: {
                value: '10'
            }
        })
        fireEvent.click(resetButton);
    })

    let resetButton;

    it('should set counter to 0 when clicked', () => {
        expect(counterElement.textContent).toBe('0');
    })

    it('should set the input field to 1 when clicked', () => {
        expect(inputElement.value).toBe('1');
    })
})





