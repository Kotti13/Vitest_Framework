import { render, screen } from '@testing-library/react';
import Hello from '../sample-test/Hello';
// import { describe } from 'vitest';
import getByText from '@testing-library/dom';

describe('Hello Component', () => {
  it('renders with corrcect name', () => {
    render(<Hello name="Ks" />)
    const heading = screen.getByText('Hello, Ks');

    expect(heading).toBeInTheDocument();
    console.log('Hello Component Test Passed');
  })
})