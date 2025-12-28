import { isEmail, isEmpty, isPhoneNumber } from "./validation-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Нэрээ оруулна уу";
  }
  if (isEmpty(formValues.lastName)) {
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

  // EMAIL CHECK
  if (!isEmpty(formValues.email)) {
    if (!isEmail(formValues.email)) {
      errors.email = "Зөв мэйл хаяг оруулна уу";
    }
  } else {
    errors.email = "Мэйл хаяг оруулна уу";
  }

  // PHONE NUMBER CHECK
  if (!isEmpty(formValues.phoneNumber)) {
    if (!isPhoneNumber(formValues.phoneNumber)) {
      errors.phoneNumber = "8 оронтой дугаар оруулна уу.";
    }
  } else {
    errors.phoneNumber = "Утасны дугаараа оруулна уу.";
  }

  // PASSWORD CHECK
  if (!isEmpty(formValues.password)) {
    if (formValues.password.length < 6) {
      errors.password = "Нууц үг 6 аас дээш оронтой байх ёстой!";
    }
  } else {
    errors.password = "Нууц үгээ оруулна уу";
  }
  // PASSWORD CONFIRMATION CHECK
  if (!isEmpty(formValues.confirmPassword)) {
    if (formValues.confirmPassword !== formValues.password) {
      errors.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна.";
    }
  } else {
    errors.confirmPassword = "Нууц үгээ давтаж оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};
// BIRTHDAY CHECK
export const validateStepThree = (formValues) => {
  const errors = {};

  // if (isEmpty(formValues.birthday)) {
  //   errors.birthday = "tursun udruu oruul";
  // }
  if (isEmpty(formValues.birthday)) {
    errors.birthday = "Төрсөн он сараа оруулна уу";
  } else {
    const birthDate = new Date(formValues.birthday);
    const today = new Date();
    const checkDate = new Date();
    checkDate.setHours(0, 0, 0, 0);

    if (birthDate >= checkDate) {
      errors.birthday = "Та одоогийн он сарaас өмнөх он сар оруулна уу";
    } else {
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      if (age < 18) {
        errors.birthday = "Та 18 нас хүрсэн байх ёстой";
      }
    }
  }

  if (isEmpty(formValues.profile)) {
    // if (!isEmpty(formValues.birthday)) {
    //   if (formValues.birthday > 18) {
    //     errors.birthday = "Та 18 нас хүрсэн байх ёстой";
    //   }
    // } else {
    //   errors.birthday = "Төрсөн он сараа оруулна уу";
    // }
    // FILE CHECK
    errors.profile = "Файл хоосон байж болохгүй";
  }
  const isValid = Object.keys(errors).length === 0;
  return { errors, isValid };
};
