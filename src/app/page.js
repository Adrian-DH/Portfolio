import Header from "./components/header";
import Image from 'next/image'
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
        <div id="tag1" className="relative z-10 flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 bg-gradient-to-tr from-pink-500 bg-[length:100%_calc(100%-100vh+5px)] bg-no-repeat py-6 [--tw-gradient-from:rgb(236_72_153)50%] [--tw-gradient-to:rgb(255_255_255)50%] after:fixed after:inset-0 after:top-1.5 after:-z-10 after:bg-black sm:py-12">
          <Header />
          <div className="group relative h-screen">
          <div className="flex flex-col w-full items-start snap-y snap-mandatory overflow-y-auto scroll-smooth">
              <div className="pl-8"> 
                <div id="tag2" className="overflow-hidden font-clash text-7xl font-medium mb-10 ml-32">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ">
                  About Me
                  </div>
                </div>
                <div className="flex items-start space-x-20 ml-32"> 
                  <Image
                  src="/silly.png"
                  width={350}
                  height={350}
                  alt="Picture of the author"
                  />
                  <div>
                    <p className="text-lg w-96"> 
                    Hello! I'm Adrian and I just graduated Northwestern University with a Bachelor's in Computer Science,
                    and now am currently pursuing a Master's of Computer Science at Northwestern University. I am experienced 
                    as a web-developer and machine learning engineer. My interests include machine learning and deep neural networks, 
                    weightlifiting and fashion. Please feel free to reach out with any 
                    inquiries or opportunities, and while you are here, check out some of my work!
                    </p>
                    <Link href="#tag3" className="bg-white-500 mt-8 text-white text-xl py-2 animate-pulse px-4 rounded text-center flex items-center justify-center ">
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pl-8"> 
                <div id="tag2" className="overflow-hidden font-clash text-7xl font-medium mb-10 ml-32">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ">
                  About Me
                  </div>
                </div>
                <div className="flex items-start space-x-20 ml-32"> 
                  <Image
                  src="/silly.png"
                  width={350}
                  height={350}
                  alt="Picture of the author"
                  />
                  <div>
                    <p className="text-lg w-96"> 
                    Hello! I'm Adrian and I just graduated Northwestern University with a Bachelor's in Computer Science,
                    and now am currently pursuing a Master's of Computer Science at Northwestern University. I am experienced 
                    as a web-developer and machine learning engineer. My interests include machine learning and deep neural networks, 
                    weightlifiting and fashion. Please feel free to reach out with any 
                    inquiries or opportunities, and while you are here, check out some of my work!
                    </p>
                    <Link href="#tag3" className="bg-white-500 mt-8 text-white text-xl py-2 animate-pulse px-4 rounded text-center flex items-center justify-center ">
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
      </div>

    </main>
  );
}
