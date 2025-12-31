import React from "react";

import { Footer } from "../parts";

export const Success = ({ handlePrevious }) => {
  return (
    <div className="p-[10px]">
      <div>
        <img src="/Pineconelogo.png" alt="" className="h-[60px] w-[60px] " />
      </div>
      <div className="text-[26px] font-semibold">You're All Set 🔥</div>
      <div className="text-[18px] text-[#8E8E8E] ">
        We have received your submission. Thank you!
      </div>
      {/* <Footer
        // handleSubmit={handleSubmit}
        handlePrevious={handlePrevious}
        step={step}
        steps={steps}
      /> */}
      <button
        className="py-1 px-2 border-[1px] rounded-[6px] relative top-3 hover:cursor-pointer"
        onClick={handlePrevious}
      >
        Back
      </button>
    </div>
  );
};
