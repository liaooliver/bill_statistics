import React from 'react';
import { render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import Home from '../pages/Home';

describe('Home Page', () => {
    test('Home page render', () => {
        const { getByTestId } = render(<Home />);
        expect(getByTestId('homeBlock')).toBeInTheDocument()
    })
})