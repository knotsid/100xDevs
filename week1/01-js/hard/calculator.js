/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(result) {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Can't divide by 0");
    }
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // input validation
    if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
      throw new Error("Invalid expression");
    }

    // tokenize the exp
    const tokens = expression.match(/(\d+\.\d+|\d+|[+\-*/().])/g);

    if (!tokens) {
      throw new Error("Invalid expression");
    }

    // no evaluation = no value 
    this.result = 0;

    // tracking num nd op
    const numStack = [];
    const opStack = [];
    let currentOperation = "+";

    // helper fn
    const performOperation = (num1, num2, operation) => {
      switch (operation) {
        case "+":
          return num1 + num2;
        case "-":
          return num1 - num2;
        case "*":
          return num1 * num2;
        case "/":
          if (num2 === 0) {
            throw new Error("Can't divide by 0");
          }
          return num1 / num2;
        default:
          throw new Error("Invalid operation");
      }
    };

    // eval each token
    for (const token of tokens) {
      if (/(\d+\.\d+|\d+)/.test(token)) {
        const num = parseFloat(token);
        numStack.push(num);
      } else if ("+-*/".includes(token)) {
        // checking precedence
        while (
          opStack.length > 0 &&
          ["*", "/"].includes(opStack[opStack.length - 1])
        ) {
          const prevNum = numStack.pop();
          const prevOperation = opStack.pop();
          numStack[numStack.length - 1] = performOperation(
            numStack[numStack.length - 1],
            prevNum,
            prevOperation
          );
        }
        opStack.push(token);
      } else if (token === "(") {
        opStack.push(token);
      } else if (token === ")") {
        // Perform operations inside parentheses
        while (opStack[opStack.length - 1] !== "(") {
          const prevNum = numStack.pop();
          const prevOperation = opStack.pop();
          numStack[numStack.length - 1] = performOperation(
            numStack[numStack.length - 1],
            prevNum,
            prevOperation
          );
        }
        opStack.pop(); // Remove the "(" from the stack
      }
    }

    // Perform any remaining operations
    while (opStack.length > 0) {
      const prevNum = numStack.pop();
      const prevOperation = opStack.pop();
      numStack[numStack.length - 1] = performOperation(
        numStack[numStack.length - 1],
        prevNum,
        prevOperation
      );
    }

    // The final result is at the top of the numStack
    this.result = numStack[0];

    return this.result;
  }
}

module.exports = Calculator;