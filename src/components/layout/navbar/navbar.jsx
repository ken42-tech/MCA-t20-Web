"use client";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./data";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="bg-transparent z-50 absolute top-[5%] w-full">
      <nav className="flex justify-between items-center container mx-auto section-width">
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

        {/* Navigation Links */}
        <div className="items-center md:flex hidden">
          <div className="flex justify-center">
            <ul className="flex items-center justify-between gap-5 lg:gap-10 bg-[#ffffff1f] px-5 xl:px-10 py-4 rounded-full">
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

        {/* Mobile Menu Icon - Only visible on mobile */}
        <div className="md:hidden">
          <RxHamburgerMenu className="text-white text-2xl" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;