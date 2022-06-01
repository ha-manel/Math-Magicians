import operate from '../logic/operate';

describe('testing the operate function', () => {
  test('addition test', () => {
    expect(operate(10, 29, '+')).toEqual('39');
  });
  test('division test', () => {
    expect(operate(10, 2, '÷')).toEqual('5');
  });
  test('multiplication test', () => {
    expect(operate(10, 29, 'x')).toEqual('290');
  });
  test('modulo test', () => {
    expect(operate(9, 4, '%')).toEqual('1');
  });
});
