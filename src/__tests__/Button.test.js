import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../components/button';
import '@testing-library/jest-dom';

describe('Testing the button component', () => {
  const calculateResult = jest.fn();

  it('Button component is rendered', () => {
    const button = renderer
      .create(<Button eventHandler={calculateResult} value="AC" />)
      .toJSON();
    expect(button).toMatchSnapshot();
  });

  it('Test button click', () => {
    render(<Button eventHandler={calculateResult} value="AC" />);
    fireEvent.click(screen.getByText('AC'));
    fireEvent.click(screen.getByText('AC'));
    fireEvent.click(screen.getByText('AC'));
    expect(calculateResult).toHaveBeenCalledTimes(3);
  });
});
