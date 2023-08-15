import { Arrow } from "../assets/Icons";

const Portfolio = () => {
  return (
    <section className={`mx-[30px] mt-[60px] lg:mx-[76px] lg:mt-[152px]`}>
      <div>
        <div>
          <h2
            className={`font-clashbold text-[20px] text-white md:text-[60px] md:font-semibold md:leading-[73.8px]`}
          >
            Portfolio
          </h2>
          <p
            className={`font-medium text-[#FFFFFF99] text-[15px] leading-[22.5px] lg:text-[18px] lg:leading-[27px]`}
          >
            These are some of the projects I have worked on
          </p>
        </div>
        <div
          className={`mt-[46px] flex flex-wrap gap-[13px] lg:mt-[67px] lg:gap-[16px] lg:justify-between`}
        >
          <div
            className={`bg-[#0A1C20] flex flex-col gap-[25px] md:gap-[29px] px-[27px] py-[40px] justify-center w-[367px] h-[322px] md:w-[424px] md:h-[373px] md:px-[32px] md:py-[55px]`}
          >
            <h5
              className={`font-medium font-clash text-[20px] leading-[24.6px] md:text-[25px] md:leading-[30.75px]`}
            >
              Blogre
            </h5>
            <h5
              className={`text-[#FFFFFF99] text-[15px] font-medium md:text-[18px] md:leading-[27px]`}
            >
              HTML + Bootstrap
            </h5>

            <h5
              className={`text-[#FFFFFF99] font-medium max-w-[294px] text-[15px] leading-[22.5px] md:max-w-[340px] md:text-[18px] md:leading-[27px]`}
            >
              A Web-page that makes you read about recent happenings.
            </h5>
            <div className="flex items-center space-x-2">
              <span>
                <Arrow
                  className={`w-[20px] h-[20px] md:w-[13px] md:h-[13px]`}
                />
              </span>
              <p
                className={`text-[15px] leading-[22.5px] md:text-[18px] md:leading-[27px] font-medium text-[#FFFFFF99]`}
              >
                view
              </p>
            </div>
          </div>
          <div
            className={`bg-[#0A1C20] flex flex-col gap-[25px] md:gap-[29px] px-[27px] py-[40px] justify-center w-[367px] h-[322px] md:w-[424px] md:h-[373px] md:px-[32px] md:py-[55px]`}
          >
            <h5
              className={`font-medium font-clash text-[20px] leading-[24.6px] md:text-[25px] md:leading-[30.75px]`}
            >
              Blogre
            </h5>
            <h5
              className={`text-[#FFFFFF99] text-[15px] font-medium md:text-[18px] md:leading-[27px]`}
            >
              HTML + Bootstrap
            </h5>

            <h5
              className={`text-[#FFFFFF99] font-medium max-w-[294px] text-[15px] leading-[22.5px] md:max-w-[340px] md:text-[18px] md:leading-[27px]`}
            >
              A Web-page that makes you read about recent happenings.
            </h5>
            <div className="flex items-center space-x-2">
              <span>
                <Arrow
                  className={`w-[20px] h-[20px] md:w-[13px] md:h-[13px]`}
                />
              </span>
              <p
                className={`text-[15px] leading-[22.5px] md:text-[18px] md:leading-[27px] font-medium text-[#FFFFFF99]`}
              >
                view
              </p>
            </div>
          </div>
          <div
            className={`bg-[#0A1C20] flex flex-col gap-[25px] md:gap-[29px] px-[27px] py-[40px] justify-center w-[367px] h-[322px] md:w-[424px] md:h-[373px] md:px-[32px] md:py-[55px]`}
          >
            <h5
              className={`font-medium font-clash text-[20px] leading-[24.6px] md:text-[25px] md:leading-[30.75px]`}
            >
              Blogre
            </h5>
            <h5
              className={`text-[#FFFFFF99] text-[15px] font-medium md:text-[18px] md:leading-[27px]`}
            >
              HTML + Bootstrap
            </h5>

            <h5
              className={`text-[#FFFFFF99] font-medium max-w-[294px] text-[15px] leading-[22.5px] md:max-w-[340px] md:text-[18px] md:leading-[27px]`}
            >
              A Web-page that makes you read about recent happenings.
            </h5>
            <div className="flex items-center space-x-2">
              <span>
                <Arrow
                  className={`w-[20px] h-[20px] md:w-[13px] md:h-[13px]`}
                />
              </span>
              <p
                className={`text-[15px] leading-[22.5px] md:text-[18px] md:leading-[27px] font-medium text-[#FFFFFF99]`}
              >
                view
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
