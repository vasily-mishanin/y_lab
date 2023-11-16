export function validateEmail(email: string) {
  if (!email) {
    return 'Required';
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return 'Enter valid email, please';
  }
}

export function validatePassword(password: string) {
  if (!password) {
    return 'Required';
  }

  if (password.length < 6) {
    return 'Min length is 6 characters';
  }

  // Minimum six characters, at least one letter, one number and one special character:
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  if (!passwordPattern.test(password)) {
    return 'Min. 6, at least: 1 letter, 1 number, 1 special char.';
  }
}
