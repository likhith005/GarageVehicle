// Function to display a custom alert message
function showAlert(message) {
  var alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.style.color = "red";
  alertBox.style.fontWeight = "bold";
  alertBox.style.fontSize = "16px";
  alertBox.style.marginBottom = "10px";
  alertBox.style.textAlign = "center";
  alert(message);
}

// Function to validate the signup form
function validateSignupForm() {
  // Clear previous error messages
  clearErrors();

  // Get form inputs
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform validation
  var isValid = true;

  if (!validateFirstName(firstName)) {
    document.getElementById("firstNameError").textContent = "First name should contain only alphabetic characters.";
    isValid = false;
  }

  if (!validateLastName(lastName)) {
    document.getElementById("lastNameError").textContent = "Last name should contain only alphabetic characters.";
    isValid = false;
  }

  if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (!validatePassword(password)) {
    document.getElementById("passwordError").textContent = "Password should be at least 5 characters long and contain at least one special character.";
    isValid = false;
  }

  // Form validation successful
  if (isValid) {
    showAlert("Signup form submitted successfully!");
  }

  return isValid;
}

// Function to validate the login form
function validateLoginForm() {
  // Clear previous error messages
  clearErrors();

  // Get form inputs
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;

  // Perform validation
  var isValid = true;

  if (!validateEmail(loginEmail)) {
    document.getElementById("loginEmailError").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (!validatePassword(loginPassword)) {
    document.getElementById("loginPasswordError").textContent = "Password should be at least 5 characters long and contain at least one special character.";
    isValid = false;
  }

  // Form validation successful
  if (isValid) {
    showAlert("Login form submitted successfully!");
  }

  return isValid;
}

// Function to clear error messages
function clearErrors() {
  var errorElements = document.getElementsByClassName("error");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = "";
  }
}

// Function to validate first name
function validateFirstName(firstName) {
  var regex = /^[a-zA-Z]+$/;
  return regex.test(firstName);
}

// Function to validate last name
function validateLastName(lastName) {
  var regex = /^[a-zA-Z]+$/;
  return regex.test(lastName);
}

// Function to validate email
function validateEmail(email) {
  var regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

// Function to validate password
function validatePassword(password) {
  var regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,}$/;
  return regex.test(password);
}

// Event listener for the signup form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  validateSignupForm();
});

// Event listener for the login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  validateLoginForm();
});
