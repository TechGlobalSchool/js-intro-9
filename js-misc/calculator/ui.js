// Wrap your whole module in IIFE

const UIModule = (function () {
  // All your calculations goes here

  function getNum1() {
    const num1 = prompt("Provide num1");
    return num1;
  }

  function getOperator() {
    const operator = prompt("Provide operator +, -, *, /");
    if(['+', '-'].includes(operator)) {
      return operator;
    } else {
      throw Error('Operator is invalid. Please provide on of + - * /')
    }
  }

  return {
    getNum1,
    getOperator
  };
})();
