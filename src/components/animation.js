import React from "react"
import { motion } from "framer-motion"

const list = {
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.05,
      staggerChildren: 0.1,
      duration: 0.05,
    },
  },
  init: {
    opacity: 0,
  },
}

const item = {
  open: {
    y: 0,
    opacity: 1,
  },
  init: {
    y: 10,
    opacity: 0,
  },
}

const AnimatedParent = ({ children }) => (
  <motion.div
    initial="init"
    animate="open"
    variants={list}
  >
    {children}
  </motion.div>
)

const AnimatedItem = ({ children }) => (
  <motion.div
    variants={item}
  >
    {children}
  </motion.div>
)

export {
  AnimatedItem,
  AnimatedParent,
}
