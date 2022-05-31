import './App.css';
import React, { Component } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Calculator from './components/calculator';
import Quote from './components/quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
