import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

const Bodycard = ({ handleLinkClick }) => {
  const handleClick = () => {
    handleLinkClick('Projects');
  };

  return (
    <div className="p-4 md:pl-8"> 
      <div className="overflow-hidden font-clash text-5xl md:text-7xl font-medium mb-10 mx-auto text-center">
        <div className="pb-4 md:pb-10">
          About Me
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-20 mx-auto md:ml-32 md:mr-32"> 
        <motion.div className='w-full md:w-1/3 relative'>
          <div className="relative pb-[75%] md:pb-[100%]">
            <Image
              src="/fancy.png"
              layout="fill"
              objectFit="cover"
              alt="Picture of the author"
            />
          </div>
        </motion.div>
        <div className='w-full md:w-2/3 pt-4 flex flex-col items-center md:items-start max-w-screen-md mx-auto'>
          <p className="text-xl text-center md:text-left"> 
            Hello! I&apos;m Adrian and I just graduated from Northwestern University with a Bachelor&apos;s in Computer Science,
            and now am currently pursuing a Master&apos;s of Computer Science at Northwestern University. I am experienced 
            as a web developer and machine learning engineer. My interests include machine learning, 
            weightlifting, and fashion. 
            I&apos;m very interested in deep learning research and its applications in other fields. Currently I am exploring machine learning 
            models for audio processing in lab. 
            Keep scrolling to see some of my projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bodycard;
