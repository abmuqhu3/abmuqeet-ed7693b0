import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "left" | "right" | "top" | "bottom";

const getVariants = (direction: Direction) => {
  const offset = 120;
  const map = {
    left: { x: -offset, y: 0 },
    right: { x: offset, y: 0 },
    top: { x: 0, y: -offset },
    bottom: { x: 0, y: offset },
  };
  const { x, y } = map[direction];
  return {
    hidden: { opacity: 0, x, y, scale: 0.95 },
    visible: { 
      opacity: 1, x: 0, y: 0, scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        staggerChildren: 0.1 
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
      viewport={{ once: true, margin: "-50px" }}
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
