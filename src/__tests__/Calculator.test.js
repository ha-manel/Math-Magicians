import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/calculator';
import '@testing-library/jest-dom';

describe('Testing the calculator', () => {
  it('Calculator is rendered', () => {
    const calc = renderer
      .create(<Calculator />)
      .toJSON();
    expect(calc).toMatchSnapshot();
  });

  it('Test if doing 10+22=32', () => {
    const { container } = render(<Calculator />);

    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    const result = container.querySelector('.calc-result').innerHTML;
    expect(result).toEqual('32');
  });
});
