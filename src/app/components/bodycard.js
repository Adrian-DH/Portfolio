import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

const Bodycard = ({ handleLinkClick }) => {
  const handleClick = () => {
    handleLinkClick('Projects');
  };

  return (
    <div className="pl-8"> 
      <div className="overflow-hidden font-clash text-7xl font-medium mb-10 ml-32">
        <div className= "pb-10">
          About Me
        </div>
      </div>
      <div className="flex items-start space-x-20 ml-32"> 
        <motion.div whileHover={{ scale: 1.20 }} className='w-1/4 min-h-[40vh] relative'>
          <Image
            src="/silly.png"
            layout="fill"
            objectFit="cover"
            alt="Picture of the author"
          />
        </motion.div>
        <div className='w-1/3 pt-4 flex flex-col items-center'>
          <p className="text-xl"> 
            Hello! I&apos;m Adrian and I just graduated from Northwestern University with a Bachelor&apos;s in Computer Science,
            and now am currently pursuing a Master&apos;s of Computer Science at Northwestern University. I am experienced 
            as a web developer and machine learning engineer. My interests include machine learning and deep neural networks, 
            weightlifting, and fashion. I am currently exploring machine learning applications for audio processing.
            Click the prompt icon to check out some of my projects!
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <motion.div whileHover={{ scale: 1.20 }}>
          <Link onClick={handleClick} href="#Projects" className="flex justify-center text-white text-xl py-10 animate-pulse px-4 rounded text-center duration-500">
            <FiTerminal size={80} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Bodycard;
