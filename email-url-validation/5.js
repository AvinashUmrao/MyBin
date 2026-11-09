class RegistrationForm {
  constructor() {
    this.form = document.querySelector("#registrationForm");
    this.email = document.querySelector("#email");
    this.homepage = document.querySelector("#homepage");
    this.emailError = document.querySelector("#emailError");
    this.homepageError = document.querySelector("#homepageError");

    this.form.addEventListener("submit", (event) => {
      this.handleSubmit(event);
    });
  }

  validateEmail() {
    let emailRegex = /^\w+@\w+\.\w{2,}$/;
    return emailRegex.test(this.email.value.trim());
  }

  validateHomepage() {
   let urlRegex = /^https?:\/\/.+\..+$/;
    return urlRegex.test(this.homepage.value.trim());
  }

  handleSubmit(event) {
    event.preventDefault();

    let emailValid = this.validateEmail();
    let homepageValid = this.validateHomepage();

    this.emailError.textContent = emailValid
      ? ""
      : "Please enter a valid email address.";

    this.homepageError.textContent = homepageValid
      ? ""
      : "Please enter a valid URL (https://example.com).";

    if (emailValid && homepageValid) {
      alert("Registration Successful!");
      this.form.reset();
    }
  }
}

let registration = new RegistrationForm();