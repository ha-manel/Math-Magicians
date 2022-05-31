import './App.css';
import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Calculator from './components/calculator';
import Quote from './components/quote';

const App = () => (
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

export default App;
