
class FormValidator {
  constructor(form) {
    this.form = form;

    this.loginId = form.querySelector("#loginId");
    this.email = form.querySelector("#email");
    this.name = form.querySelector("#name");
    this.homePage = form.querySelector("#homePage");
    this.aboutMe = form.querySelector("#aboutMe");
    this.notification = form.querySelector("#notification");

    this.form.addEventListener("submit", (event) => {
        this.handleSubmit(event);
    });
  }

  validate() {
    let isValid = true;

    const loginId = this.loginId.value.trim();
    const email = this.email.value.trim();
    const name = this.name.value.trim();
    const homePage = this.homePage.value.trim();
    const aboutMe = this.aboutMe.value.trim();

    if (loginId === "") {
        alert("Login Id can't be empty");
        isValid = false;
    }

    if (email === "") {
        alert("Email can't be empty");
        isValid = false;
    }

    if (name === "") {
        alert("Name can't be empty");
        isValid = false;
    }

    if (homePage === "") {
        alert("Home Page can't be empty");
        isValid = false;
    }

    if (aboutMe === "") {
        alert("About me can't be empty");
        isValid = false;
    } else if (aboutMe.length < 50) {
        alert("About me must contain at least 50 characters");
        isValid = false;
    }

    if (!this.notification.checked) {
        alert("Please confirm receive notification");
        isValid = false;
    }

    return isValid;
  }

    handleSubmit(event) {
        let isValid = this.validate();

        if (isValid == false) {
            event.preventDefault();
        }
    }
}

const form = document.querySelector("#registrationForm");
const validator = new FormValidator(form);
