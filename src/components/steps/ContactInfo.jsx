import React from "react";
import { Label, Input, Pass, ErrorMessage, Header, Footer } from "@/components";

import { validateStepTwo } from "../utils/validators";

import { useState, useEffect } from "react";

import {
  saveFormValues,
  retrieveFormValues,
} from "@/components/utils/localStorage";

export const ContactInfo = ({
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  handleNext,
  handlePrevious,
  step,
  steps,
  setFormValues,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepTwo(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleNext();
      saveFormValues(formValues, step);
    }
  };
  // useEffect(() => {
  //   const valueFromLocalStorage = retrieveFormValues();
  // }, []);

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
          value={formValues.email}
          name="email"
          labelName="Email"
          placeholder="Your email"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.email}</p>
      </div>
      <div>
        <Input
          value={formValues.phoneNumber}
          name="phoneNumber"
          labelName="Phone number"
          placeholder="Your phone number"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.phoneNumber}</p>
      </div>
      <div>
        <Pass
          value={formValues.password}
          name="password"
          labelName="Password"
          placeholder="Your password"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.password}</p>
      </div>
      <div>
        <Pass
          value={formValues.confirmPassword}
          name="confirmPassword"
          labelName="Confirm password"
          placeholder="Confirm  password"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.confirmPassword}</p>
      </div>

      <Footer
        handleSubmit={handleSubmit}
        handlePrevious={handlePrevious}
        step={step}
        steps={steps}
      />
    </div>
  );
};
