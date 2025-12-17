import React from "react";
import { Footer, Header } from "../parts";
import { Input, Label } from "../ui";

import { validateStepOne } from "../utils/validators";

export const PrivateInfo = ({
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
  handleNext,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepOne(formValues);

    setFormErrors(errors);

    if (isValid) {
      handleNext();
    }
  };
  // console.log(formErrors);

  return (
    <div className="flex flex-col gap-[20px]">
      <Header />

      <div>
        <Input
          name="firstName"
          labelName="First name"
          placeholder="Your first name"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.firstName}</p>
      </div>

      <div>
        <Input
          name="lastName"
          labelName="Last name"
          placeholder="Your last name"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.lastName}</p>
      </div>
      <div>
        <Input
          name="username"
          labelName="Username"
          placeholder="Your username"
          handleChange={handleChange}
        />
        <p className="text-red-600 text-[12px]">{formErrors.username}</p>
      </div>
      <button
        onClick={handleSubmit}
        className="py-1 px-2 bg-amber-500 hover:cursor-pointer"
      >
        Submit
      </button>

      <Footer />
    </div>
  );
};
