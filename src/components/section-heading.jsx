import Reveal from "./reveal";

const SectionHeading = ({ eyebrow, title, sub, emoji, align = "left" }) => {
  const center = align === "center";
  return (
    <Reveal className={center ? "flex flex-col items-center text-center" : ""}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title mt-3">
        {title}
        {emoji && (
          <span className="ml-3 inline-block text-[0.6em] animate-bounce" aria-hidden>
            {emoji}
          </span>
        )}
      </h2>
      {sub && <p className={`section-sub mt-4 ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
};

export default SectionHeading;
