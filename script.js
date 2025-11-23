// Clear error text
function clearError(id) {
  document.getElementById(id).innerText = "";
}

// Password Strength Checker
function checkPasswordStrength() {
  let password = document.getElementById("password").value;
  let strengthText = document.getElementById("passwordStrength");

  let hasUpper = /[A-Z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  let minLength = password.length >= 8;

  let strength = hasUpper + hasNumber + hasSpecial + minLength;

  if (password.length === 0) strengthText.innerText = "";
  else if (strength <= 1) {
    strengthText.innerText = "Weak Password";
    strengthText.style.color = "red";
  }
  else if (strength <= 3) {
    strengthText.innerText = "Medium Strength";
    strengthText.style.color = "orange";
  }
  else {
    strengthText.innerText = "Strong Password";
    strengthText.style.color = "#00ff9d";
  }
}

// Main Validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let terms = document.getElementById("terms").checked;

  let valid = true;

  // NAME
  if (name.length < 5) {
    document.getElementById("nameError").innerText = "Name must be at least 5 characters.";
    valid = false;
  }

  // EMAIL
  if (!email.includes("@")) {
    document.getElementById("emailError").innerText = "Enter a valid email.";
    valid = false;
  }

  // PHONE
  if (phone.length !== 10 || phone === "123456789") {
    document.getElementById("phoneError").innerText = "Enter a valid 10-digit number.";
    valid = false;
  }

  // PASSWORD
  if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[!@#$%^&*(),.?":{}|<>]/.test(password)
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
    document.getElementById("termsError").innerText = "You must agree to the terms.";
    valid = false;
  }


  if (valid) {
    alert("Form submitted successfully!");
    window.location.href = "calculator.html"; 
  }

  return false;
}
