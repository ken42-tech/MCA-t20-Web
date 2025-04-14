"use client";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./data";


const Navbar = () => {
  return (
    <div className="bg-transparent  top-0 w-full z-50 px-28 ">
      <nav className="w-full py-4 px-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src={"/images/home/logo.svg"}
            alt="logo"
            className="h-w-28 w-28"
            width={50}
            height={50}
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-10">
          <div className="hidden lg:flex flex-grow justify-center ">
            <ul className="flex items-center gap-10 bg-[#ffffff1f] px-10 py-4 rounded-full">
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

          {/* Get Started Button */}
          <div className="flex-shrink-0">
            <Link
              href="/about"
              className="btn  text-white px-6 py-4 bg-[#E07E27] rounded-full"
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
