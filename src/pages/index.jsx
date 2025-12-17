import { useState } from "react";
import {
  ContactInfo,
  PrivateInfo,
  ProfileImage,
  Success,
} from "@/components/steps";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
import { initialValues } from "@/components/constants/initial";

export const Index = () => {
  const [step, setstep] = useState(0);

  // STEPS FUNCTION
  const steps = [PrivateInfo, ContactInfo, ProfileImage, Success];
  const Container = steps[step];

  // const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];

  // ERROR MESSAGE FUNCTION
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  // console.log(formValues);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormValues((previous) => ({ ...previous, [name]: value }));
    setFormErrors((previous) => ({ ...previous, [name]: "" }));
  };

  // NEXT PAGE , CONTINUE BUTTON FUNCTION
  const handleNext = () => {
    if (step < steps.length - 1) {
      setstep(step + 1);
    }
  };

  // PREVIOUS PAGE, BACK BUTTON FUNCTION
  const handlePrevious = () => {
    if (step > 0) {
      setstep(step - 1);
    }
  };

  return (
    <div className={inter.className}>
      <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 2 }}
          className="h-auto w-[490px] bg-white p-[32px] rounded-[8px] flex flex-col justify-between gap-[28px]"
        >
          <Container
            handleChange={handleChange}
            formValues={formValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            handleNext={handleNext}
          />
          <div className="">
            {step !== 3 && step >= 1 && (
              <button
                className="py-[10px] px-[12px] mt-[20px] hover:cursor-pointer transition-all duration-300 hover:opacity-80 flex gap-1 rounded-[6px] bg-black text-white w-[280px] relative left-[145px] top-[45px] font-bold items-center justify-center"
                onClick={handleNext}
              >
                Continue {step + 1}/{steps.length - 1}{" "}
                <img src="vector (3).png" alt="" className="ml-[5px] h-3 w-2" />
              </button>
            )}
            {step == 0 && (
              <button
                className="py-[10px] px-[12px] mt-[100px] hover:cursor-pointer transition-all duration-300 hover:opacity-80 flex gap-1 rounded-[6px] bg-black text-white w-[416px] font-bold items-center justify-center"
                // onClick={handleNext}
                onClick={handleNext}
              >
                Continue {step + 1}/{steps.length - 1}
                <img src="vector (3).png" alt="" className="ml-[5px] h-3 w-2" />
              </button>
            )}
            {step >= 1 && step !== 4 && (
              <button
                className="border-[1px] relative left-[5px] hover:cursor-pointer border-gray-400 py-[10px] px-[12px] w-[128px] h-[44px] rounded-[6px]"
                onClick={handlePrevious}
              >
                back{" "}
                <img
                  src="vector (4).png"
                  alt=""
                  className="relative bottom-[17px] left-[10px]"
                />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Index;
