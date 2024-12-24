"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageLoader = ({ children }: {children: React.ReactNode}) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <div key={location.pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-background top-0 pointer-events-none z-30"
        />
        {children}
      </div>
    </AnimatePresence>
  )
};

export default PageLoader;