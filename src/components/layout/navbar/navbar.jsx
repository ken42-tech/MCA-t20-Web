"use client";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./data";

const Navbar = () => {
  return (
    <div className="bg-transparent fixed top-0 w-full z-50">
      <nav className="w-full px-6 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src={"/images/home/logo.svg"}
            alt="logo"
            className="h-auto w-auto"
            width={120}
            height={60}
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center pl-8">
          <ul className="flex items-center gap-6 bg-black px-8 py-4 rounded-full">
            {navLinks.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className="text-white text-sm lg:text-base"
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
            href="/get-started"
            className="btn btn-blue text-white px-6 py-2 bg-blue-700 rounded-full"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
