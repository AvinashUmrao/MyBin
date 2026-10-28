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
                let value = button.dataset.value;
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
        if (this.expression === "") {
            return;
        }

        try {
            let result = eval(this.expression);

            if (!Number.isFinite(result)) {
                this.display.value = "Error";
                this.expression = "";
                return;
            }
            this.display.value = result;
            this.expression = result;
        }
        catch (error) {
            this.display.value = "Error";
            this.expression = "";
        }
    }
}

let calculator = new Calculator();