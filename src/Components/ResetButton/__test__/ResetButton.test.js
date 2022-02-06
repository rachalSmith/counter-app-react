import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from '../../../App'


describe('reset button', () => {
    beforeEach(() => {
        render(<App />)

        inputElement = screen.getByLabelText('Enter a number:')
        counterElement = screen.getByRole('heading', { name: 0 });
        resetButton = screen.getByRole('button', {name: /Clear/i });

        fireEvent.change(inputElement, {
            target: {
                value: '10'
            }
        })
        fireEvent.click(resetButton);
    })

    let inputElement, counterElement, resetButton


    it('should set counter to 0 when clicked', () => {
        expect(counterElement.textContent).toBe('0');
    })

    it('should set the input field to 1 when clicked', () => {
        expect(inputElement.value).toBe('1');
    })
})

