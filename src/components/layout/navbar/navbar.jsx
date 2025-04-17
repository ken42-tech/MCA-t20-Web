"use client";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./data";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <div className="bg-transparent  w-full z-50  absolute top-2 md:top-5 xl:top-10 section-width">
      <nav className="w-full sm:py-4 px-8 md:px-20 xl:px-32 flex items-center justify-between ">
        {/* Logo Section */}
        <div className="flex-shrink-0">
        <Link href="/">
            <Image
              src={"/images/home/logo.svg"}
              alt="logo"
              className="h-16 w-16 md:h-28 md:w-28"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <div className=" items-center justify-center gap-10 md:flex hidden ">
          <div className="flex flex-grow justify-center ">
            <ul className="flex items-center gap-5 lg:gap-10 bg-[#ffffff1f] px-5 xl:px-10 py-4 rounded-full">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className="text-white text-sm lg:text-lg"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:hidden block">
              <RxHamburgerMenu size={30}/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
