import { LocationIcon, MailIcon, PhoneIcon } from "../assets/Icons";

const Contact = () => {
  return (
    <section className="mx-[30px] mt-[60px] lg:mx-[76px] lg:mt-[150px]">
      <div className="flex flex-col items-center gap-[25px]">
        <h3
          className={`font-medium text-[#FFFFFF99] text-center md:max-w-[992px] md:text-[25px] mmd:leading-[37.5px]`}
        >
          I can help you design, improve or build the product experience for
          your new or existing products. Feel free to get in touch with me.
        </h3>
        <h1 className="font-clashbold font-semibold text-white md:text-[60px] md:leading-[73.8px]">
          Do You Have Any Ideas?
        </h1>

        <p className="font-semibold text-[20px] leading-[30px] text-[#FFFFFF99]">
          SAY HELLO
        </p>
      </div>
      <div className={`mt-[51px] flex flex-wrap items-center justify-between`}>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-gradient-to-l from-[#CFFAFF] to-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
            <MailIcon
              className={`p-[5px] bg-[#061417] md:w-[36px] md:h-[36px]`}
            />
          </div>
          <a
            className={`text-[#FFFFFF99] font-medium md:text-[20px] md:leading-[30px]`}
            href="mailto:victoluolatunji@gmail.com"
          >
            victoluolatunji@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-gradient-to-r to-[#CFFAFF] from-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[50px]">
            <PhoneIcon
              className={`p-[5px] bg-[#061417] md:w-[36px] md:h-[36px]`}
            />
          </div>
          <a
            href="tel:+2349075789680"
            className={`text-[#FFFFFF99] font-medium md:text-[20px] md:leading-[30px]`}
          >
            it is not necessary tho
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <div className="bg-gradient-to-l from-[#CFFAFF] to-[#CFFAFF00] pr-[1px] pt-[1px] max-w-[75px] max-h-[75px]">
            <LocationIcon
              className={`p-[5px] bg-[#061417] md:w-[36px] md:h-[36px]`}
            />
          </div>
          <p
            className={`text-[#FFFFFF99] font-medium md:text-[20px] md:leading-[30px]`}
          >
            somewhere in the metaverse
          </p>
          <a href="tel:+"></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
