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

// import { Header, Body, Footer } from "@/components";

export const Index = () => {
  const [step, setstep] = useState(0);

  // const Container = [ContactInfo, PrivateInfo, ProfileImage, Success][step];
  const steps = [PrivateInfo, ContactInfo, ProfileImage, Success];
  const Container = steps[step];

  const handleNext = () => {
    // setstep(step + 1);
    if (step < steps.length - 1) {
      setstep(step + 1);
    }
  };

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
          animate={{ opacity: 1, x: -100 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 1.5 }}
          className="h-auto w-[490px] bg-white p-[32px] rounded-[8px] flex flex-col justify-between gap-[28px]"
        >
          <Container />
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

// import { useState } from "react";
// import {
//   ContactInfo,
//   PrivateInfo,
//   ProfileImage,
//   Success,
// } from "@/components/steps";
// import { Inter } from "next/font/google";
// import { AnimatePresence, motion } from "framer-motion";

// const inter = Inter({ subsets: ["latin"] });

// export const Index = () => {
//   const [step, setStep] = useState(0);
//   const steps = [PrivateInfo, ContactInfo, ProfileImage, Success];
//   const Container = steps[step];

//   const handleNext = () => {
//     if (step < steps.length - 1) setStep(step + 1);
//   };

//   const handlePrevious = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   // Animation variants
//   const variants = {
//     enter: (direction) => ({
//       x: 300, // баруун талаас
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: -300, // зүүн тал руу гарч явна
//       opacity: 0,
//     }),
//   };

//   return (
//     <div className={inter.className}>
//       <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
//         <AnimatePresence mode="wait" custom={step}>
//           <motion.div
//             key={step}
//             custom={step}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.5 }}
//             className="h-auto w-[490px] bg-white p-[32px] rounded-[8px] flex flex-col justify-between gap-[28px] relative"
//           >
//             {/* Step Content */}
//             <Container />

//             {/* Buttons */}
//             <div className="flex justify-between items-center mt-4">
//               {step > 0 && (
//                 <button
//                   className="border-[1px] border-gray-400 py-[10px] px-[12px] w-[128px] h-[44px] rounded-[6px] hover:opacity-80 transition"
//                   onClick={handlePrevious}
//                 >
//                   Back
//                   <img
//                     src="vector (4).png"
//                     alt=""
//                     className="inline-block ml-2 relative bottom-[2px]"
//                   />
//                 </button>
//               )}

//               {step < steps.length - 1 && (
//                 <button
//                   className="py-[10px] px-[12px] bg-black text-white font-bold rounded-[6px] w-[280px] flex items-center justify-center gap-1 hover:opacity-80 transition"
//                   onClick={handleNext}
//                 >
//                   Continue {step + 1}/{steps.length - 1}
//                   <img
//                     src="vector (3).png"
//                     alt=""
//                     className="ml-[5px] h-3 w-2"
//                   />
//                 </button>
//               )}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default Index;
