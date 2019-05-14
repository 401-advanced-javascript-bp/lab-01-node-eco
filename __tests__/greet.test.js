'use strict';

const greet = require('../lib/greet.js');

describe('proof of life', () => {
  let test = greet.sayHello('John');
  it(`return a greeting to the user John when the name provided is a string, for example, 'hello John'`, () => {
    expect(test).toBeTruthy();
  });
});