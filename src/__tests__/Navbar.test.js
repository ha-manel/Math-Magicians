import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent, screen } from '@testing-library/react';
import Navbar from '../components/navbar';
// import App from '../App';
import '@testing-library/jest-dom';

describe('Test of navbar', () => {
  it('test if the navbar is rendered', () => {
    const navbar = renderer
      .create(<Navbar />)
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });

  // it('test the home link', () => {
  //   const { container } = render(<App />);

  //   fireEvent.click(screen.getByText('Home'));

  //   const home = container.querySelector('#home-page');
  //   expect(home).toBeInTheDocument();
  // });
});
