import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Counter from '../components/Counter';

describe('Counter', () => {
    test('Counter_Add', () => {
        const renderDom = render(<Counter />)
        const { getByTestId } = renderDom
        expect(getByTestId('counterBlock')).toBeInTheDocument();
        expect(getByTestId('counter').textContent).toBe('0');
        const addCounterBtn = getByTestId('addCounterBtn');
        fireEvent.click(addCounterBtn)
        expect(getByTestId('counter').textContent).toBe('1');
    })
})