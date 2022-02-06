import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from '../../../App'


beforeEach(() => {
    render(<App />)

    inputElement = screen.getByLabelText('Enter a number:')
    counterElement = screen.getByRole('heading', { name: 0 });
    addButton = screen.getByRole('button', {name: '+' });
    subtractButton = screen.getByRole('button', {name: '-' });
})


let addButton, subtractButton, inputElement, counterElement;


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
