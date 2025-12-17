import React from "react";
import { Label } from ".";

export const DateInput = ({ placeholder, name, labelName, handleChange }) => {
  return (
    <div className="flex flex-col">
      <Label name="Date of birth" />

      <input
        className="h-[44px] w-[416px]  rounded-[8px]  border-[#CBD5E1] active:border-[#0CA5E9] border-[1px] p-[12px]"
        type="date"
        labelName="asdf"
        name="birthday"
        onChange={handleChange}
        // placeholder={placeholder}
      />
      <div className="relative top-[20px] flex  flex-col gap-[7px]">
        <Label name="Choose a file" />
        <input
          type="file"
          name="profile"
          labelName="asd"
          className="h-[180px] bg-gray-100 w-[416px] rounded-[6px] "
          onChange={handleChange}
        />
      </div>

      {/* <input type="password" /> */}
    </div>
  );
};
