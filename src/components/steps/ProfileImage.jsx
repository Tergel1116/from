import React from "react";

import { Header, Footer } from "@/components/parts";
import { DateInput } from "@/components/ui";

export const ProfileImage = () => {
  return (
    <div>
      <Header />
      <div className="mt-[30px]">
        <DateInput name="Date of birth" />
        <Footer />
      </div>
    </div>
  );
};
