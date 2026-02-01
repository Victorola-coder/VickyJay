import Resume from "./resume";
import { ExpCircle } from "./svgs";
import resumeUrl from "../utils/ovt.pdf";
import { EXPERIENCE_DATA } from "../constants/data";

const Experience = () => {
  return (
    <>
      <div className={`flex flex-col ml-3 lg:items-end mt-20 lg:mt-32 px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px]`}>
        <div className="font-pop w-full">
          <h2
            className={`flex items-center font-clashbold text-white text-[20px] font-semibold lg:text-[50px] lg:leading-[49.2px]`}
          >
            Experience <small className={`animate-bounce ml-2`}>🚀</small>
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] text-left lg:text-[20px] lg:leading-[30px] mt-2`}
          >
            Some list of my experience over the year..
          </p>
        </div>
        
        <div className="flex flex-row relative z-[100] w-full mt-[30px]">
          {/* Timeline Line */}
          <div className="absolute left-[7px] lg:left-[50%] top-2 bottom-0 w-0.5 bg-[#1ED7601A] -translate-x-1/2"></div>
          
          <div className={`flex flex-col space-y-[60px] w-full`}>
            {EXPERIENCE_DATA.map((exp, index) => (
              <div key={index} className="flex gap-[28px] lg:gap-[48px] lg:justify-center w-full">
                {/* Timeline Dot */}
                <div className="relative shrink-0 lg:absolute lg:left-[50%] lg:-translate-x-1/2 z-10">
                  <span className="block -mt-1">
                    <ExpCircle />
                  </span>
                </div>

                {/* Content */}
                <div className="lg:w-[45%] lg:ml-auto lg:pl-10">
                  <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]">
                    {exp.role} <span className="hidden">-</span> &nbsp;
                    <span className="hidden italic text-[#FFFFFF99]">
                      {exp.period}
                    </span>
                  </h3>
                  <p
                    className={`text-[#1ED760] font-semibold md:mt-[10px] text-[18px] leading-[27px]`}
                  >
                    {exp.company}
                    {exp.subtext && (
                      <>
                        {" - "}
                        <span className="italic animate-pulse text-[#FFFFFF99] text-sm">
                          {exp.subtext}
                        </span>
                      </>
                    )}
                  </p>
                  <h5
                    className={`text-[#FFFFFF99] font-medium mt-[20px] max-w-[300px] md:max-w-md lg:mt-[19px] lg:max-w-[651px] lg:text-[18px] lg:leading-[27px]`}
                  >
                    {exp.description}
                  </h5>
                </div>
              </div>
            ))}

            {/* RESUME */}
            <div className="flex gap-[28px] lg:gap-[48px] lg:justify-center w-full pt-4">
               <div className="relative shrink-0 lg:absolute lg:left-[50%] lg:-translate-x-1/2 z-10 invisible">
                  <span className="block">
                    <ExpCircle />
                  </span>
                </div>
               <div className="lg:w-[45%] lg:ml-auto lg:pl-10">
                  <Resume
                    pdfUrl={resumeUrl}
                    fileName="Victor Olatunji.pdf"
                    buttonText="Download Resume"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
