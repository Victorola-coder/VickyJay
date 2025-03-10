import { Experience } from ".";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [sectionRef] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  return (
    <section className="overflow-hidden px-[33px] mt-[60px] lg:px-[70px] lg:mt-[152px]">
      <div className="flex flex-col gap-[60px] lg:flex-row lg:gap-[36px]   lg:justify-cente">
        {/*skills */}
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
              <motion.div
                whileHover={{ scale: 0.96 }}
                ref={sectionRef}
                initial={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20] max-w-full w-[368px] px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Html
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                ref={sectionRef}
                initial={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Css
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Bootstrap
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    TailwindCSS
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                // ref={sectionRef}
                // initial={{ opacity: 0, x: 300, y: -300 }}
                // transition={{ duration: 0.6 }}
                // whileInView={{ opacity: 1, x: 0, y: 0 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    SCSS
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                // ref={sectionRef}
                // initial={{ opacity: 0, x: -300 }}
                // transition={{ duration: 0.6 }}
                // whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    JavaScript
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                // ref={sectionRef}
                // initial={{ opacity: 0, x: -300 }}
                // transition={{ duration: 0.6 }}
                // whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    TypeScript
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                // ref={sectionRef}
                // initial={{ opacity: 0, x: 300 }}
                // transition={{ duration: 0.6 }}
                // whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    JQuery
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                // ref={sectionRef}
                // initial={{ opacity: 0, x: 300 }}
                // transition={{ duration: 0.6 }}
                // whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Git
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Github
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    ReactJs
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    NextJs
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Framer-Motion
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Figma
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Photoshop
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    WordPress
                  </p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 0.96 }}
                className="bg-gradient-to-b max-w-[369px]  lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pb-0.5 pl-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    Backend Development
                  </p>
                </div>
              </motion.div>
              <motion.div
                title="loading... expect greatness!"
                whileHover={{ scale: 0.96 }}
                className="bg max-w-[369px] bg-gradient-to-r lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
              >
                <div
                  className={`bg-[#0A1C20]  px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p
                    className={`text-white tracking-[10px] font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                  >
                    ...
                  </p>
                </div>
              </motion.div>
            </div>
            {/* <div
              className={`mt-[31px] grid w-full grid-cols-1 md:grid md:grid-cols-2 md:space-y-0 md:gap-3 space-y-[18.67px] lg:mt-[36px] lg:grid-cols-3 lg:space-y-0 lg:gap-[24px]`}
            >
              {skills.map((skill, id) => (
                <div key={id}>
                  <motion.div
                    whileHover={{ scale: 0.96 }}
                    // ref={sectionRef}
                    // initial={{ opacity: 0, x: -300 }}
                    // transition={{ duration: 0.6 }}
                    // whileInView={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#C8C8C880] from-[#C5F4FF00] pr-0.5 pt-0.5"
                  >
                    <div
                      className={`bg-[#0A1C20] max-w-full w-[368px] px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                    >
                      <p
                        className={`text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px] `}
                      >
                        {skill.title}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/*experience*/}
        <Experience />
      </div>
    </section>
  );
};

export default Skills;
