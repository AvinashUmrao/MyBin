
let firstName = prompt("Enter your first name:");

if (firstName !== null) {
    firstName = firstName.trim();
}

let lastName = prompt("Enter your last name:");

if (lastName !== null) {
    lastName = lastName.trim();
}

if (!firstName || !lastName) {
    alert("Please enter both names.");
} else {
    let message = "Hello " + firstName + " " + lastName + ".";

    alert(message);
    document.querySelector("#message").textContent = message;
}
