"use client"; // Mark this component as client-side only

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div
      
      className="p-2 bg-[#091912] text-white/75 w-full text-xl md:text-2xl"
    >
      <div className="p-5 sm:flex sm:flex-row sm:gap-6 mt-4 flex items-center">
        <motion.h6 initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        delay: 1.5, // Longer delay after page load
        ease: "easeInOut",
      }} className="text-xl md:text-2xl font-bold sm:w-2/3">
          With over
          <span className="text-[#F6DB31]"> 15+ years&nbsp;</span>
          of industry excellence, we are an integrated logistic firm specializing in
          <span className="text-[#F6DB31]"> Oil and Gas, </span>
          delivering tailored and comprehensive solutions for all your marine services and shipping needs.
        </motion.h6>
      </div>
    </div>
  );
};

export default Hero;
