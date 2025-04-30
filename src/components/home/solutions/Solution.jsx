"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TitleComponent from "@/components/common/TitleComponent";
const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef(null);

  // Partners data for the slider
  const partners = [
    {
      title: "OFFICIAL FANTASY GAME",
      image: "/images/home/sponsorship/image 66.svg",
      alt: "Dream11",
    },
    {
      title: "UMPIRE SPONSORS",
      image: "/images/home/sponsorship/image 67.svg",
      alt: "Skoda",
    },
    {
      title: "ASSOCIATE SPONSORS",
      images: [
        "/images/home/sponsorship/image 69.svg",
        "/images/home/sponsorship/image 70.svg",
      ],
      alts: ["Atul Projects", "Wardwiz"],
    },
    {
      title: "HYDRATION PARTNER",
      image: "/images/home/sponsorship/image 71.svg",
      alt: "Bisleri",
    },
    {
      title: "TICKETING PARTNER",
      image: "/images/home/sponsorship/image 74.svg",
      alt: "BookMyShow",
    },
  ];

  // Function to go to the next slide
  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Handle user interaction with the slider
  const handleInteractionStart = () => {
    setIsAutoPlaying(false);
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }
  };

  const handleInteractionEnd = () => {
    setIsAutoPlaying(true);
  };

  // Setup autoplay for mobile view
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;

    const setupAutoPlay = () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }

      if (isAutoPlaying && checkMobile()) {
        autoPlayIntervalRef.current = setInterval(() => {
          goToNextSlide();
        }, 3000);
      }
    };

    setupAutoPlay();

    // Check for resize events
    window.addEventListener("resize", setupAutoPlay);

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
      window.removeEventListener("resize", setupAutoPlay);
    };
  }, [isAutoPlaying]);

  // When user clicks on a dot, resume autoplay after 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isAutoPlaying]);

  return (
    <div className="bg-white  pt-6 pb-20  px-0 sm:px-4 section-width">
      <TitleComponent title={"Sponsorship"} />

      <div className="px-4 md:px-6 md:pl-10 flex flex-col gap-[4px]">
        {/* Official Partners - Always centered in mobile */}
        <div className="mt-8 flex flex-col gap-2 w-[213.36] ">
          <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-center  text-black ">
            OFFICIAL PARTNERS
          </p>
          <div className="flex justify-center items-center md:justify-start gap-4 md:gap-6 flex-wrap md:flex-nowrap w-full">
            <Image
              src="/images/home/sponsorship/image 77.svg"
              alt="Partner 1"
              width={213.36}
              height={134}
              className="w-auto h-auto max-h-[100px] md:max-h-[134px]"
            />
          </div>
        </div>
      </div>

      {/* Partners Auto Slider for Mobile / Regular Grid for Desktop */}
      <div className="mt-10 w-full">
        {/* Mobile Auto Slider - Full Width */}
        <div className="md:hidden w-full overflow-hidden relative">
          {/* Slider container */}
          <div
            className="w-full overflow-hidden"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            {/* Main slider content */}
            <div
              className="w-full transition-transform duration-500 ease-in-out"
              style={{
                display: "flex",
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-none w-full px-4"
                  style={{ minWidth: "100%" }}
                >
                  <div className="flex flex-col items-center text-center">
                    <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
                      {partner.title}
                    </p>
                    <div className="w-full flex justify-center items-center h-[134px]">
                      {partner.images ? (
                        // For associate sponsors with multiple images
                        <div className="flex flex-row items-center h-[134px]">
                          <div className="flex justify-center items-center">
                            <Image
                              src={partner.images[0]}
                              alt={partner.alts[0]}
                              width={213.36}
                              height={134}
                              className="max-w-full h-auto"
                            />
                          </div>
                          <div className="flex items-center h-[134px]">
                            <div className="w-px bg-black h-[109px] mx-1"></div>
                          </div>
                          <div className="flex justify-center items-center">
                            <Image
                              src={partner.images[1]}
                              alt={partner.alts[1]}
                              width={213.36}
                              height={134}
                              className="max-w-full h-auto"
                            />
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={partner.image}
                          alt={partner.alt}
                          width={213.36}
                          height={134}
                          className="max-w-full h-auto"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider indicator dots */}
          <div className="flex justify-center mt-4 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  handleInteractionStart();
                }}
                className={`w-2 h-2 rounded-full ${
                  activeIndex === index ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop layout with dividers */}
        <div className="hidden md:flex md:flex-row justify-between items-center gap-6 md:gap-0 px-4 md:px-12 w-full md:w-[90%]">
          {/* OFFICIAL FANTASY GAME */}
          <div className="flex flex-col items-center text-center">
            <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
              OFFICIAL FANTASY GAME
            </p>
            <div className="w-full flex justify-center items-center h-[134px]">
              <Image
                src="/images/home/sponsorship/image 66.svg"
                alt="Dream11"
                width={213.36}
                height={134}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Vertical line 1 */}
          <div className="pt-[40px] items-center h-[134px]">
            <div className="w-px bg-black h-[109px]"></div>
          </div>

          {/* UMPIRE SPONSORS */}
          <div className="flex flex-col items-center text-center">
            <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
              UMPIRE SPONSORS
            </p>
            <div className="w-full flex justify-center items-center h-[134px]">
              <Image
                src="/images/home/sponsorship/image 67.svg"
                alt="Skoda"
                width={213.36}
                height={134}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Vertical line 2 */}
          <div className="pt-[40px] items-center h-[134px]">
            <div className="w-px bg-black h-[109px]"></div>
          </div>

          {/* ASSOCIATE SPONSORS */}
          <div className="flex flex-col items-center text-center">
            <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
              ASSOCIATE SPONSORS
            </p>
            <div className="flex flex-row items-center h-[134px]">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/home/sponsorship/image 69.svg"
                  alt="Atul Projects"
                  width={213.36}
                  height={134}
                  className="max-w-full h-auto"
                />
              </div>
              <div className="flex items-center h-[134px]">
                <div className="w-px bg-black h-[109px] mx-1"></div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/images/home/sponsorship/image 70.svg"
                  alt="Wardwiz"
                  width={213.36}
                  height={134}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Vertical line 3 */}
          <div className="pt-[40px] items-center h-[134px]">
            <div className="w-px bg-black h-[109px]"></div>
          </div>

          {/* HYDRATION PARTNER */}
          <div className="flex flex-col items-center text-center">
            <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
              HYDRATION PARTNER
            </p>
            <div className="w-full flex justify-center items-center h-[134px]">
              <Image
                src="/images/home/sponsorship/image 71.svg"
                alt="Bisleri"
                width={213.36}
                height={134}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Vertical line 4 */}
          <div className="pt-[40px] items-center h-[134px]">
            <div className="w-px bg-black h-[109px]"></div>
          </div>

          {/* TICKETING PARTNER */}
          <div className="flex flex-col items-center text-center">
            <p className="font-plusjakarta font-bold text-[13.82px] leading-[22.36px] tracking-normal text-black mb-4">
              TICKETING PARTNER
            </p>
            <div className="w-full flex justify-center items-center h-[134px]">
              <Image
                src="/images/home/sponsorship/image 74.svg"
                alt="BookMyShow"
                width={213.36}
                height={134}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
