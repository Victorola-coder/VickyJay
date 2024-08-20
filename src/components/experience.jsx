import Resume from "./resume";
import { ExpCircle } from "./svgs";
import resumeUrl from "../utils/ovt.pdf";

const Experience = () => {
  // console.log("resume", resumeUrl)

  return (
    <>
      <div className={`flex flex-col ml-3 lg:items-end`}>
        <div className="font-pop">
          <h2
            className={`h-full flex items-center ml-0 lg:ml-20 font-clashbold text-white text-[20px] font-semibold lg:text- lg:text-[50px] lg:leading-[49.2px]`}
          >
            Experience <small className={`animate-bounce`}>🚀</small>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px]]`}
          >
            Some list of my experience over the year..
          </p>
        </div>
        <div className="flex flex-row relative z-[100]  lg:justify-between mt-[30px]">
          <div className="w-0.5 h-[940px] lg:h-[740px] bg-[#1ED7601A]"></div>
          <div className={`flex flex-col space-y-[60px]`}>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Software Engineer <span className="hidden">-</span> &nbsp;
                  <span className="hidden italic text-[#FFFFFF99]">
                    2023 - till date
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Showmeelove -{" "}
                  <span className="italic animate-pulse text-[#FFFFFF99] text-sm">
                    some idea im building
                  </span>
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I work as a Lead Frontend Engineer at showmeelove, crafting
                  thoughtful and inclusive experiences that adhere to web
                  standards.
                </h5>
              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Fullstack Developer <span>-</span>&nbsp;
                  <span className="text-xs md:text-base italic text-[#FFFFFF99]">
                    March, 2024 - till date
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Zero Studio, India.
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  Collaborated with UX and UI designers to create intuitive user
                  interfaces for web applications. Troubleshot bugs in
                  production code and resolved them efficiently.
                </h5>
              </div>
            </div>
            <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Frontend Engineer&nbsp;
                  <span className="hidden">-</span> &nbsp;
                  <span className="italic hidden text-[#FFFFFF99]">
                    2023 - till date
                  </span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  TekArt, Lagos, NG.
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I work as a frontend developer with the responsibility of
                  building and managing the websites with a team of Creative
                  developers.
                </h5>
              </div>
            </div>
            {/* <div className="flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Flowday
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I work as a frontend developer integrating the figma design
                  under a senior developer, I aced my skills of connecting
                  frontend to backend.
                </h5>
              </div>
            </div> */}
            <div className="relative flex gap-[28px] lg:gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[55%] lg:translate-x-[-50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Creative Web Developer
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                >
                  Vistapay, Uyo, Ng.
                </p>
                <h5
                  className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                >
                  I work as a frontend developer building the system of the
                  company, creating beautiful interfaces that user loves.
                </h5>
              </div>
            </div>
            {/* RESUME */}
            <Resume
              pdfUrl={resumeUrl}
              fileName="Victor Olatunji.pdf"
              buttonText="Download Resume"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
