import { useState } from 'react';
import Link from "next/link";

const Header = ({ activeSection }) => {
  return (
    <div className={`fixed z-50 top-0 right-0 p-10 w-full flex justify-end ${activeSection === 'Projects' ? 'text-black' : 'text-white'}`}>
      <h2 className={`text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight md:text-right ${activeSection === 'Projects' ? 'text-black' : 'text-white'}`}>
        <Link href="#tag1" className="hover:underline">
          Adrian Hoffer
        </Link>
        <p className={`md:text-right text-lg mt-3 md:pl-5 ${activeSection === 'Projects' ? 'text-black' : 'text-white'}`}>Software Engineer</p>
      </h2>
    </div>
  );
};

export default Header;
