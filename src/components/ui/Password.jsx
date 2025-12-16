import React from "react";
import { Label } from ".";

export const Pass = ({ placeholder, name }) => {
  return (
    <div>
      <Label name={name} />

      <input
        className="h-[44px] w-[416px]  rounded-[8px]  border-[#CBD5E1] active:border-[#0CA5E9] border-[1px] p-[12px]"
        type="Password"
        placeholder={placeholder}
      />
      {/* <input type="password" /> */}
    </div>
  );
};
