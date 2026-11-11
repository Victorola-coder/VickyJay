import { motion } from "framer-motion";
import Socials from "./socials";
import { Arrow } from "./svgs";

const STATS = [
  { value: "3+", label: "Years shipping" },
  { value: "15+", label: "Products built" },
  { value: "Full", label: "Stack: UI to API" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <section className="section-x relative mx-auto pt-[112px] md:pt-[140px] lg:pt-[168px]">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mint"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-mint animate-ping2" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            Available for new work
          </motion.span>

          <motion.h1
            variants={item}
            className="gradientText mt-6 font-clashbold font-semibold text-[40px] leading-[1.02] tracking-[-0.02em] sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px]"
          >
            Creative
            <br className="hidden sm:block" />
            Fullstack Engineer.
          </motion.h1>

          <motion.p
            variants={item}
            className="gradientText mt-6 max-w-[560px] font-pop text-[16px] font-medium leading-relaxed md:text-[19px]"
          >
            I&apos;m Victor. I craft solid, scalable products end to end, from
            reliable APIs and services to polished, performant interfaces that
            people enjoy using.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              See my work
              <Arrow className="h-4 w-4 [&_path]:stroke-ink" />
            </a>
            <a href="#contact" className="btn-ghost">
              Let&apos;s talk
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 grid w-full max-w-[520px] grid-cols-3 gap-4 border-t border-line pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-clashbold text-[26px] leading-none text-white md:text-[32px]">
                  {s.value}
                </p>
                <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ice/50">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <Socials />
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative mx-auto w-full max-w-[340px] lg:max-w-[420px] lg:justify-self-end"
        >
          {/* glow */}
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-mint/20 blur-3xl" />
          {/* offset frame */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] border-2 border-mint/70 md:translate-x-5 md:translate-y-5" />
          <div className="group relative aspect-square overflow-hidden rounded-[28px] border border-line bg-card animate-float">
            <img
              src="/images/ovt.jpeg"
              alt="Portrait of Victor Olatunji"
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="font-clashbold text-[18px] leading-none text-white">Victor Olatunji</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-mint">
                  VickyJay
                </p>
              </div>
              <span className="chip">Lagos, NG</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="mt-16 hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ice/40 transition-colors hover:text-mint md:inline-flex"
      >
        <span className="relative block h-10 w-px overflow-hidden bg-ice/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[float_2s_ease-in-out_infinite] bg-mint" />
        </span>
        Scroll
      </a>
    </section>
  );
};

export default Hero;
