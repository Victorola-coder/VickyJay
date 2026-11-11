import { motion } from "framer-motion";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { SERVICES_DATA } from "../constants/data";

const ICONS = {
  Design: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  DevOps: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01M12 7.5h5M12 16.5h5" />
    </svg>
  ),
  Engineering: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
      <path d="M14 4l-4 16" />
    </svg>
  ),
};

const Services = () => {
  return (
    <section id="services" className="section-x mt-28 scroll-mt-28 lg:mt-40">
      <SectionHeading
        eyebrow="What I do"
        title="Services"
        emoji="🔥"
        sub="I design the experience, build the systems behind it, and keep them running."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {SERVICES_DATA.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 0.1}
            className={index === SERVICES_DATA.length - 1 && SERVICES_DATA.length % 2 === 1 ? "md:col-span-2 lg:col-span-1" : ""}
          >
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="card card-hover group h-full overflow-hidden p-7 md:p-10"
            >
              {/* corner glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-mint/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-mint/25 bg-mint/10 text-mint">
                  {ICONS[service.title] ?? ICONS.Engineering}
                </span>
                <span className="font-mono text-[12px] tracking-[0.2em] text-ice/40">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-8 font-clashbold text-[26px] font-semibold uppercase tracking-wide text-white md:text-[32px]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[460px] font-pop text-[15px] leading-relaxed text-ice/65 md:text-[17px]">
                {service.description}
              </p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Services;
