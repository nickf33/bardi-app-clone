"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Logo from "./Logo";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const navLinks = [
  { title: "Products", url: "#products" },
  { title: "Solutions", url: "#solutions" },
  { title: "Support", url: "#support" },
  { title: "Contact Us", url: "#contact" },
];

export default function NavigationWrap() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [belowFold, setBelowFold] = useState(false);
  const switchWidth = 767;
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    if (scrollY.get() > viewportHeight) {
      setBelowFold(true);
    } else {
      setBelowFold(false);
    }
  }, [scrollY]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= switchWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [switchWidth]);

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 w-full h-16 z-[999] ${
          belowFold ? "bg-white" : "bg-transparent"
        }`}
      >
        <div
          className={`w-[90%] max-w-custom h-full mx-auto flex justify-between items-center`}
        >
          <Logo text="BARDI" />
          {isMobile ? (
            <NavMobile navLinks={navLinks} belowFold={belowFold} />
          ) : (
            <NavDesktop navLinks={navLinks} belowFold={belowFold} />
          )}
        </div>
      </motion.nav>
    </>
  );
}
