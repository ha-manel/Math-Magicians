import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const calculateResult = (event) => {
    const result = calculate(state, event.target.innerText);
    setState(result);
  };

  const { total, next, operation } = state;
  return (
    <div className="calc-container">
      <div className="calc-result">{`${total || ''} ${operation || ''} ${next || ''}`}</div>
      <Button eventHandler={calculateResult} value="AC" />
      <Button eventHandler={calculateResult} value="+/-" />
      <Button eventHandler={calculateResult} value="%" />
      <Button buttonClass="calc-operators" eventHandler={calculateResult} value="÷" />
      <Button eventHandler={calculateResult} value="7" />
      <Button eventHandler={calculateResult} value="8" />
      <Button eventHandler={calculateResult} value="9" />
      <Button buttonClass="calc-operators" eventHandler={calculateResult} value="x" />
      <Button eventHandler={calculateResult} value="4" />
      <Button eventHandler={calculateResult} value="5" />
      <Button eventHandler={calculateResult} value="6" />
      <Button buttonClass="calc-operators" eventHandler={calculateResult} value="-" />
      <Button eventHandler={calculateResult} value="1" />
      <Button eventHandler={calculateResult} value="2" />
      <Button eventHandler={calculateResult} value="3" />
      <Button buttonClass="calc-operators" eventHandler={calculateResult} value="+" />
      <Button buttonClass="zero" eventHandler={calculateResult} value="0" />
      <Button eventHandler={calculateResult} value="." />
      <Button buttonClass="calc-operators" eventHandler={calculateResult} value="=" />
    </div>
  );
};

export default Calculator;
