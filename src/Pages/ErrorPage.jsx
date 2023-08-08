import { motion } from "framer-motion";
import errorImg from "../assets/images/favicon.png";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full gap-7">
        <h1 className="text-[40px] leading-[25.78px] text-transparent h-12  bg-clip-text bg-gradient-to-r from-[#1ED760] to-[#069447] font-clash font-bold md:text-[40px] md:leading-[30.47px]">
         VickyJay
        </h1>
        <img src={errorImg} alt="face_icon" draggable={false} className="w-20" />

        <h1 className="text-[#FEFEFE] font-medium max-w-max mx-4 text-center font-pop">
          Nothing for you, chief!😝
        </h1>
        <motion.a
          whileTap={{ scale: 0.9 }}
          className="text-[#FEFEFE] font-clash p-2 outline-dashed outline-[#1ED760]"
          href="/"
        >
          Go back home
        </motion.a>
      </div>
    </div>
  );
}

export default ErrorPage




