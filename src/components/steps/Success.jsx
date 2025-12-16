import React from "react";

export const Success = () => {
  return (
    <div className="p-[10px]">
      <div>
        <img src="pineconelogo.png" alt="" className="h-[60px] w-[60px] " />
      </div>
      <div className="text-[26px] font-semibold">You're All Set 🔥</div>
      <div className="text-[18px] text-[#8E8E8E] ">
        We have received your submission. Thank you!
      </div>
    </div>
  );
};
