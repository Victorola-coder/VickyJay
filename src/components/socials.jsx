import { motion } from "framer-motion";
import { SOCIALS } from "../constants/socials";

const Socials = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ name, href, Icon }) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          title={name}
          whileTap={{ scale: 0.9 }}
          className="social-btn"
        >
          <Icon fill="currentColor" className="h-[18px] w-[18px]" />
        </motion.a>
      ))}
    </div>
  );
};

export default Socials;
