import Link from "next/link";
const Header = () => {
    return (
      <div className="flex justify-between items-center mb-20 mt-8 p-4 ">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight ml-8">
          <Link href="#tag1" className="hover:underline">
            Adrian Hoffer
          </Link>
          <p className="md:text-left text-lg mt-3 md:pl-5">Software Engineer</p>
        </h2>
        <nav className="flex space-x-4 mr-8">
          <Link href="#tag2" className="md:text-left text-lg mt-3 hover:underline">
            About
          </Link>
          <Link href="/blog" className="md:text-left text-lg mt-3 hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="md:text-left text-lg mt-3 hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    );
  };
  
export default Header;
