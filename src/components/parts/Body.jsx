import React from "react";
import { Label, Input, ErrorMessage } from "@/components";

export const Body = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-2">
        <Label name="First name" />
        <Input placeholder="Your first name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label name="Last name" />
        <Input placeholder="Your last name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label name="Username" />
        <Input placeholder="Your username" />
      </div>
      <ErrorMessage />
    </div>
  );
};
// export default Body;
