'use strict';

const greet = require('../lib/greet.js');

describe('proof of life', () => {
  let test = greet.sayHello('John');
  it('return the user name when the name provided is a string', () => {
    expect(test).toBeTruthy();
  });
});