import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className={`mt-[20px] mx-[30px] lg:mt-[86px] lg:mx-[76px]`}>
      <div className="gradientTex">
        <h1
          className={`flex items-center font-clashbold font-semibold text-white text-[20px] leading-[30.75px] lg:text-[60px] lg:leading-[73.8px]`}
        >
          Services <span className={`animate-bounce`}>🔥</span>
        </h1>
        <p
          className={`text-[#FFFFFF99] font-medium text-[15px] leading-[22.5px]  lg:text-[18px] lg:leading-[27px]`}
        >
          These are some of the services I render and I got you covered
        </p>
      </div>

      {/* cards */}
      <div className="flex flex-col mt-[56px] gap-2 lg:mt-[56px] lg:flex lg:flex-wrap lg:flex-shrink-0 lg:justify-start lg:flex-row lg:items-center lg:gap-[24px]">
        {/* first cards */}
        <div
          className={`overflow-hidden flex flex-col gap-3 flex-nowrap justify-start md:flex md:flex-row md:flex-wrap md:justify-arounds md:gap-4 lg:flex lg:flex-col lg:gap-[24px]`}
        >
          <motion.div
            whileHover={{ scale: 0.99 }}
            className={`bg-gradient-to-l max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5`}
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold text-white font-clashbold text-[20px] leading-[24.6px] max-w-[156px] lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                WEB DEVELOPMENT
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                I create beautiful interfaces with HTML, CSS TailwindCss,
                Bootstrap, JavaScript, ReactJs, NextJs & Typescript.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-r max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pt-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px]`}
            >
              <h4
                className={`font-semibold uppercase text-white text-[20px] leading-[24.6px] font-clashbold max-w-[156px] lg:max-w-[400px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Responsive Design
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Building websites and applications that work seamlessly on
                various devices and screen sizes, from desktop to smartphones.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-l max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5"
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Integration with APIs
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] mt-4 lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Integrating frontend interfaces with backend services and APIs
                to fetch and display data in real time.
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="bg-gradient-to-r max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pt-0.5">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Web Accessibility
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] ensure mt-4 lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Ensuring that websites and applications are accessible to users
                with disabilities by implementing features like proper HTML
                structure and ARIA roles.
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* second card */}
        <div
          className={`flex flex-col gap-3 flex-nowrap justify-start md:flex md:flex-row md:flex-wrap md:justify-start md:gap-4 lg:mt-[148px] lg:flex lg:flex-col lg:gap-[24px]`}
        >
          <div className="bg-gradient-to-t max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                VERSION CONTROL
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] mt-4  lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Using version control systems like Git to collaborate with other
                developers and manage code changes effectively.
              </p>
            </motion.div>
          </div>
          <div className="bg-gradient-to-b max-w-max to-[#F0FEFF4D] from-[#F0FEFF00] pr-0.5 pb-0.5">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] shrink-0 text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px]`}
            >
              <h4
                className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[400px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                UI Design
              </h4>
              <p
                className={`font-normal  text-[13px] leading-[19.5px] max-w-[308px] mt-4  lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Designing the visual elements of the user interface, including
                layout, typography, color schemes, icons, and other graphical
                elements.
              </p>
            </motion.div>
          </div>
          <div className="bg-gradient-to-b max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pb-0.5">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Continuous Learning
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] mt-4  lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Staying updated with the latest frontend technologies, trends,
                and best practices to deliver modern and innovative solutions.
              </p>
            </motion.div>
          </div>
          <div className="bg-gradient-to-t max-w-[369.808px] lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] pl-0.5 pt-0.5">
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px]x lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold uppercase text-[20px] leading-[24.6px] max-w-[156px] text-white font-clashbold lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                Technical Support
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] max-w-[308px] mt-4  lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                Providing technical support to troubleshoot frontend-related
                issues.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
