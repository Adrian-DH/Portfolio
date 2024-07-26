import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import { FiTerminal } from "react-icons/fi";
import Link from "next/link";
const RevealCards = ({handleLinkClick}) => {
    const handleClick = () => {
        handleLinkClick('Contact');
      };
  return (
    <section className="relative p-8 bg-white">
      <motion.div
        animate={{ rotate: 270 }}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-7xl mt-36  font-medium text-black"
        style={{ whiteSpace: "nowrap", transformOrigin: "left top" }}
      >
        My Projects
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <span className="block text-center text-xl font-medium mb-4 mt-5 text-black">
          Hover a card
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card
            title="Home Security Project"
            description="I built a home security system using a micro:bit, some sensors, and a lot of duct tape!"
            mediaSrc="/ceproj2.png"
            mediaType="image"
            linkHref="https://github.com/nu-ce346-student/f23-final-project-yuexi-adrian-dev.git"
          />
          <Card
            title="Music Video Generator"
            description="We built software that makes beautiful video accompaniments to any song!"
            mediaSrc="/bird.mp4"
            mediaType="video"
            linkHref="https://github.com/bobotamm/lyrical.git"
          />
          <Card
            title="SchoolSage"
            description="A web app to connect students to tutors in the Chicagoland area"
            mediaSrc="/sage1.png"
            mediaType="image"
            linkHref="https://github.com/392-f23/SchoolSage.git"
          />
          <Card
            title="Numericonicide"
            description="A fun platfomer game where you exterminate numbers in 8-bit style"
            mediaSrc="/numericonicide.png"
            mediaType="image"
            linkHref="https://github.com/rreichert01/Numericonicide.git"
          />
          <Card
            title="FurNitUre"
            description="A web app for college students to buy and sell furniture"
            mediaSrc="/furniture1.png"
            mediaType="image"
            linkHref="https://github.com/392-f23/FurNitUre.git"
          />
          <Card
            title="See More!"
            description="Click the link to see all of my GitHub"
            mediaSrc="/me.png"
            mediaType="image"
            linkHref="https://github.com/Adrian-DH"
          />
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <motion.div whileHover={{ scale: 1.20 }}>
          <Link onClick={handleClick} href="#Contact" className="flex justify-center text-black text-xl py-10 animate-pulse px-4 rounded text-center duration-500">
            <FiTerminal size={80} />
          </Link>
        </motion.div>
      </div>
      
    </section>
  );
};

const Card = ({ mediaSrc, mediaType, title, description, linkHref }) => {
  return (
    <motion.div whileHover="hover" className="w-full h-[300px] relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-xl mb-2 font-semibold text-white">{title}</h3>
        <p className="text-sm font-light text-slate-300">{description}</p>
      </div>
      {mediaType === "image" ? (
        <motion.div
          initial={{
            top: "0%",
            right: "0%",
          }}
          variants={{
            hover: {
              top: "50%",
              right: "50%",
            },
          }}
          className="absolute inset-0 bg-slate-200 z-10"
          style={{
            backgroundImage: `url(${mediaSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <motion.div
          initial={{
            top: "0%",
            right: "0%",
          }}
          variants={{
            hover: {
              top: "50%",
              right: "50%",
            },
          }}
          className="absolute inset-0 bg-slate-200 z-10"
        >
          <video
            src={mediaSrc}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </motion.div>
      )}
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-indigo-500 transition-colors"
      >
        <div className="flex items-center">
          <span className="text-xs">GitHub</span>
          <FiArrowUpRight className="text-lg" />
        </div>
      </a>
    </motion.div>
  );
};

export default RevealCards;
