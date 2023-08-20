import { motion } from "framer-motion";
import { Arrow } from "../assets/Icons";

const Projects = () => {
  return (
    <section className={`mx-[30px] mt-[60px] lg:mx-[76px] lg:mt-[152px]`}>
      <div>
        <div>
          <h2
            className={`font-clashbold text-[20px] text-white md:text-[60px] md:font-semibold md:leading-[73.8px]`}
          >
            Do...ings? Yo! 👨‍🍳⚡
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] lg:text-[18px] lg:leading-[27px]`}
          >
            some of my fun projects...
          </p>
        </div>
        <div
          className={`mt-[46px] flex flex-wrap gap-[13px] lg:mt-[67px] lg:gap-[26px] lg:justify-between`}
        >
          <div
            className={`hoverbg bg-[#0A1C20] flex flex-col gap-[25px] md:gap-[29px] px-[27px] py-[40px] justify-center w-[367px] h-[322px] md:w-[424px] md:h-[373px] md:px-[32px] md:py-[55px]`}
          >
            <h5
              className={`font-medium font-clash text-[20px] leading-[24.6px] md:text-[25px] md:leading-[30.75px]`}
            >
              text2Speech
            </h5>
            <h5
              className={`text-[#FFFFFF99] text-[15px] font-medium md:text-[18px] md:leading-[27px]`}
            >
              JavaScript + webspeechAPI + TailwindCss + Html
            </h5>

            <h5
              className={`text-[#FFFFFF99] font-medium max-w-[294px] text-[15px] leading-[22.5px] md:max-w-[340px] md:text-[18px] md:leading-[27px]`}
            >
              converts the text input to an audio output
            </h5>
            <a
              href="https://text2speeech.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[70px]"
            >
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="flex items-center space-x-2"
              >
                <span>
                  <Arrow
                    className={`w-[20px] h-[20px] md:w-[18px] md:h-[18px]`}
                  />
                </span>
                <p
                  className={`text-[15px] leading-[22.5px] md:text-[18px] md:leading-[27px] font-medium text-[#FFFFFF99]`}
                >
                  view
                </p>
              </motion.div>
            </a>
          </div>
          <div
            className={`bg-[#0A1C20] flex flex-col gap-[25px] md:gap-[29px] px-[27px] py-[40px] justify-center w-[367px] h-[322px] md:w-[424px] md:h-[373px] md:px-[32px] md:py-[55px]`}
          >
            <h5
              className={`font-medium font-clash text-[20px] leading-[24.6px] md:text-[25px] md:leading-[30.75px]`}
            >
              AskWik
            </h5>
            <h5
              className={`text-[#FFFFFF99] text-[15px] font-medium md:text-[18px] md:leading-[27px]`}
            >
              HTML + SCSS + JavaScript +{" "}
              <span>
                <a href="https://questgig.com" target="_blank" rel="noreferrer">
                  Questgig
                </a>
              </span>
              &nbsp; API
            </h5>

            <h5
              className={`text-[#FFFFFF99] font-medium max-w-[294px] text-[15px] leading-[22.5px] md:max-w-[340px] md:text-[18px] md:leading-[27px]`}
            >
              Not the normal search engine out there.
            </h5>
            <a
              href="https://askwik.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[70px]"
            >
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="flex items-center space-x-2"
              >
                <span>
                  <Arrow
                    className={`w-[20px] h-[20px] md:w-[18px] md:h-[18px]`}
                  />
                </span>
                <p
                  className={`text-[15px] leading-[22.5px] md:text-[18px] md:leading-[27px] font-medium text-[#FFFFFF99]`}
                >
                  view
                </p>
              </motion.div>
            </a>
          </div>
          <div
            className={`bg-[#0A1C20] flex flex-col gap-[25px] md:gap-[29px] px-[27px] py-[40px] justify-center w-[367px] h-[322px] md:w-[424px] md:h-[373px] md:px-[32px] md:py-[55px]`}
          >
            <h5
              className={`font-medium font-clash text-[20px] leading-[24.6px] md:text-[25px] md:leading-[30.75px]`}
            >
              Payday Website(Clone)
            </h5>
            <h5
              className={`text-[#FFFFFF99] text-[15px] font-medium md:text-[18px] md:leading-[27px]`}
            >
              HTML + CSS + Javascript
            </h5>

            <h5
              className={`text-[#FFFFFF99] font-medium max-w-[294px] text-[15px] leading-[22.5px] md:max-w-[340px] md:text-[18px] md:leading-[27px]`}
            >
              Payday landing page full clone with
            </h5>
            <a
              href="https://payday-clone-three.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="max-w-[60px]"
            >
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="flex items-center space-x-2"
              >
                <span>
                  <Arrow
                    className={`w-[20px] h-[20px] md:w-[18px] md:h-[18px]`}
                  />
                </span>
                <p
                  className={`text-[15px] leading-[22.5px] md:text-[18px] md:leading-[27px] font-medium text-[#FFFFFF99]`}
                >
                  view
                </p>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
