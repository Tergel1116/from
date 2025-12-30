import React from "react";

export const Header = () => {
  return (
    <div>
      <div>
        <img src="./pineconelogo.png" alt="" className="h-[60px] w-[60px]" />
      </div>
      <div className="text-[26px] font-semibold  text-shadow-[0px_4px_4px_gray]">
        Join Us! 😎
      </div>
      <div className="text-[18px] text-[#8E8E8E]">
        Please provide all current information accurately.
      </div>
    </div>
  );
};

export default Header;
