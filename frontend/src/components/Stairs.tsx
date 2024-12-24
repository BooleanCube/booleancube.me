"use client";

import React from "react";
import { motion } from "framer-motion";

const totalSteps = 6;

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
}

const reverseIndex = (index: number) => {
  return totalSteps - index - 1;
}

const Stairs: React.FC = () => {
  return (
    <>
      {[...Array(totalSteps)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial" animate="animate" exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-background-700 relative"
          />
        )
      })}
    </>
  )
};

export default Stairs;