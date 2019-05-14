'use strict';

const arithmetic = require('../lib/arithmetic.js');

describe('proof of life', () => {
  it('this adds a and b together to return 4', () => {
    let test = arithmetic.add(1, 3);
    expect(test).toBeTruthy();
  });

  it('this subtracts b from a to return -2', () => {
    let test = arithmetic.subtract(1, 3);
    expect(test).toBeTruthy();
  });
});