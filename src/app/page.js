'use client';

import { useEffect, useState } from 'react';
import Header from "./components/header";
import Image from 'next/image'
import Link from "next/link";
import Bodycard from "./components/bodycard";
import { motion, useScroll } from "framer-motion";
import { } from "react-icons/fi";
import NavBar from "./components/navbar";
import RevealCards from "./components/cards";
import LinkB from './components/links';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
  const [activeSection, setActiveSection] = useState('');

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };
  return (
    <main className="">
        <div id="Home" className="relative  flex min-h-screen flex-col justify-center bg-black sm:py-12">
          <Header activeSection={activeSection}/>
          <NavBar  handleLinkClick={handleLinkClick}/>
          <div className="group relative">
            <div className="flex flex-col w-full z-10 overflow-y-auto scroll-smooth text-white">
              <div id = "About" className="min-h-screen w-full pt-40 pb-40">
              <Bodycard handleLinkClick={handleLinkClick}/>
          
              </div>
              <div id="Projects"  onClick={() => handleLinkClick('tag3')} className="min-h-screen w-full pt-20 pb-40 bg-white">
              <RevealCards handleLinkClick={handleLinkClick}/>
          
              </div>
              <div id='Contact' className="min-h-screen w-full pt-52 pb-40 bg-black">
              <div className="overflow-hidden font-clash text-7xl font-medium mb-10 ml-40">
        <div className= "pb-10">
          Contact Me
        </div>
      </div>
                <LinkB/>
              </div>
              </div>
            </div>
        </div>

    </main>
  );
}
