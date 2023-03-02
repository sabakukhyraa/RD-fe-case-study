export const loginValidation = (formData) => {
  let temp = formData;
  if (!formData.email) {
    temp.emailValid = false;
    temp.errorMessages.email = "Email field should not be left blank!";
  }
  if (!formData.password) {
    temp.passwordValid = false;
    temp.errorMessages.password = "Password field should not be left blank!";
  }
  return temp;
};
