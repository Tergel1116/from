import React from "react";
import { Label } from ".";

export const Pass = ({ placeholder, name, labelName, handleChange, value }) => {
  return (
    <div>
      <Label name={labelName} />

      <input
        className="h-[44px] w-[416px]  rounded-[8px]  border-[#CBD5E1] active:border-[#0CA5E9] border-[1px] p-[12px]"
        type="password"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {/* <input type="password" /> */}
    </div>
  );
};
