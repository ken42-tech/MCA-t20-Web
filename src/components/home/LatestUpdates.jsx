"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const tabs = ["All", "Latest", "Reviews", "NewSection"];

const updates = [
  {
    title: "Prithvi Shaw has helped improve my game.",
    author: "Sumeet Dhekale",
    date: "12 Jan, 2025",
    bgImg: "/images/home/tech/bg.svg",
    avatarDot: "/images/home/tech/Dot.svg",
  },
  // …more items
];

const LatestUpdates = () => {
  // plain JS: no <…> after useState
  const [tab, setTab] = useState("All");

  return (
    <div className="bg-[url('/images/home/latestUpdateBg.png')] bg-cover bg-center bg-no-repeat">
      <div className="section-width padding-top">
        <div className="relative h-fit px-8 py-2 bg-[#DE6927]   xl:w-[480px] lg:w-[320px] rounded-md mb-12">
          <Image
            src={"/images/elements/header-element.png"}
            width={50}
            height={50}
            className="w-auto absolute h-full top-0 -left-0 rounded-l-md"
            alt="Logo"
          />
          <h2 className="text-white">Latest Updates</h2>
        </div>

        <div className="w-full flex flex-col gap-7 relative">
          <div className="w-full overflow-x-auto py-8 scrollbar-hide">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 2xl:gap-8 gap-5 ">
              {/* {teamsDataHomePage.map((item, i) => {
                console.log(item.gradient.from, "first");
                return (
                  <div
                    // bg-gradient-to-b from-[${item.gradient.from}] to-[${item.gradient.to}]
                    className={`p-4 rounded-xl  flex justify-center relative `}
                    key={i}
                    style={{
                      background: `linear-gradient(to bottom, ${item.gradient.from}, ${item.gradient.to})`,
                    }}
                  >
                    <Image
                      src={"/images/elements/teamCardRoundElement.png"}
                      width={100}
                      height={100}
                      className="w-full h-full absolute top-0 left-0 rounded-xl opacity-60"
                      alt="Logo"
                    />
                    <Image
                      src={"/images/elements/teamCardElement.png"}
                      width={100}
                      height={100}
                      className="w-full h-full absolute top-0 left-0 rounded-xl"
                      alt="Logo"
                    />
                    <div className="relative">
                      <Image
                        src={item.logo}
                        width={100}
                        height={100}
                        className="w-auto xl:h-32 h-28 mx-auto"
                        alt="Logo"
                      />
                      <p className="text-white text-center mt-10">
                        {item.team}
                      </p>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <section className="min-h-screen w-full bg-white px-4 md:px-8 lg:px-16 py-8">
    //   {/* Header */}
    //   <header className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
    //     <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
    //       LATEST UPDATES
    //     </h1>
    //     <Link href="/latestUpdates" className="text-[#616161] font-semibold">
    //       View all Updates
    //     </Link>
    //   </header>

    //   {/* Main + Sidebar */}
    //   <div className="flex flex-col lg:flex-row gap-6">
    //     {/* Highlight */}
    //     <article className="flex-1 relative rounded-lg overflow-hidden">
    //       <Image
    //         src={updates[0].bgImg}
    //         alt="highlight"
    //         fill
    //         className="object-cover"
    //       />
    //       <div className="relative z-10 p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end h-full text-white">
    //         <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
    //           {updates[0].title}
    //         </p>
    //         <div className="flex flex-wrap gap-4 text-sm md:text-base items-center">
    //           <span className="flex items-center gap-2">
    //             <Image
    //               src={updates[0].avatarDot}
    //               alt=""
    //               width={8}
    //               height={8}
    //               className="h-2 w-2"
    //             />
    //             {updates[0].author}
    //           </span>
    //           <span className="flex items-center gap-2">
    //             <Image
    //               src={updates[0].avatarDot}
    //               alt=""
    //               width={8}
    //               height={8}
    //               className="h-2 w-2"
    //             />
    //             {updates[0].date}
    //           </span>
    //         </div>
    //       </div>
    //     </article>

    //     {/* Sidebar */}
    //     <aside className="w-full lg:w-1/3 flex flex-col">
    //       {/* Tabs */}
    //       <nav className="flex bg-black text-white rounded-t-md overflow-hidden">
    //         {tabs.map((label) => (
    //           <button
    //             key={label}
    //             onClick={() => setTab(label)}
    //             className={`
    //               flex-1 text-center py-3 md:py-4 font-medium
    //               ${tab === label ? "bg-[#E07E27] text-black" : ""}
    //               transition-colors
    //             `}
    //           >
    //             {label === "NewSection" ? "New Season" : label}
    //           </button>
    //         ))}
    //       </nav>

    //       {/* Update Cards */}
    //       <div className="flex-1 flex flex-col divide-y border border-t-0 border-gray-200 overflow-y-auto">
    //         {updates.slice(1, 4).map((u, i) => (
    //           <div
    //             key={i}
    //             className="group flex items-stretch hover:scale-105 transition-transform"
    //           >
    //             <div className="flex-1 p-4 md:p-6 bg-[#121212C7] group-hover:bg-[#E07E27] text-white flex flex-col justify-between">
    //               <h2 className="text-lg md:text-xl font-semibold">
    //                 {u.title}
    //               </h2>
    //               <button className="self-start mt-2 text-xs md:text-sm uppercase px-3 py-1 rounded-md bg-[#E07E278A] group-hover:bg-[rgba(50,13,0,0.46)] transition">
    //                 Read More
    //               </button>
    //             </div>
    //             <div className="w-1/3 md:w-2/5 lg:w-1/3 overflow-hidden">
    //               <Image
    //                 src="/images/home/tech/img1.png"
    //                 alt=""
    //                 width={300}
    //                 height={200}
    //                 className="object-cover h-full w-full"
    //               />
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </aside>
    //   </div>
    // </section>
  );
};

export default LatestUpdates;
