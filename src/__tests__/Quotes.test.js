import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/quote';
import '@testing-library/jest-dom';

describe('Test of quotes page', () => {
  it('test if quotes page is rendered', () => {
    const quotePage = renderer
      .create(<Quote />)
      .toJSON();
    expect(quotePage).toMatchSnapshot();
  });
});
