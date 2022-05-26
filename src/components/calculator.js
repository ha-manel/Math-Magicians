import React, { Component } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.calculateResult = this.calculateResult.bind(this);
  }

  calculateResult = (event) => {
    const result = calculate(this.state, event.target.innerText);
    this.setState(result);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calc-container">
        <div className="calc-result">{`${total || ''} ${operation || ''} ${next || ''}`}</div>
        <Button eventHandler={this.calculateResult} value="AC" />
        <Button eventHandler={this.calculateResult} value="+/-" />
        <Button eventHandler={this.calculateResult} value="%" />
        <Button buttonClass="calc-operators" eventHandler={this.calculateResult} value="÷" />
        <Button eventHandler={this.calculateResult} value="7" />
        <Button eventHandler={this.calculateResult} value="8" />
        <Button eventHandler={this.calculateResult} value="9" />
        <Button buttonClass="calc-operators" eventHandler={this.calculateResult} value="x" />
        <Button eventHandler={this.calculateResult} value="4" />
        <Button eventHandler={this.calculateResult} value="5" />
        <Button eventHandler={this.calculateResult} value="6" />
        <Button buttonClass="calc-operators" eventHandler={this.calculateResult} value="-" />
        <Button eventHandler={this.calculateResult} value="1" />
        <Button eventHandler={this.calculateResult} value="2" />
        <Button eventHandler={this.calculateResult} value="3" />
        <Button buttonClass="calc-operators" eventHandler={this.calculateResult} value="+" />
        <Button buttonClass="zero" eventHandler={this.calculateResult} value="0" />
        <Button eventHandler={this.calculateResult} value="." />
        <Button buttonClass="calc-operators" eventHandler={this.calculateResult} value="=" />
      </div>
    );
  }
}

export default Calculator;
