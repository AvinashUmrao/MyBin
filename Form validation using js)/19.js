
const form = document.querySelector("#registrationForm");

form.addEventListener("submit", function (event) {
    let isValid = true;

    const loginId = document.querySelector("#loginId").value.trim();
    const email = document.querySelector("#email").value.trim();
    const name = document.querySelector("#name").value.trim();
    const homePage = document.querySelector("#homePage").value.trim();
    const aboutMe = document.querySelector("#aboutMe").value.trim();
    const notification = document.querySelector("#notification").checked;

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

    if (!notification) {
        alert("Please confirm receive notification");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
