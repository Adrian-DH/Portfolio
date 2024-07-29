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
  
  const [activeSection, setActiveSection] = useState('');

  const handleLinkClick = (section) => {
    setActiveSection(section);
  };
  return (
    <main className="">
        <div id="Home" className="relative  flex min-h-screen flex-col justify-center bg-black sm:py-12">
          <Header />
          <NavBar  handleLinkClick={handleLinkClick}/>
          <div className="group relative">
            <div className="flex flex-col w-full z-10 overflow-y-auto scroll-smooth text-white">
              <div id = "About" className="min-h-screen w-full pt-14">
              <Bodycard handleLinkClick={handleLinkClick}/>
          
              </div>
              <div id="Projects"   className="min-h-screen w-full pt-10  bg-black">
              <RevealCards handleLinkClick={handleLinkClick}/>
          
              </div>
              <div id='Contact' className="min-h-screen w-full  pt-20  bg-black">
              <div className="overflow-hidden font-clash text-5xl md:text-7xl font-medium mb-10 mx-auto text-center">
              <div className="pb-4 md:pb-10">
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
