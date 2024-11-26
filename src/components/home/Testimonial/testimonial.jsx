"use client";

import React, { useState } from "react";
import Image from "next/image";
import './style.css'; // Make sure this file contains global styles or is used correctly

const TestimonialsCarousel = () => {
    const testimonials = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.",
            name: "Lorem ipsum",
            role: "Lorem ipsum",
            imgSrc: "/images/home/testimonial/i1.svg",
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.",
            name: "Lorem ipsum",
            role: "Lorem ipsum",
            imgSrc: "/images/home/testimonial/i1.svg",
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.",
            name: "Lorem ipsum",
            role: "Lorem ipsum",
            imgSrc: "/images/home/testimonial/i1.svg",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= testimonials.length - 2 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="text-center py-12 bg-black">
            <h2 className="text-transparent bg-clip-text bg-text-gradient mb-12">
                Testimonials
            </h2>

            <div className="relative mx-12 md:mx-16 px-32 md:px-16 mt-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-6 relative test-bg card" // Apply CSS class from `style.css`
                        >
                            <p className="text-[#C7C9D1] text-left mb-16">
                                “{testimonial.text}”
                            </p>
                            <div className="flex items-center mt-4">
                                <Image
                                    src={testimonial.imgSrc}
                                    width={60}
                                    height={60}
                                    alt={testimonial.name}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <h5 className="text-white">{testimonial.name}</h5>
                                    <p className="text-[#C7C9D1]">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <button
                        onClick={handleNext}
                        className="text-white rounded-full w-12 h-12 flex items-center justify-center"
                        style={{
                            background:
                                "linear-gradient(45deg, #464C6D 0%, #2D3247 10%, #1C1D22 100%)",
                        }}
                    >
                        ❯
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
