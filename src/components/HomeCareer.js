"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const HomeCareer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    "Cognitud offers a culture of diversity and equal opportunity, where I can contribute my best knowing each and every voice matters and fuels our success.",
    "At Cognitud, I'm empowered to create an impact while being part of a team that values diversity and innovation.",
    "Working at Cognitud means being surrounded by passionate individuals who are driven by the collective goal of success.",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const handleLineClick = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="homeCareer my-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%]">
          {/* Left Section: Image with Overlay */}
          <div className="relative banner-image">
            {/* Image overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Image
              src="/assets/banners/home-career-banner.png"
              alt="Home Career Banner"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
            <h3 className="absolute text-white text-p font-pops font-medium bottom-10 left-12">
              Create a legacy in an organization with limitless possibilities!
            </h3>
          </div>

          {/* Right Section: Testimonial Slider and Join Us */}
          <div className="bg-[#f1f1f1] flex flex-col relative culture-section">
            <div className="p-8 relative flex gap-8 flex-col">
              <div className="flex gap-4 justify-end">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-[22px] h-[4px] cursor-pointer ${
                      currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    onClick={() => handleLineClick(index)}
                  ></div>
                ))}
              </div>

              <Image
                src="/assets/icon/insert-comma.png"
                alt="Inert Comma Icon"
                width={42}
                height={42}
                className="w-[42px] h-auto object-cover"
              />

              <p className="custom-h6 font-mont py-8 wrap-nowrap">
                {testimonials[currentSlide]}
              </p>

              <div className="button">
                <button className="flex items-center justify-between p-4 w-[12rem] border border-bluePrimary">
                  <h4 className="text-p text-bluePrimary font-pops">Join Our Team</h4>
                  <Image
                    src="/assets/icon/arrow-blue-link.svg"
                    alt="Inert Comma Icon"
                    width={24}
                    height={24}
                    className="w-[1.5rem] h-auto object-cover"
                  />
                </button>
              </div>
            </div>

            {/* Bottom Section: Join Our Team */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareer;
