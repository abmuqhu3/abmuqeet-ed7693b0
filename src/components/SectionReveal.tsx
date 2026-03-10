import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "left" | "right" | "top" | "bottom";

const getVariants = (direction: Direction) => {
  const offset = 80;
  const map = {
    left: { x: -offset, y: 0 },
    right: { x: offset, y: 0 },
    top: { x: 0, y: -offset },
    bottom: { x: 0, y: offset },
  };
  const { x, y } = map[direction];
  return {
    hidden: { opacity: 0, x, y, scale: 0.97, filter: "blur(4px)" },
    visible: {
      opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.1,
      }
    },
  };
};

interface SectionRevealProps {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  delay?: number;
}

const SectionReveal = ({ children, direction = "bottom", className = "", delay = 0 }: SectionRevealProps) => {
  const variants = getVariants(direction);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
