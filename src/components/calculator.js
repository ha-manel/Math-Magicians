import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-container">
        <div className="calc-result">0</div>
        <button type="button" className="calc-head-operators">AC</button>
        <button type="button" className="calc-head-operators">+/-</button>
        <button type="button" className="calc-head-operators">%</button>
        <button type="button" className="calc-operators">÷</button>
        <button type="button" className="calc-numbers">7</button>
        <button type="button" className="calc-numbers">8</button>
        <button type="button" className="calc-numbers">9</button>
        <button type="button" className="calc-operators">x</button>
        <button type="button" className="calc-numbers">4</button>
        <button type="button" className="calc-numbers">5</button>
        <button type="button" className="calc-numbers">6</button>
        <button type="button" className="calc-operators">-</button>
        <button type="button" className="calc-numbers">1</button>
        <button type="button" className="calc-numbers">2</button>
        <button type="button" className="calc-numbers">3</button>
        <button type="button" className="calc-operators">+</button>
        <button type="button" className="calc-numbers zero">0</button>
        <button type="button" className="calc-decimal">.</button>
        <button type="button" className="calc-operators">=</button>
      </div>
    );
  }
}

export default Calculator;
