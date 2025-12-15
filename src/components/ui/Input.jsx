import React from "react";

export const Input = ({ placeholder }) => {
  const name = "first name";
  //   const placeHolder = "Your " + `${name}`;
  return (
    <div>
      <input
        className="h-[44px] w-[416px]  rounded-[8px]  border-[#CBD5E1] active:border-[#0CA5E9] border-[1px] p-[12px]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
