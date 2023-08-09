import { motion } from "framer-motion";
import { FbIcon, IgIcon, InIcon, TwIcon } from "../assets/Icons";
import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div>
      <section className="mx-auto pt-[30px] px-[38px] md:px-[80px] md:pt-[50px] ">
        <div className="flex items-center justify-between">
          <div>
            <div className={`gradientText`}>
              <h1
                className={`font-clash font-semibold text-[#CFFAFF] max-w-[285px] text-[30px] leading-[36.9px] md:max-w-[600px] md:text-[60px] md:leading-[73.8px]`}
              >
               Creative <br /> Frontend Developer<span>.</span>
              </h1>
            </div>
            <p
              className={`text-[#FFFFFF99] max-w-[639px] text-[18px] leading-[27px] font-medium font-pop`}
            >
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
            <div
              id="intro"
              className="gradientText mt-[45px] flex items-center gap-[10px] text-[#F0FEFF] font-pop text-[15px] font-medium"
            >
              <p className={`max-w-[310px]`}>
                1+ Years of experience. Specialized in building Websites, while
                ensuring a seamless web experience for end users.
              </p>
              <p className={`max-w-[319px]`}>
                My specialty is Front-end web Development,Turning Beautiful
                Designs and turning it into beautiful, semantic HTML & CSS.
              </p>
            </div>
            <div className="mt-[65px] flex items-center gap-[40px]">
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
          <div className="relative">
            <motion.div whileHover={{}}>
              <img
                src={heroImg}
                alt="hero image is here"
                className="absolute bottom-[52px] right-[56px] object-cover w-full "
                draggable={false}
              />
            </motion.div>
            <div
              className={`w-[512px] h-[512px] border-[#1ED760] border-[3px] border-solid`}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
