import { ExpCircle } from "../../assets/Icons";
import Resume from "../../utils/Resume.pdf";
const Experience = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = { Resume };
    downloadLink.download = "VickyJay's Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <>
      <div className={`flex flex-col lg:items-end`}>
        <div className="">
          <h2
            className={`font-clashbold text-white font-semibold lg:text-endgo lg:text-[40px] lg:leading-[49.2px]`}
          >
            Experience
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] lg:text-[20px] lg:leading-[30px] lg:tracking-wide`}
          >
            Some list of my experience
          </p>
        </div>
        <div className="flex justify-between mt-[30px]">
          <div className="w-0.5 h-[800px] bg-[#1ED7601A]"></div>
          <div className={`flex flex-col space-y-[60px]`}>
            <div className="flex gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] md:text-[18px] `}
                >
                  Showmeelove
                </p>
                <h5
                  className={`text-[#FFFFFF99] mt-[19px] max-w-[651px] text-[18px] font-medium leading-[27px]`}
                >
                  I worked/works as a frontend developer with the responsibility
                  of building and managing the websites with a team of Creative
                  developers. It aced my ReactJS Skills.
                </h5>
              </div>
            </div>
            <div className="flex gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] md:text-[18px] `}
                >
                  Krubbs
                </p>
                <h5
                  className={`text-[#FFFFFF99] mt-[19px] max-w-[651px] text-[18px] font-medium leading-[27px]`}
                >
                  I worked/works as a frontend developer with the responsibility
                  of building and managing the websites with a team of Creative
                  developers. it aced my ReactJS Skills.
                </h5>
              </div>
            </div>
            <div className="flex gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer -{" "}
                  <span className="italic text-[#FFFFFF99]">Frontend</span>
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] md:text-[18px] `}
                >
                  TekArt
                </p>
                <h5
                  className={`text-[#FFFFFF99] mt-[19px] max-w-[651px] text-[18px] font-medium leading-[27px]`}
                >
                  I worked/works as a frontend developer with the responsibility
                  of building and managing the websites with a team of Creative
                  developers. it aced my ReactJS Skills.
                </h5>
              </div>
            </div>
            {/* <div className="flex gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] md:text-[18px] `}
                >
                  FLowday
                </p>
                <h5
                  className={`text-[#FFFFFF99] mt-[19px] max-w-[651px] text-[18px] font-medium leading-[27px]`}
                >
                  I work as a frontend developer integrating the figma design
                  under a senior developer, I aced my skills of connecting
                  frontend to backend.
                </h5>
              </div>
            </div> */}
            <div className="flex gap-[48px]">
              <div className="relative">
                <span className="absolute -top-1 -translate-x-[50%]">
                  <ExpCircle />
                </span>
              </div>

              <div>
                <h3 className="font-semibold text-white lg:text-[20px] lg:leading-[30px]  ">
                  Web Developer
                </h3>
                <p
                  className={`text-[#1ED760] font-semibold md:mt-[10px] md:text-[18px] `}
                >
                  Drawr
                </p>
                <h5
                  className={`text-[#FFFFFF99] mt-[19px] max-w-[651px] text-[18px] font-medium leading-[27px]`}
                >
                  I work as a frontend developer integrating the figma design
                  under a senior developer, I aced my skills of connecting
                  frontend to backend.
                </h5>
              </div>
            </div>
            <div className="cursor-pointer bg-gradient-to-r max-w-[369px] lg:max-w-[252px] to-[#D9D9D9] from-[#D9D9D900] py-0.5 pr-0.5">
              <div className="bg-[#061417] px-[17px] py-[18px] font-medium text-[18px] font-clash">
                Download Resume
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
