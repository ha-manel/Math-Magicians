import calculate from '../logic/calculate';

describe('Unit tests of calculate.js', () => {
  test('testing operation', () => {
    const testObj = {
      next: '5',
      operation: null,
      total: 0,
    };
    const calculation = calculate(testObj, 'x');
    expect(calculation.operation).toEqual('x');
  });

  test('testing total', () => {
    const testObj = {
      next: '2',
      operation: 'x',
      total: '5',
    };
    const calculation = calculate(testObj, '=');
    expect(calculation.total).toEqual('10');
  });
});
