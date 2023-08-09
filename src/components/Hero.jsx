import heroImg from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div>
      <section className="mx-auto px-[80px] pt-[50px] ">
        <div className="flex items-center justify-between">
          <div>
            <div className={`gradientText`}>
              <h1
                className={`max-w-[570px] text-[#CFFAFF] text-[60px] leading-[73.8px] font-clash font-semibold`}
              >
                Frontend Developer<span>.</span>
              </h1>
            </div>
            <p
              className={`text-[#FFFFFF99] max-w-[639px] text-[18px] leading-[27px] font-medium font-pop`}
            >
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>
            <div
              id="intro"
              className="mt-[45px] flex items-center gap-[10px] text-[#F0FEFF] font-pop text-[15px] font-medium"
            >
              <p className={`max-w-[310px]`}>
                1+ Years of experience. Specialized in building Websites, while
                ensuring a seamless web experience for end users.
              </p>
              <p className={`max-w-[319px]`}>
                My specialty is Front-end web Development,Turning Beautiful
                Designs and turning it into beautiful, semantic HTML & CSS.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="hero image is here"
              className="absolute bottom-[52px] right-[56px] object-cover w-full "
              draggable={false}
            />
            <div
              className={`w-[512px] h-[512px] border-[#1ED760] border-[3px] border-solid`}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
