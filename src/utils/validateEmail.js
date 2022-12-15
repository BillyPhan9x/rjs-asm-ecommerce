function validateEmail(email) {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    String(email).toLowerCase()
  );
  if (!email) {
    return false;
  } else if (!regex) {
    return false;
  }
  return true;
}

export default validateEmail;
