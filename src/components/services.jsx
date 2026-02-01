import { motion } from "framer-motion";
import { SERVICES_DATA } from "../constants/data";

const Services = () => {
  return (
    <section className={`mt-[20px] mx-[30px] md:mx-[50px] lg:mt-[86px] lg:mx-[80px] xl:mx-[100px]`}>
      <div className="gradientText">
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
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 0.99 }}
            className={`bg-gradient-${service.gradientDirection} max-w-max md:max-w-none lg:max-w-[642px] to-[#F0FEFF4D] from-[#F0FEFF00] ${
              service.gradientDirection === "to-l" ? "pl-0.5 pt-0.5" : 
              service.gradientDirection === "to-r" ? "pr-0.5 pt-0.5" : 
              service.gradientDirection === "to-t" ? "pl-0.5 pt-0.5" : "pl-0.5 pb-0.5"
            }`}
          >
            <motion.div
              whileHover={{ scale: 0.99 }}
              className={`bg-[#0A1C20] text-[#FFFFFF99] py-[65px] px-[27px] max-w-[369.808px] h-[240px] lg:py-[100px] lg:px-[49px] lg:max-w-[641px] lg:h-[416px] shrink-0`}
            >
              <h4
                className={`font-semibold uppercase text-white font-clashbold text-[20px] leading-[24.6px] max-w-[156px] lg:max-w-[312px] lg:text-[40px] lg:leading-[49.2px]`}
              >
                {service.title}
              </h4>
              <p
                className={`font-normal text-[13px] leading-[19.5px] mt-4 max-w-[308px] lg:mt-[27px] lg:max-w-[466px] lg:leading-[30px] lg:text-[20px]`}
              >
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
