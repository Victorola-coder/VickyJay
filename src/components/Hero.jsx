import { motion } from "framer-motion";
import { FbIcon, IgIcon, InIcon, TwIcon } from "../assets/Icons";
import heroImg from "../assets/images/herol.png";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div>
      <section className="mx-auto mt-[60px] px-[38px] md:mx-[80px] md:mt-[50px] ">
        <div className="flex flex-col md:flex md:flex-row md:items-center md:justify-between">
          <div>
            <div className={``}>
              <h1
                className={`font-clashbold font-bold text-[#CFFAFF] max-w-[285px]  min-w-[356px] text-[30px] leading-[36.9px] md:max-w-[580px] md:text-[60px] md:leading-[73.8px]`}
              >
                Creative Frontend Developer<span>.</span>
              </h1>
            </div>
            <p
              className={`font-medium font-pop text-[15px] min-w-[363px] mt-[25px] text-[#FFFFFF99] md:mt-1 md:max-w-[639px] md:text-[18px] leading-md:[27px]`}
            >
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[15px] font-medium mt-[20px] flex flex-col gap-[20px] md:mt-[45px] md:flex md:flex-row md:items-center md:gap-[10px]"
            >
              <p className={`max-w-full md:max-w-[310px]`}>
                1+ Years of experience. Specialized in building Websites, while
                ensuring a seamless web experience for end users.
              </p>
              <p className={`max-w-max md:max-w-[319px]`}>
                My specialty is Front-end web Development,Turning Beautiful
                Designs and turning it into beautiful, semantic HTML & CSS.
              </p>
            </div>
            <div className="mt-[35px] md:mt-[65px] flex items-center gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://web.facebook.com/victortoluu"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <FbIcon
                  className={`w-[30px] h-[30px] rounded-full border-[#1ED760] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#CFFAFF]`}
                />
              </motion.a>
              <motion.a
                href="https://twitter.com/HeyVickyJay"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TwIcon
                  className={`w-[30px] h-[30px] rounded-full border-[#1ED760] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-[#CFFAFF]`}
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/vickyjayox"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <IgIcon
                  className={`w-[30px] h-[30px] rounded-full border-[#1ED760] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-[#CFFAFF]`}
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/victor-olatunji-889568246"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  className={`w-[30px] h-[30px] rounded-full border-[#1ED760] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-[#CFFAFF]`}
                />
              </motion.a>
              <span>
                {/* <LinkedIcon className={`w-[25px] h-[25px]`} /> */}
              </span>
            </div>
          </div>
          <div className="w-full  mt-[60px] md:mt-0">
            <div className="relative">
              <motion.div whileHover={{}}>
                <img
                  src={hero}
                  alt="hero image is here"
                  className="w-full h-full md:w-[512px] md:h-[512px] absolute md:bottom-[52px] md:right-[56px] object-cover"
                  draggable={false}
                />
              </motion.div>
              <div
                className={`max-w-[330px] min-h-[330px] md:min-w-[512px] md:min-h-[512px] border-[#1ED760] border-[3px] border-solid`}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
