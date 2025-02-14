"use client"

import { motion } from "framer-motion"
import type React from "react"

interface MotionTransitionProps {
  position: "top" | "bottom" | "left" | "right"
  className?: string
  children: React.ReactNode
}

export const MotionTransition = ({ position, className, children }: MotionTransitionProps) => {
  const variants = {
    initial: {
      opacity: 0,
      y: position === "top" ? -20 : position === "bottom" ? 20 : 0,
      x: position === "left" ? -20 : position === "right" ? 20 : 0,
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div variants={variants} initial="initial" animate="animate" className={className}>
      {children}
    </motion.div>
  )
}

