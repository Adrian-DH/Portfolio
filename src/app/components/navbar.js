import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const NavBar = ({ handleLinkClick }) => {
  return (
    <SimpleFloatingNav handleLinkClick={handleLinkClick} />
    
  );
};


const SimpleFloatingNav = ({ handleLinkClick }) => {
  return (
    <nav className="fixed left-[50%] z-50 top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-white bg-neutral-900 p-2 text-sm text-neutral-500">
      <NavLink href="#About" handleLinkClick={handleLinkClick} section="About">About</NavLink>
      <NavLink href="#Projects" handleLinkClick={handleLinkClick} section="Projects">Projects</NavLink>
      <NavLink href="#Contact" handleLinkClick={handleLinkClick} section="Contact">Contact</NavLink>
    </nav>
  );
};

const NavLink = ({ href, children, handleLinkClick, section }) => {
  const handleClick = () => {
    handleLinkClick(section);
  };
  return (
    <a onClick={handleClick} href={href} rel="nofollow" className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center text-white">{children}</span>
        <span className="flex h-[20px] items-center text-white">
          {children}
        </span>
      </motion.div>
    </a>
  );
};

const JoinButton = () => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}
    >
      Join waitlist
    </button>
  );
};
export default NavBar;