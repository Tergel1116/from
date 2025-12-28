import React from "react";
import { useState, useEffect } from "react";
import { Header, Footer } from "@/components/parts";
import { DateInput } from "@/components/ui";
import { validateStepThree } from "../utils/validators";
import {
  saveFormValues,
  retrieveFormValues,
  deleteFormValue,
} from "@/components/utils/localStorage";
export const ProfileImage = ({
  handleChange,
  handlePrevious,
  handleNext,
  step,
  steps,
  formValues,
  formErrors,
  setFormErrors,
  inputRef,
  isDragging,
  setIsDragging,
  setFormValues,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepThree(formValues);

    setFormErrors(errors);

    if (isValid) {
      saveFormValues(formValues, step);
      deleteFormValue(formValues, step);
      handleNext();
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
    <div>
      <Header />
      <div className="mt-[30px]">
        <DateInput
          name="birthday"
          value={formValues.birthday}
          handleChange={handleChange}
          error={formErrors.birthday}
          inputRef={inputRef}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          formValues={formValues}
          setFormValues={setFormValues}
          profileError={formErrors.profile}
          setFormErrors={setFormErrors}
          // errors={errors}
        />
        {/* <p className="text-red-600 text-[12px]">{formErrors.birthday}</p> */}
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
