import React from "react";
import { Label, Input, Pass, ErrorMessage, Header, Footer } from "@/components";
export const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <Header />

      <Input name="Email" placeholder="Your email" />

      <Input name="Phone number" placeholder="Your phone number" />

      <Pass name="Password" placeholder="Your password" />

      <Pass name="Confirm password" placeholder="Confirm  password" />
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
