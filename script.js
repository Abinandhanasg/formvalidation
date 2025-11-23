function checkPasswordStrength() {
  let password = document.getElementById("password").value;
  let strengthText = document.getElementById("passwordStrength");

  let hasUpper = /[A-Z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSpecial = /[!@#$%^&*]/.test(password);
  let minLength = password.length >= 8;

  let score = hasUpper + hasNumber + hasSpecial + minLength;

  if (!password) {
    strengthText.innerHTML = "";
  } else if (score <= 1) {
    strengthText.innerHTML = "Weak Password";
    strengthText.style.color = "red";
  } else if (score <= 3) {
    strengthText.innerHTML = "Medium Strength";
    strengthText.style.color = "orange";
  } else {
    strengthText.innerHTML = "Strong Password";
    strengthText.style.color = "#00ff9d";
  }
}

function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let terms = document.getElementById("terms").checked;

  let valid = true;

  if (name.length < 5) {
    document.getElementById("nameError").innerText = "Name must be at least 5 characters.";
    valid = false;
  }

  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    valid = false;
  }

  if (phone.length !== 10) {
    document.getElementById("phoneError").innerText = "Enter a valid 10-digit number.";
    valid = false;
  }

  if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[!@#$%^&*]/.test(password)
  ) {
    document.getElementById("passwordError").innerText =
      "Password must include uppercase, number, special character & 8+ characters.";
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
    valid = false;
  }

  if (!terms) {
    document.getElementById("termsError").innerText = "You must accept the terms.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    window.location.href = "success.html";  // WORKING REDIRECT
  }

  return false;
}
