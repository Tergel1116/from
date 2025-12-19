import { useState, useRef } from "react";
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
  const [step, setstep] = useState(2);

  // STEPS FUNCTION
  const steps = [PrivateInfo, ContactInfo, ProfileImage, Success];
  const Container = steps[step];

  // const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];

  // USEREF
  const inputRef = useRef();

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

  // DRAG AND DROP FUNCTION STATE
  const [isDragging, setIsDragging] = useState(false);

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
            handlePrevious={handlePrevious}
            step={step}
            steps={steps.length}
            inputRef={inputRef}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            setFormValues={setFormValues}
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Index;
