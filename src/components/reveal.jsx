import { motion } from "framer-motion";

/**
 * Fade + rise into view once, when the element enters the viewport.
 * Wrap any block; pass `delay` (seconds) to stagger siblings.
 */
const Reveal = ({ children, delay = 0, y = 24, className, as = "div" }) => {
  const Tag = motion[as] ?? motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
