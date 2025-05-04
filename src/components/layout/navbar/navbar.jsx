"use client";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./data";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-transparent z-50 absolute top-[20px] w-full">
      <nav className="flex justify-between items-center  section-width">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          {!menuOpen && (
            <Link href="/">
              <Image
                src={"/images/home/logo.svg"}
                alt="logo"
                className="h-16 w-16 md:h-28 md:w-28"
                width={50}
                height={50}
              />
            </Link>
          )}
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
  
<a href="https://mca-dev-auction.ken42.com/admin/team-details"  className="px-4 py-2 md:px-6 md:py-3   rounded-full   text-white text-sm md:text-base text-center cursor-pointer flex gap-4 items-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #142A7C -11.26%, #344CA2 44.6%, #243FA3 100.45%)",
                  }}           >  Live Auction<span>
                             
                            <Image
                              src="/images/home/hero/buttonIcon.svg"
                              alt="button-icon"
                              width={24}
                              height={24}
                              className="w-5 h-5"
                            />
                          </span></a>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Icon - Only visible on mobile */}
        <div className="md:hidden">
          <RxHamburgerMenu
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-[#0F0F0F] z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5">
          <Image
            src="/images/home/logo.svg"
            width={80}
            height={80}
            alt="logo"
          />
          <RxCross2
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 mt-10 px-6">
          {navLinks.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className="text-white text-base"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Optional Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
