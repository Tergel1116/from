import React from "react";
import { Label } from ".";

{
  /* <Label labelName={name} />; */
}
export const Input = ({ placeholder, name, labelName, handleChange }) => {
  return (
    <div>
      <Label name={labelName} />

      <input
        className="h-[44px] w-[416px]  rounded-[8px]  border-[#CBD5E1] active:border-[#0CA5E9] border-[1px] p-[12px]"
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
      {/* <input type="password" /> */}
    </div>
  );
};
