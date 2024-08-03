// Wrap your whole module in IIFE

const UIModule = (function () {
  function getNumberOneFromUser() {
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
  // Keep adding more functions

  return {
    getNumberOneFromUser,
    getOperator
  };
})();
