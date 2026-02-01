import { Experience } from ".";
// import { motion } from "framer-motion";
// import { skills } from "../data/data";

// const SkillCard = ({ title, index }) => {
//   const isEven = index % 2 === 0;
//   const gradientClass = isEven
//     ? "bg-gradient-to-r to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
//     : "bg-gradient-to-b to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5";

//   return (
//     <motion.div
//       whileHover={{ scale: 0.96 }}
//       className={`${gradientClass} max-w-[369px] lg:max-w-[252px]`}
//     >
//       <div
//         className={`bg-[#0A1C20] px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
//       >
//         <p
//           className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px]`}
//         >
//           {title}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

const Skills = () => {
  return (
    <section className="overflow-hidden px-[33px] mt-[60px] md:px-[50px] lg:px-[80px] lg:mt-[152px] xl:px-[100px]">
      <div className="flex flex-col gap-[60px] lg:flex-row lg:gap-[36px] lg:justify-start">
        {/* COMMENTED OUT SKILLS SECTION - Uncomment to restore */}
        {/*
        <div className={`flex flex-col`}>
          <div>
            <h2
              className={`flex items-center font-clashbold text-white font-semibold text-[20px] leading-[24.6px] lg:text-[60px] lg:leading-[49.2px]`}
            >
              Skills <small className="animate-bounce">🤹‍♂️</small>
            </h2>
            <p
              className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] lg:text-[20px] lg:leading-[30px] lg:tracking-wide`}
            >
              yo, I{"'"}ve honed some of these skills over the years...
            </p>
          </div>
          <div className="w-fit">
            <div
              className={`mt-[31px] grid grid-cols-1 md:grid md:grid-cols-2 md:space-y-0 md:gap-3 space-y-[18.67px] lg:mt-[36px] lg:grid-cols-2 lg:space-y-0 lg:gap-[20px]`}
            >
              {skills.map((skill, index) => (
                <SkillCard key={skill.id} title={skill.title} index={index} />
              ))}
              <motion.div
                title="loading... expect greatness!"
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20] px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white tracking-[10px] font-medium font-clash lg:text-[20px] lg:leading-[30.75px]`}
                  >
                    ...
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        */}

        {/* Experience - keeping this visible */}
        <Experience />
      </div>
    </section>
  );
};

export default Skills;
