'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a+b;
};

arithmetic.subtract = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a-b;
};

arithmetic.multiply = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number') { return null;}
  return a*b;
};

arithmetic.divide = function (a, b) {
  if( typeof a !== 'number' || typeof b !== 'number' || b === 0) { return null;}
  return a/b;
};

arithmetic.multiplyInArr = function (arr, b){
  let i = 0;
  if( typeof arr[i] !== 'number' || typeof b !== 'number'){ return null; }
  let result = [];
  for(let i = 0; i < arr.length; i++){
    let newVal = arr[i] * b;
    result.push(newVal);
  }
  return result;
};
