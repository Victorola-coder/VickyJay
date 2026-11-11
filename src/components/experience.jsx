import Reveal from "./reveal";
import Resume from "./resume";
import SectionHeading from "./section-heading";
import resumeUrl from "../utils/ovt.pdf";
import { EXPERIENCE_DATA } from "../constants/data";

const isCurrent = (period = "") => /present/i.test(period);

const Experience = () => {
  return (
    <section id="experience" className="section-x mt-28 scroll-mt-28 lg:mt-40">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Sticky intro column */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Where I've been"
            title="Experience"
            emoji="🚀"
            sub="Teams I've shipped with, from early-stage products to live, in-production platforms."
          />
          <Reveal delay={0.15} className="mt-8">
            <Resume
              pdfUrl={resumeUrl}
              fileName="Victor Olatunji.pdf"
              buttonText="Download résumé"
            />
          </Reveal>
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-line pl-8 md:pl-10">
          {EXPERIENCE_DATA.map((exp, index) => {
            const current = isCurrent(exp.period);
            return (
              <li key={`${exp.company}-${index}`} className="relative pb-10 last:pb-0">
                {/* dot */}
                <span className="absolute -left-[calc(2rem+6px)] top-6 flex h-3 w-3 md:-left-[calc(2.5rem+6px)]">
                  {current && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-mint animate-ping2" />
                  )}
                  <span
                    className={`relative inline-flex h-3 w-3 rounded-full ${
                      current ? "bg-mint" : "bg-ice/30"
                    }`}
                  />
                </span>

                <Reveal delay={index * 0.08}>
                  <article className="card card-hover p-6 md:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <h3 className="font-clashbold text-[20px] font-semibold text-white md:text-[22px]">
                        {exp.company}
                      </h3>
                      <span
                        className={`chip ${
                          current ? "border-mint/40 bg-mint/10 text-mint" : ""
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 font-pop text-[14px] font-medium text-ice/60">
                      {exp.role}
                      {exp.subtext && (
                        <span className="text-ice/40"> · {exp.subtext}</span>
                      )}
                    </p>
                    <p className="mt-4 font-pop text-[15px] leading-relaxed text-ice/70 md:text-[16px]">
                      {exp.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
