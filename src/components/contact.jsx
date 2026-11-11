import { useState } from "react";
import toast from "react-hot-toast";
import Reveal from "./reveal";
import Socials from "./socials";
import { EMAIL, PHONE } from "../constants/socials";
import { LocationIcon, MailIcon, PhoneIcon } from "./svgs";

const getTimeOfDay = () => {
  const h = new Date().getHours();
  if (h >= 6 && h < 12) return "morning";
  if (h >= 12 && h < 18) return "afternoon";
  return "evening";
};

const WHEREABOUTS = {
  morning: "metaverse ⚡",
  afternoon: "localhost:3000",
  evening: "127.0.0.1:5500",
};

const Contact = () => {
  const [timeOfDay] = useState(getTimeOfDay);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const items = [
    {
      Icon: MailIcon,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      Icon: PhoneIcon,
      label: "Phone",
      value: PHONE,
      href: `tel:${PHONE}`,
    },
    {
      Icon: LocationIcon,
      label: `This ${timeOfDay}, find me at`,
      value: WHEREABOUTS[timeOfDay],
    },
  ];

  return (
    <section id="contact" className="section-x mt-28 scroll-mt-28 lg:mt-40">
      <Reveal>
        <div className="card relative overflow-hidden px-5 py-12 text-center sm:px-6 md:px-12 md:py-20">
          {/* glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-mint/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-ice/10 blur-3xl" />

          <span className="eyebrow justify-center">Say hello 👋</span>
          <h2 className="section-title mx-auto mt-4 max-w-[820px] [text-wrap:balance] md:text-[52px] lg:text-[64px]">
            Have an idea? Let&apos;s build it
            <span className="text-mint">.</span>
          </h2>
          <p className="section-sub mx-auto mt-5 text-center">
            I can help you design, improve or build the product experience for
            your new or existing product. My inbox is open.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${EMAIL}`} className="btn-primary">
              Email me
            </a>
            <button type="button" onClick={copyEmail} className="btn-ghost">
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>

          <div className="mx-auto mt-12 grid max-w-[900px] gap-4 border-t border-line pt-10 sm:grid-cols-3">
            {items.map(({ Icon, label, value, href }) => {
              const Wrapper = href ? "a" : "div";
              return (
                <Wrapper
                  key={label}
                  {...(href ? { href } : {})}
                  className="group flex flex-col items-center gap-3 rounded-xl p-4 transition-colors hover:bg-ice/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ice/15 bg-ink text-ice transition-colors group-hover:border-mint/50">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ice/40">
                    {label}
                  </span>
                  <span className="break-all font-pop text-[15px] font-medium text-ice/85 group-hover:text-white">
                    {value}
                  </span>
                </Wrapper>
              );
            })}
          </div>

          <Socials className="mt-10 justify-center" />
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
