import { useState } from "react";
import { motion, useAnimate } from "framer-motion";

interface NavLink {
  title: string;
  url: string;
}

const MobileNav = ({
  navLinks,
  belowFold,
}: {
  navLinks?: NavLink[];
  belowFold: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const handleMenuClick = async () => {
    setIsOpen(!isOpen);

    // Button naimation
    if (isOpen) {
      // If menu is open, animate back to closed state
      await Promise.all([
        animate("#top", { rotate: "0deg" }),
        animate("#btm", { rotate: "-0deg" }),
      ]);
      await Promise.all([
        animate("#top", { y: "0.0rem" }),
        animate("#btm", { y: "-0.0rem" }),
      ]);
    } else {
      // If menu is closed, animate to open state
      await Promise.all([
        animate("#top", { y: "0.45rem" }),
        animate("#btm", { y: "-0.45rem" }),
      ]);
      await Promise.all([
        animate("#top", { rotate: "45deg" }),
        animate("#btm", { rotate: "-45deg" }),
      ]);
    }
  };

  return (
    <>
      <div
        className="flex flex-col justify-between items-center w-12 h-12 py-4 px-2 z-[101]"
        onClick={handleMenuClick}
        ref={scope}
      >
        <div
          id="top"
          className={`w-full h-0.5 rounded-xl ${
            !belowFold ? "bg-white" : "bg-black"
          } `}
        />
        <div
          id="mid"
          className={`w-full h-0.5 rounded-xl transition duration-200 ${
            !belowFold ? "bg-white" : "bg-black"
          } ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <div
          id="btm"
          className={`w-full h-0.5 rounded-xl ${
            !belowFold ? "bg-white" : "bg-black"
          }`}
        />
      </div>
      <div
        className={`fixed top-0 left-0 transition duration-300 z-[ 100] ${
          isOpen ? "w-full h-screen" : "h-0 w-full"
        }`}
      >
        <Index />
      </div>
    </>
  );
};

export default MobileNav;

function Index() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,

      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,

      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      className="absolute top-0 left-[99px] w-[100px] h-[100%]"
      style={{ fill: "rgb(41,41,41)", stroke: "none" }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}
