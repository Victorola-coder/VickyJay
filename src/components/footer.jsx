import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Copyright, FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";

const Footer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mx-[30px] mt-[60px] pb-[20px] lg:pb-[50px] lg:mx-[76px] lg:mt-[150px]">
      {/* line */}
      <div className="lg:max-w-[13000px] lg:mx-[71px] h-[2px] mt-[63.37px] bg-[#0A1C20]"></div>
      <div className="mt-[63px] flex flex-col-reverse justify-start gap-5 md:gap-0 md:flex md:flex-row md:justify-between md:items-center ">
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row items-center lg:gap-[4px]">
            <span>
              <Copyright className="size-[18px] md:size-[20px]" />
            </span>
            <p className={`text-[#FFFFFF99] md:text-xl text-lg font-medium`}>
              Victorola
              <span className="text-[#FFFFFF] text-[14px] lg:text-base">
                {" "}
                2021 -
              </span>{" "}
              <span className="text-[#FFFFFF] text-[14px] lg:text-base">
                {new Date().getFullYear()}
              </span>
            </p>
          </div>
          <p className="text-[#FFFFFF99] transition-all duration-300 text-end text-sm lg:text-base mt-1">
            {time}
          </p>
        </div>
        <div className="mt-[10px] md:mt-[65px] flex justify-start items-center gap-[20px] md:gap-[40px]">
          <motion.a
            href="https://web.facebook.com/victortoluu"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <FbIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://twitter.com/HeyVickyJay"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <TwIcon
              fill="#FFFFFF99"
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/vickyjayox"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <IgIcon
              fill={`#FFFFFF99`}
              className={`w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/victor-olatunji-889568246"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <InIcon
              fill={`#FFFFFF99`}
              className="w-[30px] h-[30px] rounded-full border-[#FFFFFF99] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-gray-500"
            />
          </motion.a>
        </div>
      </div>

      {/* Shout out */}
      <div className="hidden  flex_ flex-col gap-2 items-start justify-center text-center font-medium text-[#FFFFFF99] text-xs *:max-w-[320px] *:md:max-w-[992px] md:text-[18px]">
        <h3>
          Inspiration -&nbsp;
          <Link
            target="_blank"
            rel="noreferrer noopener"
            to="https://www.pariola.dev/"
            className="text-white cursor-pointer"
            title="you might need internet to access this"
          >
            Pariola
          </Link>
        </h3>
        <h3>
          Design -&nbsp;
          <Link
            target="_blank"
            rel="noreferrer noopener"
            to="https://x.com/UI_Ninja_?s=09"
            className="text-white cursor-pointer"
            title="you might need internet to access this"
          >
            Chinemerem
          </Link>
        </h3>
      </div>
    </section>
  );
};

export default Footer;
