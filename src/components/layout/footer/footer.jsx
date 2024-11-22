import Image from "next/image";
import Link from "next/link";
import "./style.css";

const Footer = () => {
  return (
    < div className="bg">
      
      <div className="text-[#BCC3D7] px-32">
        <div className="section-width py-10 lg:py-14">
          <div className="lg:flex justify-between lg:gap-12 max-lg:space-y-12">
            
            <div className="max-w-md">
              <Image
                src="/images/home/logo.svg"
                alt="TSquaredC Logo"
                width={120}
                height={40}
                className="mb-6"
              />
              <p className="not-italic text-sm text-[#BCC3D7] mb-4">
                TSquaredC Ltd.<br />
                161, Basavanagar,<br />
                Bangalore, Karnataka.
              </p>

              <div className="flex gap-4">
                <Link href="#">
                  <Image
                    src="/images/footer/linkedin.svg"
                    width={24}
                    height={24}
                    alt="LinkedIn"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/footer/twitter.svg"
                    width={24}
                    height={24}
                    alt="Twitter"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/footer/discord.svg"
                    width={24}
                    height={24}
                    alt="Discord"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/footer/zoom.svg"
                    width={24}
                    height={24}
                    alt="Zoom"
                  />
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:flex lg:gap-12 space-y-8 lg:space-y-0">
              {/* Product Links */}
              <div>
                <h6 className="text-white text-sm font-semibold mb-4">
                  Product
                </h6>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-[#BCC3D7] hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#BCC3D7] hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#BCC3D7] hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#BCC3D7] hover:text-white">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#BCC3D7] hover:text-white"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div>
                <h6 className="text-white text-sm font-semibold mb-4">
                  Company
                </h6>
                <ul className="space-y-3">
                  <li>
                    <Link href="#" className="text-[#BCC3D7] hover:text-white">
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#BCC3D7] hover:text-white">
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#BCC3D7] hover:text-white">
                      Values
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#BCC3D7] hover:text-white">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#5F5F5FB2] px-32"></div>
      {/* Bottom Bar */}
      <div className="px-32">
        <div className="section-width flex flex-col md:flex-row justify-between items-center py-4 text-sm text-[#BCC3D7]">
          <span>© 2024 TSquaredC | All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
