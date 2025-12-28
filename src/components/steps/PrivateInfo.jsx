import React, { useEffect } from "react";
import { Footer, Header } from "../parts";
import { Input, Label } from "../ui";

import { validateStepOne } from "../utils/validators";

import {
  saveFormValues,
  retrieveFormValues,
} from "@/components/utils/localStorage";

export const PrivateInfo = ({
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  steps,
  step,
  handleNext,
  handlePrevious,
  setFormValues,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleNext();
      saveFormValues(formValues, step);
    }
  };
  useEffect(() => {
    const valueFromLocalStorage = retrieveFormValues();
    if (valueFromLocalStorage) {
      setFormValues(valueFromLocalStorage);
    }
  }, []);

  return (
    <div className="flex flex-col gap-[20px]">
      <Header />

      <div>
        <Input
          value={formValues.firstName}
          name="firstName"
          labelName="First name"
          placeholder="Your first name"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.firstName}</p>
      </div>

      <div>
        <Input
          value={formValues.lastName}
          name="lastName"
          labelName="Last name"
          placeholder="Your last name"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.lastName}</p>
      </div>
      <div>
        <Input
          value={formValues.username}
          name="username"
          labelName="Username"
          placeholder="Your username"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.username}</p>
      </div>

      <Footer
        handleSubmit={handleSubmit}
        step={step}
        handlePrevious={handlePrevious}
        steps={steps}
      />
    </div>
  );
};
