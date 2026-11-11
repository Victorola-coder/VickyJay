import { motion } from "framer-motion";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";
import { Arrow } from "./svgs";
import { projects, sideProjects } from "../data/data";

const PLACEHOLDER_GRADIENTS = [
  "from-mint/30 via-card to-ice/10",
  "from-ice/20 via-card to-mint/20",
  "from-[#0fa858]/40 via-card to-card",
  "from-ice/10 via-mint/10 to-card",
];

const hostOf = (link) => {
  try {
    return new URL(link).hostname.replace(/^www\./, "");
  } catch {
    return link;
  }
};

const Thumb = ({ project, index }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.name} preview`}
        loading="lazy"
        draggable={false}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
    );
  }
  const g = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];
  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${g}`}>
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(207,250,255,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
      <span className="relative font-clashbold text-[64px] font-semibold leading-none text-white/90 transition-transform duration-700 group-hover:scale-110">
        {project.name.charAt(0)}
      </span>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const hasLink = Boolean(project.link);
  const Wrapper = hasLink ? motion.a : motion.div;
  const linkProps = hasLink
    ? { href: project.link, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
        <Thumb project={project} index={index} />
        {project.tag && (
          <span className="absolute left-3 top-3 rounded-full border border-mint/40 bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-mint backdrop-blur">
            {project.tag}
          </span>
        )}
        {hasLink && (
          <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-ice/15 bg-ink/70 text-ice backdrop-blur transition-all duration-300 group-hover:border-mint group-hover:bg-mint group-hover:[&_path]:stroke-ink">
            <Arrow className="h-4 w-4" />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-clashbold text-[20px] font-semibold text-white md:text-[22px]">
            {project.name}
          </h3>
          <span className="truncate font-mono text-[11px] text-ice/40">
            {hostOf(project.link)}
          </span>
        </div>
        <p className="mt-2 line-clamp-2 font-pop text-[14px] leading-relaxed text-ice/65 md:text-[15px]">
          {project.desc}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.lang.split("+").map((t) => (
            <span key={t.trim()} className="chip">
              {t.trim()}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-x mt-28 scroll-mt-28 lg:mt-40">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          emoji="👨‍🍳"
          sub="Real products for real users, across Africa and beyond. More cooking."
        />
        <Reveal delay={0.1}>
          <a
            href="https://www.github.com/victorola-coder"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            More on GitHub
            <Arrow className="h-4 w-4" />
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={(index % 3) * 0.08} className="h-full">
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Side quests"
          title="Games & experiments"
          emoji="🎮"
          sub="Things I build for fun, each one live on its own victorola.dev subdomain."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {sideProjects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 3) * 0.08} className="h-full">
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
