"use client";

import React from "react";
import { useState , useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ParallaxComponent from "@/components/ParallaxComponent";

const AboutUs = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    "Cognitud offers a culture of diversity and equal opportunity, where I can contribute my best knowing each and every voice matters and fuels our success.",
    "At Cognitud, I'm empowered to create an impact while being part of a team that values diversity and innovation.",
    "Working at Cognitud means being surrounded by passionate individuals who are driven by the collective goal of success.",
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
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
    <>
      <section className="about-us mt-28">
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row py-6 container">
          <Link href="/news">
            <h6 className="text-sm font-pops font-regular">1. INSIGHTS</h6>
          </Link>
          <h6 className="text-sm font-pops font-semibold">2. About Cognitud</h6>
        </div>

        <div className="relative banner-image">
          <Image
            src="/assets/about/cognitud-slider-1.jpg"
            alt="Logo"
            width={1000}
            height={600}
            className="w-full cursor-pointer h-[32rem] object-cover"
          />
          <div className="absolute top-0 left-0 px-8 lg:px-20 py-32 bg-gradient-to-t from-black to-transparent text-white w-full h-full">
            <h6 className="custom-h6 font-mont font-regular text-white">
              About Cognitud
            </h6>
            <h4 className="custom-h4 w-full lg:w-[60%] font-mont font-regular mt-4">
              Cognitudis shaping a sustainable future with the world&apos;s leading
              organizations
            </h4>
          </div>
        </div>

        <div className="about-detail-para my-20">
          <div className="container">
            <div className="flex items-center justify-center w-[80%] m-auto flex-col gap-6">
              <h6 className="custom-h6 font-pops font-regular">
                We are a group of passionate and curious minds driven by a
                constant hunger to learn, evolve, and help our clients succeed.
                We&apos;re not content with the status quo; we challenge conventions
                and question assumptions, all in the pursuit of better
                solutions.
              </h6>
              <h6 className="custom-h6 font-pops font-regular">
                As bona fide business companions, we&apos;re committed, daring, and
                always ready to explore uncharted territories alongside our
                clients. Our core ethos revolves around execution excellence. We
                believe in granting individuals the autonomy to harness their
                full potential and infuse innovation with purposeful direction.
              </h6>
              <h6 className="custom-h6 font-pops font-regular">
                We&apos;re grounded individuals—a diverse spectrum of hardworking
                people committed to transparency and integrity. We take the time
                to genuinely understand those we partner with, forging
                connections that enable us to align with their unique needs and
                move forward together.
              </h6>
            </div>
          </div>
        </div>

        <ParallaxComponent />

        <div className="congnitud-culture my-20 bg-bluePrimary">
        <div className="container">
          <div className="cuture-section-data py-12">
            <div className="heading">
              <h2 className="custom-h4 font-pops font-medium text-white">
                Culture at Cognitud
              </h2>
            </div>

            <div className="detail-para flex flex-col py-12 gap-6">
              <h6 className="custom-h6 font-pops font-regular text-white">
                Here at Cognitud we relentlessly focus on innovation.
                Collaboration is integral, with teams operating seamlessly
                across geographies and hierarchies, fostering a collective
                intelligence that drives change. We prioritize transparency,
                ensuring the free flow of information and decisions made with
                clarity.
              </h6>

              <h6 className="custom-h6 font-pops font-regular text-white">
                A growth mindset dominates our culture, encouraging employees to
                embrace challenges as opportunities for learning and
                development. Leadership is visionary, instilling a sense of
                purpose and aligning the workforce with the organization&apos;s
                strategic goals.
              </h6>

              <h6 className="custom-h6 font-pops font-regular text-white">
                Continuous improvement is ingrained, fueling a culture of
                excellence that values efficiency and effectiveness. Our culture
                propels business transformation to not only adapt to change but
                to lead and thrive in an ever-evolving business landscape.
              </h6>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
              <div className="bg-blueMedium p-12 h-auto flex flex-col gap-16">
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div className="image">
                    <Image
                      src="/assets/icon/innovation_adaptability.svg"
                      alt="Careers Banner"
                      width={48}
                      height={48}
                      className="min-w-[3rem] h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h5 className="custom-h5 font-pops font-medium text-white">
                      Innovation and Adaptability
                    </h5>

                    <p className="text-p font-pops font-regular text-white">
                      Our culture of innovation fosters adaptability to navigate
                      rapidly changing business landscapes and emerging industry
                      trends.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div className="image">
                    <Image
                      src="/assets/icon/agile_work.svg"
                      alt="Careers Banner"
                      width={48}
                      height={48}
                      className="min-w-[3rem] h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h5 className="custom-h5 font-pops font-medium text-white">
                      Agile Work Practices
                    </h5>

                    <p className="text-p font-pops font-regular text-white">
                      Our agile work practices in cross-functional collaboration
                      and quick decision-making enhance responsiveness to client
                      needs and market changes.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div className="image">
                    <Image
                      src="/assets/icon/client_centric.svg"
                      alt="Careers Banner"
                      width={48}
                      height={48}
                      className="min-w-[3rem] h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <h5 className="custom-h5 font-pops font-medium text-white">
                      Client-Centric Focus
                    </h5>

                    <p className="text-p font-pops font-regular text-white">
                      A client-centric mindset ensures that our organization is
                      always focused on delivering value and exceeding client
                      expectations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-greyPrimary p-12 h-auto flex flex-col justify-between gap-16">
                <div className="content flex flex-col gap-12">
                  <Image
                    src="/assets/icon/testi-bg.png"
                    alt="Inert Comma Icon"
                    width={42}
                    height={42}
                    className="w-[42px] h-auto object-cover"
                  />

                  <p className="custom-h5 font-mont py-8 wrap-nowrap text-white">
                    {testimonials[currentSlide]}
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
                  <div className="slider-arrow hidden lg:block  ">
                    <div className="flex gap-8 items-center">
                      <div className="cursor-pointer rounded-full w-[5rem] h-[5rem] border-white border-2 flex items-center justify-center" onClick={prevSlide}>
                        <Image
                          src="/assets/icon/prev-icon-white.svg"
                          alt="left arrow"
                          width={32}
                          height={32}
                          className="w-[32px] h-auto object-cover"
                        />
                      </div>
                      <div className="cursor-pointer rounded-full w-[5rem] h-[5rem] border-white border-2 flex items-center justify-center"  onClick={nextSlide}>
                        <Image
                          src="/assets/icon/next-icon-white.svg"
                          alt="left arrow"
                          width={32}
                          height={32}
                          className="w-[32px] h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-center">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-[32px] h-[4px] cursor-pointer ${
                          currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                        }`}
                        onClick={() => handleLineClick(index)}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutUs;
