"use client";

import Logo from "./Logo";
import NavItems from "./NavItems";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect, use } from "react";

const NavWrap = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [belowFold, setBelowFold] = useState(false);

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
  });

  return (
    <>
      <motion.div
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
          <Logo text={"BARDI"} />
          <div className="flex justify-between">
            <NavItems position={belowFold} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default NavWrap;
