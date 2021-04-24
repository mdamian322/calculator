import operations from '../operations'
describe ('calculator operations', () => {
  it('calculates sum of two numbers', () => {
    expect(operations.add(1, 2)).toBe(3)
  });

  test('substract two numbers', () => {
    expect(operations.subtract(3, 2)).toBe(1)
  });

  test('multiply two numbers', () => {
    expect(operations.multiply(3, 2)).toBe(6)
  });
})

