//calculator.js

function add(a, b) {
  const result = a + b;
  console.log(`Výsledek sčítání ${a} + ${b} = ${result}`);
}

function subtract(a, b) {
  const result = a - b;
  console.log(`Výsledek odčítání ${a} - ${b} = ${result}`);
}

const multiply = (a, b) => {
  const result = a * b;
  console.log(`Výsledek násobení ${a} * ${b} = ${result}`);
};

function divide(a, b) {
  const result = a / b;
  console.log(`Výsledek dělení ${a} / ${b} = ${result}`);
}

add(15, 45);
subtract(974, 541);
multiply(32, 7);
divide(10, 3);
