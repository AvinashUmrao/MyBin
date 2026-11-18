class Calculator {
  constructor() {
    this.display = document.getElementById("display");
    this.buttons = document.querySelectorAll("button");
    this.expression = "";
    this.init();
  }

  init() {
    this.buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value === "C") {
          this.expression = "";
          this.display.value = "0";
          return;
        }

        if (value === "=") {
          this.calculate();
          return;
        }

        this.expression += value;
        this.display.value = this.expression;
      });
    });
  }

  calculate() {
    if (this.expression === "") return;

    let result;

    try {
      const match = this.expression.match(/^([0-9.]+)([+\-*/])([0-9.]+)$/);

      if (!match || isNaN(Number(match[1])) || isNaN(Number(match[3]))) {
        throw new Error("Invalid expression");
      }

      const a = Number(match[1]);
      const operator = match[2];
      const b = Number(match[3]);

      if (operator === "+") result = a + b;
      else if (operator === "-") result = a - b;
      else if (operator === "*") result = a * b;
      else if (operator === "/") {
        if (b === 0) throw new Error("Cannot divide by zero");
        result = a / b;
      }

      if (!Number.isFinite(result)) {
        throw new Error("Invalid result");
      }

      this.display.value = result;
      this.expression = String(result);
    }
    catch (error) {
      this.display.value = "Error";
      this.expression = "";
    }
  }
}

const calculator = new Calculator();