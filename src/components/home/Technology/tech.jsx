"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Technology = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      image: "/images/home/tech/f1.png",
      title: "TurboSend",
      description:
        "Instantly deploy powerful chat functionalities built for scalability and real-time performance. No delays, just results.",
    },
    {
      image: "/images/home/tech/f2.png",
      title: "TurboAuth",
      description:
        "From Google to OAuth, we integrate every major SSO option, ensuring secure, seamless access for all users.",
    },
    {
      image: "/images/home/tech/f3.png",
      title: "TurboStream",
      description:
        "Deliver video content without lag or interruptions. TurboStream powers your platform with flawless video performance.",
    },
    {
      image: "/images/home/tech/f4.png",
      title: "TurboCloud",
      description:
        "Monitor, optimize, and scale your cloud infrastructure effortlessly. TurboCloud ensures your system runs at peak efficiency.",
    },
  ];

  // Set state to true when component is mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Autoplay effect to change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null; // Don't render the component until it's mounted on the client

  return (
    <div className="bg-black pb-10 pt-10">
      <div className="text-center py-12">
        <h2 className="text-transparent bg-clip-text bg-text-gradient mb-4">
          Technology, Turbocharged
        </h2>
        <p className="text-[#909DC1] max-w-2xl mx-auto">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nulla velit, maximus sit amet suscipit in, fermentum id est.
          Suspendisse consequat ornare elit.”
        </p>
      </div>

      {/* Display only one card at a time for mobile */}
      <div className="w-full md:hidden">
        <div className="relative">
          <div className="flex justify-center items-center">
            {/* Display only the active slide */}
            <div
              key={activeSlide}
              className="w-[80%] sm:w-[350px] md:w-[400px] xl:w-[500px] rounded-xl text-white text-center border border-gray-700 flex flex-col items-center relative"
            >
              <div className="mb-4">
                <Image
                  src={slides[activeSlide].image}
                  width={600}
                  height={300}
                  alt={slides[activeSlide].title}
                  className="shadow-lg w-full object-cover"
                />
              </div>
              <div className="px-4">
                <p className="text-left text-[20px]">
                  {slides[activeSlide].title}
                </p>
                <p className="text-color text-left mt-2 text-[16px] leading-tight">
                  {slides[activeSlide].description}
                </p>
                <p className="text-color text-left mt-4 mb-4">Check Now →</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden md:flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-20">
        {slides.map((slide, index) => (
          <div key={index} className="technology-card">
            <div className="rounded-xl text-white text-center border border-gray-700 flex flex-col items-center relative">
              <div className="mb-4">
                <Image
                  src={slide.image}
                  width={600}
                  height={300}
                  alt={slide.title}
                  className="shadow-lg"
                />
              </div>
              <div className="px-4">
                <p className="text-left text-[20px]">{slide.title}</p>
                <p className="text-color text-left mt-2 text-[16px] leading-tight">
                  {slide.description}
                </p>
                <p className="text-color text-left mt-4 mb-4">Check Now →</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
