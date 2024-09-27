// import { SERVER_URL } from "../config.js"; // importing the config file
// script to handle registration of new users

const SERVER_URL = "http://localhost:5173/api/";
REGISTER_URL = `${SERVER_URL}auth/register`;

const registerButton = document.getElementById("registerButton");
registerButton.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const contact = document.getElementById("contact");
  const category = document.getElementById("category");
  const confirmPassword = document.getElementById("confirmPassword");
  const error = document.getElementById("error");

  if (password.value !== confirmPassword.value) {
    error.innerHTML = "Passwords do not match";
    return;
  }
  error.innerHTML = "";
  registerButton.disabled = true;
  const response = fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      contact: contact.value,
      category: category.value,
    }),
  });

      if (response.status === 200) {
      window.location.href = "/login";
      } else {
      error.innerHTML = "An error occurred";
      }
      registerButton.disabled = false;

}
