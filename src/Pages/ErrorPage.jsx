import React from 'react'
import { motion } from "framer-motion";
import errorImg from "../assets/images/favicon.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-7">
        <h1 className="text-[4gi0px] leading-[25.78px] text-transparent h-12  bg-clip-text bg-gradient-to-r from-[#1864FF] to-[#42AAFF] font-Eina01Bold md:text-[40px] md:leading-[30.47px]">
          showmeelove.
        </h1>
        <img src={errorImg} alt="face_icon" draggable={false} className="w-20" />

        <h1 className="text-[#FEFEFE] font-medium max-w-max mx-4 text-center font-jakarta">
          ERROR 404! <br /> page not found for legal reasons found, chief!
        </h1>
        <motion.a
          whileTap={{ scale: 0.9 }}
          className="text-[#FEFEFE] font-figtree p-2 outline-dashed outline-[#1864FF]"
          href="/"
        >
          Go to Home
        </motion.a>
      </div>
    </div>
  );
}

export default ErrorPage




