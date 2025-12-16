import React from "react";
import { Footer, Header } from "../parts";
import { Input, Label } from "../ui";

export const PrivateInfo = ({ placeholder }) => {
  return (
    <div className="flex flex-col gap-[20px]">
      <Header />

      <Input name="First name" placeholder="Your first name" />

      <Input name="Last name" placeholder="Your last name" />

      <Input name="Username" placeholder="Your username" />

      <Footer />
    </div>
  );
};
