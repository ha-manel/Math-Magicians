import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/home';

describe('Test of home page', () => {
  it('test if home page is rendered', () => {
    const homePage = renderer
      .create(<Home />)
      .toJSON();
    expect(homePage).toMatchSnapshot();
  });
});
