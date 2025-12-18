import React from "react";

import { Header, Footer } from "@/components/parts";
import { DateInput } from "@/components/ui";
import { validateStepThree } from "../utils/validators";

export const ProfileImage = ({
  handleChange,
  handlePrevious,
  handleNext,
  step,
  steps,
  formValues,
  formErrors,
  setFormErrors,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepThree(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleNext();
    }
  };
  return (
    <div>
      <Header />
      <div className="mt-[30px]">
        <DateInput
          name="birthday"
          value={formValues.birthday}
          handleChange={handleChange}
          error={formErrors.birthday}
        />
        <p className="text-red-600 text-[12px]">{formErrors.birthday}</p>
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
