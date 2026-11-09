class NameGreeter {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.message = "";
  }

  getNames() {
    this.firstName = prompt("Enter your first name:");

    if (this.firstName !== null) {
        this.firstName = this.firstName.trim();
    }

    this.lastName = prompt("Enter your last name:");
    if (this.lastName !== null) {
        this.lastName = this.lastName.trim();
    }
  }

    showMessage() {
      if (!this.firstName || !this.lastName) {
        alert("Please enter both names.");
      }
      else {
        this.message = "Hello " + this.firstName + " " + this.lastName + ".";
        alert(this.message);
        document.querySelector("#message").textContent = this.message;
      }
    }

    start() {
      this.getNames();
      this.showMessage();
    }
}
let greeter = new NameGreeter();
greeter.start();