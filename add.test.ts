import { adder } from './add';

describe('add()', () => {
  it('adds two numbers', () => {
    expect(adder(1, 2)).toEqual(3);
  });
});
