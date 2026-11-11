import clsx from "clsx";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GhIcon } from "./svgs";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5 md:py-7"
      )}
    >
      <div className="section-x mx-auto max-w-[1440px]">
        <nav
          className={clsx(
            "flex items-center justify-between rounded-full border px-4 py-2.5 md:px-6 transition-all duration-500",
            scrolled
              ? "border-line bg-ink/70 backdrop-blur-xl shadow-card"
              : "border-transparent bg-transparent"
          )}
        >
          <NavLink
            to="/"
            className="font-clashbold text-[18px] md:text-[22px] font-semibold text-white active:scale-95 transition-transform"
          >
            VickyJay<span className="text-mint">.</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 font-clash text-[14px] font-medium text-ice/70 transition-colors duration-300 hover:bg-ice/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.github.com/victorola-coder"
              target="_blank"
              rel="noreferrer"
              className="group hidden sm:inline-flex items-center gap-2 rounded-full border border-ice/15 px-4 py-2 font-clash text-[14px] font-medium text-ice/80 transition-all duration-300 hover:border-mint/60 hover:text-white"
            >
              <GhIcon className="h-[18px] w-[18px] opacity-80 transition-opacity group-hover:opacity-100" />
              GitHub
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-ice/15 text-ice"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={clsx(
                    "absolute left-0 top-0 h-[2px] w-full rounded bg-current transition-all duration-300",
                    open && "top-[5px] rotate-45"
                  )}
                />
                <span
                  className={clsx(
                    "absolute left-0 bottom-0 h-[2px] w-full rounded bg-current transition-all duration-300",
                    open && "bottom-[5px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-500",
            open ? "mt-2 max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="card flex flex-col p-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-clash text-[16px] text-ice/80 hover:bg-ice/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://www.github.com/victorola-coder"
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center gap-2 rounded-xl px-4 py-3 font-clash text-[16px] text-ice/80 hover:bg-ice/5 hover:text-white sm:hidden"
            >
              <GhIcon className="h-[18px] w-[18px]" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
