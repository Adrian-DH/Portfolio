import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const RevealCards = ({ handleLinkClick }) => {
  const handleClick = () => {
    handleLinkClick('Contact');
  };

  return (
    <section className="relative p-8 bg-black">
      <div className="overflow-hidden font-clash text-5xl md:text-7xl font-medium mb-10 mx-auto text-center">
      <div className="pb-4 md:pb-10">
          My Projects
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <span className="block text-center text-xl font-medium text-white">
          Hover a card
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card
            title="Music Video Generator"
            description="Application that takes mp3 music files and generates a beutifuly synced music video to accompany it. Built using Flask and HTML/CSS."
            mediaSrc="/bird.mp4"
            mediaType="video"
            linkHref="https://github.com/bobotamm/lyrical.git"
          />
          <Card
            title="SchoolSage"
            description="A web app to connect students to tutors in the Chicagoland area. Allows users to sign up and post their skills to be matched with potential tutors. Built using React and Firestore."
            mediaSrc="/sage1.png"
            mediaType="image"
            linkHref="https://github.com/392-f23/SchoolSage.git"
          />
          <Card
            title="Home Security Project"
            description="A home security system built using a micro:bit, some sensors, and a lot of duct tape! Features a fingerprint scanner, audio alarm, reed switch and more. Built with a breadboard and coded in C and assembly"
            mediaSrc="/ceproj2.png"
            mediaType="image"
            linkHref="https://github.com/nu-ce346-student/f23-final-project-yuexi-adrian-dev.git"
          />
          <Card
            title="See More!"
            description="Click the link to see all of my projects on GitHub"
            mediaSrc="/gith.png"
            mediaType="image"
            linkHref="https://github.com/Adrian-DH"
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ mediaSrc, mediaType, title, description, linkHref }) => {
  return (
    <motion.div whileHover="hover" className="w-full h-[400px] relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-white">
        <h3 className="text-xl mb-2 font-semibold text-black">{title}</h3>
        <p className="text-sm  text-black">{description}</p>
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
