"use client";
import React, { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import pathname

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (nav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Only trigger animation on the homepage
    if (isHomePage) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false); // Prevent animation on other pages
    }
  }, [nav, isHomePage]);

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.9,
      },
    },
  };

  return (
    <motion.div
      initial={isHomePage ? { opacity: 0, y: -50 } : false}
      animate={isHomePage && isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-transparent sm:bg-black/20 z-50 text-white flex justify-between p-4 items-center sm:px-12 px-6 w-full absolute top-0 left-0"
    >
      <a href="/">
        <h1 className="text-2xl font-bold cursor-pointer">
          JOSHBIM
          <span className="text-[#F6DB31] text-4xl">.</span>
        </h1>
      </a>

      {/* Desktop Nav */}
      <div className="hidden sm:flex flex-row gap-9 font-semibold items-center cursor-pointer">
        <Link href="/" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F6DB31] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Home
        </Link>
        <a href="/about" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F6DB31] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          About
        </a>
        <a href="/service" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F6DB31] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Services
        </a>
        <a href="/contact" className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#F6DB31] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Contact
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden z-30">
        {nav ? (
          <IoCloseOutline size={30} onClick={() => setnav(false)} />
        ) : (
          <CiMenuBurger size={30} onClick={() => setnav(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {nav && (
          <motion.div
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit="exit"
            className="h-screen bg-black text-white w-full top-0 left-0 overflow-hidden z-20 fixed flex flex-col justify-center items-center gap-4"
          >
            <div className="flex flex-col gap-6 font-bold text-2xl">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: 1 } }}
              >
                <Link href="/" onClick={() => setnav(false)}>
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: 0.8 } }}
              >
                <a href="/about" onClick={() => setnav(false)}>
                  About
                </a>
              </motion.div>
              <motion.div
                initial={{ y: 90, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: 0.6 } }}
              >
                <a href="/service" onClick={() => setnav(false)}>
                  Services
                </a>
              </motion.div>
              <motion.div
                initial={{ y: 90, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                exit={{ opacity: 0, y: 90, transition: { ease: "easeInOut", delay: 0.4 } }}
              >
                <a href="/contact" onClick={() => setnav(false)}>
                  Contact
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
