import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { FiTerminal } from "react-icons/fi";

const Bodycard = ({ handleLinkClick }) => {
  const handleClick = () => {
    handleLinkClick('Projects');
  };

  return (
    <div className="p-4 md:pl-8 mx-auto md:ml-32 md:mr-32">
      <div className="overflow-hidden font-clash text-5xl md:text-7xl font-medium mb-10 mx-auto text-center text-white">
        <div className="pb-4 md:pb-10">
          About Me
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-16">
        <div className="w-full lg:w-7/12 flex flex-col space-y-4">
          <motion.div className='w-full relative'>
            <div className="relative mx-auto" style={{ maxWidth: '500px', maxHeight: '500px' }}>
              <Image
                src="/fancy.png"
                layout="responsive"
                width={500}
                height={500}
                objectFit="cover"
                alt="Picture of the author"
                className="rounded-lg"
              />
            </div>
          </motion.div>
          <div className='pt-4 flex flex-col items-center md:items-start max-w-screen-md mx-auto'>
            <p className="text-xl text-center md:text-left font-bold text-white"> 
              Hello! I&apos;m Adrian and I just graduated from Northwestern University with a Bachelor&apos;s in Computer Science,
              and now am currently pursuing a Master&apos;s of Computer Science at Northwestern University. I am experienced 
              as a web developer and machine learning engineer. My interests include machine learning, 
              weightlifting, and fashion. 
              I&apos;m very interested in deep learning  and algorithmic research and its applications in other fields. Currently I am exploring machine learning 
              models for audio processing in lab. 
              Click on the link below to access my resume!
            </p>
            <Link href="/resume.pdf"  className="mt-6 flex justify-center  text-lg text-white-500 hover:text-indigo-300 underline text-center  items-center" target="_blank" rel="noopener noreferrer">
            View my resume
              
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-5/12 lg:ml-10 mt-10 lg:mt-0">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-bold text-white mb-1 sm:mb-0">Currently</div>
            <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">July, 2024</time>
              <div className="text-xl font-bold text-white">Research Assistant @ Northwestern Audio Lab</div>
            </div>
            <div className="text-slate-300">I am currently doing research inside of the interactive audio lab, with the foucs of my work being implementing encoder-decoder transformer based models for audio watermarking.</div>
            <li>PyTorch, Python, NumPy, Linux</li>
          </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-bold text-white mb-1 sm:mb-0">Education</div>
            <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">June, 2024</time>
              <div className="text-xl font-bold text-white">Finished Bachelor&apos;s @ Northwestern University</div>
            </div>
            <div className="text-slate-300">Graduated from the Weinberg School of Arts and Sciences with a Bachelor&apos;s in Computer Science and planning to complete my Master&apos;s in Computer Science by June 2025</div>
            <li>Member of Northwestern Blockchain Club</li>
            <li>GPA: 3.78/4.0</li>
            
            </div>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-bold text-white mb-1 sm:mb-0">Internship</div>
            <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">June, 2023</time>
              <div className="text-xl font-bold text-white">Software Engineering Intern @ Publicis Sapient</div>
            </div>
            <div className="text-slate-300">Developed and deployed financial services webapp that tracks users&apos; spending and offers financial insights. In charge of Frontend and API routing.</div>
            <li>React, JS, MongoDB, AWS</li>
          </div>
          
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-bold text-white mb-1 sm:mb-0">Teaching</div>
            <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-22 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">March, 2023</time>
              <div className="text-xl font-bold text-white">Peer Mentor @ Northwestern University</div>
            </div>
            <div className="text-slate-300">Held in-person office hours for CS 348: Introduction to Artificial Intelligence with 300+ students. Topics covered include search algorithms (DFS, BFS, A*), stochastic networks (Bayesian), and intelligent agents (Min-Max)  </div>
            <li>Python </li>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Bodycard;
