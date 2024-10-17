export function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

export function isValidPassword(password) {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
}

export function checkPasswordStrength(password, confirmPassword) {
  let message = [];

  // Check if password is entered
  if (!password) {
    return ["Please enter a password"];
  }

  // Check if confirmPassword is entered
  if (!confirmPassword) {
    return ["Please confirm your password"];
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return ["Passwords do not match"];
  }

  // Check for length of at least 8 characters
  if (password.length < 8) {
    message.push("\n- At least 8 characters.");
  }

  // Check for lowercase letters
  if (!/[a-z]/.test(password)) {
    message.push("\n- At least one lowercase letter.");
  }

  // Check for uppercase letters
  if (!/[A-Z]/.test(password)) {
    message.push("\n- At least one uppercase letter.");
  }

  // Check for digits
  if (!/\d/.test(password)) {
    message.push("\n- At least one number.");
  }

  // Check for special characters
  if (!/[@$!%*?&]/.test(password)) {
    message.push("\n- At least one special character (@, $, !, %, *, ?, &).");
  }

  // If the password meets all criteria, return an empty message (valid password)
  if (message.empty) {
    return [];
  }

  return ["Your password is missing the following", ...message];
}
