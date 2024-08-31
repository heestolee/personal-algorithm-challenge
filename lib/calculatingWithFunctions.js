/**
 *
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
 */

export {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
};

export function zero(arg) {
  return arg ? arg(0) : 0;
}
function one(arg) {
  return arg ? arg(1) : 1;
}
function two(arg) {
  return arg ? arg(2) : 2;
}
function three(arg) {
  return arg ? arg(3) : 3;
}
function four(arg) {
  return arg ? arg(4) : 4;
}
function five(arg) {
  return arg ? arg(5) : 5;
}
function six(arg) {
  return arg ? arg(6) : 6;
}
function seven(arg) {
  return arg ? arg(7) : 7;
}
function eight(arg) {
  return arg ? arg(8) : 8;
}
function nine(arg) {
  return arg ? arg(9) : 9;
}

function plus(right) {
  return function(left) {
    return left + right;
  };
}
function minus(right) {
  return function(left) {
    return left - right;
  };
}
function times(right) {
  return function(left) {
    return left * right;
  };
}
function dividedBy(right) {
  return function(left) {
    return Math.floor(left / right);
  };
}
