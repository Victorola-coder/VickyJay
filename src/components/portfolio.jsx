import { Arrow } from "../assets/Icons";

const Portfolio = () => {
  return (
    <section className={`mx-[30px] mt-[60px] lg:mx-[76px] lg:mt-[152px]`}>
      <div>
        <div>
          <h2
            className={`font-clashbold text-white md:text-[60px] md:font-semibold md:leading-[73.8px]`}
          >
            Portfolio
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[18px] leading-[27px]`}
          >
            These are some of the projects iuhave worked on
          </p>
        </div>
        <div className={`mt-[67px] flex flex-wrap justify-between space-x-`}>
          <div
            className={`flex flex-col  gap-[29px] justify-center w-[424px] h-[373px] bg-[#0A1C20] px-[32px] py-[55px]`}
          >
            <h5
              className={`text-[25px] leading-[30.75px] font-medium font-clash`}
            >
              Blog Post
            </h5>
            <h5
              className={`text-[18px] text-[#FFFFFF99] font-medium leading-[27px]`}
            >
              HTML + Bootstrap + ReactJs
            </h5>

            <h5
              className={`max-w-[340px] text-[18px] text-[#FFFFFF99] font-medium leading-[27px]`}
            >
              A Web-page that makes you read about recent happenings.
            </h5>
            <div className="flex items-center space-x-2">
              <span>
                <Arrow className={`w-full`} />
              </span>
              <p className={`text-[18px] font-medium text-[#FFFFFF99]`}>view</p>
            </div>
          </div>
          <div
            className={`flex flex-col  gap-[29px] justify-center w-[424px] h-[373px] bg-[#0A1C20] px-[32px] py-[55px]`}
          >
            <h5
              className={`text-[25px] leading-[30.75px] font-medium font-clash`}
            >
              Blog Post
            </h5>
            <h5
              className={`text-[18px] text-[#FFFFFF99] font-medium leading-[27px]`}
            >
              HTML + Bootstrap + ReactJs
            </h5>

            <h5
              className={`max-w-[340px] text-[18px] text-[#FFFFFF99] font-medium leading-[27px]`}
            >
              A Web-page that makes you read about recent happenings.
            </h5>
            <div className="flex items-center space-x-2">
              <span>
                <Arrow className={`w-full`} />
              </span>
              <p className={`text-[18px] font-medium text-[#FFFFFF99]`}>view</p>
            </div>
          </div>
          <div
            className={`flex flex-col  gap-[29px] justify-center w-[424px] h-[373px] bg-[#0A1C20] px-[32px] py-[55px]`}
          >
            <h5
              className={`text-[25px] leading-[30.75px] font-medium font-clash`}
            >
              Blog Post
            </h5>
            <h5
              className={`text-[18px] text-[#FFFFFF99] font-medium leading-[27px]`}
            >
              HTML + Bootstrap + ReactJs
            </h5>

            <h5
              className={`max-w-[340px] text-[18px] text-[#FFFFFF99] font-medium leading-[27px]`}
            >
              A Web-page that makes you read about recent happenings.
            </h5>
            <div className="flex items-center space-x-2">
              <span>
                <Arrow className={`w-full`} />
              </span>
              <p className={`text-[18px] font-meduim text-[#FFFFFF99]`}>view</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
