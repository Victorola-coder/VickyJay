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
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
