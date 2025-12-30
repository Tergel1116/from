import React from "react";

export const Footer = ({ handleSubmit, handlePrevious, step, steps }) => {
  return (
    <div>
      <div className="flex gap-[25px]">
        {step >= 1 && (
          <button
            className="border-[1px] font-semibold relative left-[5px] top-[100px] hover:cursor-pointer border-gray-400 py-[10px] px-[12px] w-[128px] h-[44px] rounded-[6px]"
            onClick={handlePrevious}
          >
            Back
            <img
              src="vector (4).png"
              alt=""
              className="relative bottom-[17px] left-[10px]"
            />
          </button>
        )}
        {step >= 1 && (
          <button
            className="py-[10px] px-[12px] mt-[100px] hover:cursor-pointer transition-all duration-300 hover:opacity-80 flex gap-1 rounded-[6px] bg-black text-white w-[270px] font-bold items-center justify-center"
            onClick={handleSubmit}
          >
            Continue {step + 1} / {steps - 1}
            <img src="vector (3).png" alt="" className="ml-[5px] h-3 w-2" />
          </button>
        )}
        {step < 1 && (
          <button
            className="py-[10px] px-[12px] mt-[100px] hover:cursor-pointer transition-all duration-300 hover:opacity-80 flex gap-1 rounded-[6px] bg-black text-white w-[416px] font-bold items-center justify-center"
            onClick={handleSubmit}
          >
            Continue {step + 1} / {steps - 1}
            <img src="/vector (3).png" alt="" className="ml-[5px] h-3 w-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
