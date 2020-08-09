function sayHello(name, age) {
  return `Hello ${name} you are ${age} years old`;
}
const greetNamujinju = sayHello("Namujinju", 28);

console.log(greetNamujinju);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(5, 6);
const minus = calculator.minus(5, 6);
const multiply = calculator.multiply(5, 6);
const divide = calculator.divide(5, 6);
const power = calculator.power(5, 6);

console.log(`plus: ${plus}`);
console.log(`minus: ${minus}`);
console.log(`multiply: ${multiply}`);
console.log(`divide: ${divide}`);
console.log(`power: ${power}`);
