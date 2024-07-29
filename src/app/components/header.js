import Link from "next/link";

const Header = () => {
  return (
    <div className={`fixed z-50 top-0 right-0 p-2 md:p-6 w-full flex justify-end  'text-white'`}>
      <h2 className={`text-lg sm:text-xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight text-right text-white`}>
        <Link href="#tag1" className="hover:underline">
          Adrian Hoffer
        </Link>
        <p className={`text-right text-xs sm:text-sm mt-1 md:mt-2 md:pl-3 text-white`}>Software Engineer</p>
      </h2>
    </div>
  );
};

export default Header;
