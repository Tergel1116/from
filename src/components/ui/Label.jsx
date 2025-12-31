import React from "react";

export const Label = ({ name }) => {
  return (
    <div>
      <div className="text-[14px] font-bold">
        <span className="black">{name}</span>{" "}
        <span className="text-red-500 font-bold">*</span>
      </div>
    </div>
  );
};
