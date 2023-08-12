import { NavLink } from "react-router-dom";
import { GhIcon } from "../assets/Icons";

const Navbar = () => {
  return (
    <>
      <main className="">
        <header
          className={`w-full scroll:bg-black pt-[20px] px-[32px] md:py-[30px] md:px-[80px]`}
        >
          <nav className={`flex items-center justify-between`}>
            {/* <h2
              className={`font-clashbold font-semibold text-[18px] md:text-[25px] leading-[]`}
            >
              VickyJay<span>.</span>
            </h2> */}
            <NavLink>
             {({ isActive }) => (
                  <div
                    className={`before:content-[''] font-clashbold font-semibold text-[18px] md:text-[25px] hover:before:bg-[[#4C686F] transition-all duration-100 before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${
                      isActive
                        ? "text-white hover:before:w-full"
                        : "text-white hover:before:w-full"
                    } relative`}
                  >
                     VickyJay<span>.</span>
                  </div>
                )}
           </NavLink>
            <a
              href="https://www.github.com/victorola-coder"
              target="_blank"
              rel="noreferrer"
            >
              <span className={`flex items-center gap-[8px] md:gap-[10px]`}>
                <GhIcon
                  className={`w-[26px] h-[26px] md:w-[32px] md:h-[32px]`}
                />
                <p className="font-clash text-[15px] md:text-[18px] font-medium text-[#FFFFFF99]">
                  github
                </p>
              </span>
            </a>
          </nav>
        </header>
      </main>
    </>
  );
};

export default Navbar;
