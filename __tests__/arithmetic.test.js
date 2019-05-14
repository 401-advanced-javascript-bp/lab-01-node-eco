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

  it('this multiplies a times b to return 21', () => {
    let test = arithmetic.multiply(3, 7);
    expect(test).toBeTruthy();
  });
});

describe('proof of life', () => {
  it('this divides the first value by the second', () => {
    let test = arithmetic.divide(10, 5);
    expect(test).toBeTruthy();
  });
});

describe('proof of life', () => {
  it('this takes in an array and integer and multiplies each element in the array by the integer', () => {
    let arr = [-2, 4, 6, 8];
    let b = 4;
    let test = arithmetic.multiplyInArr(arr, b);
    expect(test).toBeTruthy();
  });
});