"use client";
import Image from "next/image";
// import "./style.css";
const AboutT2C = () => {
    return (
        < div className="bg-black px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto pt-48">
                {/* Card 1 */}
                <div className="text-white">

                    <div className="">
                        <h2 className="text-left mt-6 text-transparent bg-clip-text bg-text-gradient">
                            About TSquaredC
                        </h2>
                    </div>
                    <p className="text-[#909DC1] text-xl mt-8 text-left">
                        Once you've selected or configured an agent team, begin
                        chatting to your built-in project manager to describe your goal,
                        provide relevant information, give feedback, and approve
                        results.
                        <br/>
                        <br/>
                        Gone are the days of doing the legwork yourself - just
                        engage your on demand AI workforce and relax as you watch
                        your ideas come to life.
                    </p>
                </div>

                {/* Card 2 */}
                <div className=" p-8 rounded-xl text-white shadow-lg">
                    <Image
                        src="\images\home\about\space .svg"
                        alt="Feature 2"
                        width={800}
                        height={430}
                        className="rounded-md"
                    />
                    
                </div>
            </div>


        </div>

    );
}

export default AboutT2C;