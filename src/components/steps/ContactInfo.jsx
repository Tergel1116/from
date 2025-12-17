import React from "react";
import { Label, Input, Pass, ErrorMessage, Header, Footer } from "@/components";

import { validateStepTwo } from "../utils/validators";

export const ContactInfo = ({
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  handleNext,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepTwo(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleNext();
    }
  };
  return (
    <div className="flex flex-col gap-[20px]">
      <Header />

      <Input name="email" labelName="Email" placeholder="Your email" />
      <p className="text-red-600 text-[12px]">{formErrors.firstName}</p>
      <Input
        name="phoneNumber"
        labelName="Phone number"
        placeholder="Your phone number"
      />
      <p className="text-red-600 text-[12px]">{formErrors.firstName}</p>
      <Pass name="password" labelName="Password" placeholder="Your password" />
      <p className="text-red-600 text-[12px]">{formErrors.firstName}</p>
      <Pass
        name="confirmPassword"
        labelName="Confirm password"
        placeholder="Confirm  password"
      />
      <p className="text-red-600 text-[12px]">{formErrors.firstName}</p>
      {/* 
      <input
        className="h-[44px] w-[416px]  rounded-[8px]  border-[#CBD5E1] active:border-[#0CA5E9] border-[1px] p-[12px]"
        type="password"
        name="Confirm password"
        placeholder="Confirm password"
      /> */}

      <Footer />
    </div>
  );
};
