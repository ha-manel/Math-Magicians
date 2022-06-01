import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Testing the calculator', () => {
  it('Calculator is rendered', () => {
    const calc = renderer
      .create(<Calculator />)
      .toJSON();
    expect(calc).toMatchSnapshot();
  });
});
