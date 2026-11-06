class NumberValidator {
  constructor(form, input, result) {
    this.form = form;
    this.input = input;
    this.result = result;

    this.form.addEventListener("submit", (event) => {
        this.handleSubmit(event);
    });
  }

  validateNumber() {
    let value = this.input.value.trim();
    if (value === "" || isNaN(value)) {
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    let isValid = this.validateNumber();
      this.result.value = isValid;
        if (!isValid) {
          event.preventDefault();
        }
    }
}

let form = document.querySelector("#numberForm");
let input = document.querySelector("#number");
let result = document.querySelector("#result");

const obj = new NumberValidator(form, input, result);