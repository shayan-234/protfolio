import { type ReactNode } from "react"
import { motion } from "motion/react"

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  viewportAmount?: number;
  className?: string;
}

export function FadeInView({
  children,
  delay = 0,
  y = 20,
  duration = 0.5,
  viewportAmount = 0.3,
  className,
}: FadeInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
