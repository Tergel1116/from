import { isEmpty } from "./validation-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.lastName)) {
    errors.firstName = "Нэрээ оруулна уу";
  }
  if (isEmpty(formValues.firstName)) {
    errors.lastName = "Овгоо оруулна уу.";
  }
  if (isEmpty(formValues.username)) {
    errors.username = "Хэрэглэгчийн нэрээ оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepTwo = (formValues) => {
  const errors = {};
  if (isEmpty(formValues.email)) {
    errors.email = "meil ee oruul";
  }
  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "dugaar ee oruul";
  }
  if (isEmpty(formValues.password)) {
    errors.password = "pass ee oruul";
  }
  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword = "pass2 ee oruul";
  }
};
const isValid = Object.keys(errors).length === 0;

return { errors, isValid };

export const validateStepThree = (formValues) => {};
