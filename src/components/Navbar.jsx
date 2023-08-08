import { GhIcon } from "../assets/Icons";

const Navbar = () => {
  return (
    <>
      <div>
        <header className={`pt-[25px] px-[31px] md:pt-[30px] md:px-[100px]`}>
          <nav className={`flex items-center justify-between`}>
            <h2
              className={`font-clashbold font-semibold text-[25px] leading-[]`}
            >
              VickyJay<span>.</span>
            </h2>
            <a
              href="https://www.github.com/victorola-coder"
              target="_blank"
              rel="noreferrer"
            >
              <span className={`flex items-center gap-[10px]`}>
                <GhIcon className={``} />
                <p className="font-clash text-[18px] font-medium text-[#FFFFFF99]">
                  github
                </p>
              </span>
            </a>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
