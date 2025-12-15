// import { useState } from "react";
import React from "react";
import { layer } from "@/components/parts";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Header, Body, Footer } from "@/components";

export const Index = () => {
  return (
    <div className={inter.className}>
      <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="h-auto w-[490px] bg-white p-[32px] rounded-[8px] flex flex-col justify-between gap-[28px]">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Index;
