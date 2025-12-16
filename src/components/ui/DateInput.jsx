import React from "react";
import { Label } from ".";

export const DateInput = ({ placeholder, name }) => {
  return (
    <div className="flex flex-col">
      <Label name={name} />

      <input
        className="h-[44px] w-[416px]  rounded-[8px]  border-[#CBD5E1] active:border-[#0CA5E9] border-[1px] p-[12px]"
        type="date"
        placeholder={placeholder}
      />
      <div className="relative top-[20px] flex  flex-col gap-[7px]">
        <Label name="Profile image" />
        <input
          type="file"
          className="h-[180px] bg-gray-100 w-[416px] rounded-[6px] "
        />
      </div>

      {/* <input type="password" /> */}
    </div>
  );
};
