import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Socials from "./socials";

const Footer = () => {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
  );

  useEffect(() => {
    const timer = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        ),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="section-x mt-24 pb-10 lg:mt-32">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-ice/20 to-transparent" />
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-clashbold text-[20px] font-semibold text-white">
            VickyJay<span className="text-mint">.</span>
          </p>
          <p className="mt-1 font-pop text-[14px] text-ice/50">
            © 2021 – {new Date().getFullYear()} Victor Olatunji. Built with React, Tailwind &amp; a lot of coffee.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <Socials />
          <div className="flex items-center gap-4 font-mono text-[12px] text-ice/40">
            <span>
              Local time <span className="text-ice/80 tabular-nums">{time}</span>
            </span>
            <span className="h-3 w-px bg-ice/15" />
            <Link to="/changelog" className="transition-colors hover:text-mint">
              Changelog
            </Link>
            <span className="h-3 w-px bg-ice/15" />
            <a href="#" className="transition-colors hover:text-mint">
              Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
