"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    imageSrc: "/assets/career/create-career.jpg",
    title: "Career Opportunities",
    description:
      "We implement clear career paths and provide opportunities for advancement within the organization. Our mentorship programs help employees navigate their career trajectories.",
  },
  // Add more items here
  {
    imageSrc: "/assets/career/life-at-erm.webp",
    title: "Diversity and Inclusion Initiatives",
    description:
      "We foster an inclusive and diverse workplace where individuals from different backgrounds feel valued and included. Promoting diversity in leadership positions reflects a wide range of perspectives.",
  },
  {
    imageSrc: "/assets/career/growth-performance.jpg",
    title: "Ethical and Sustainable Practices",
    description:
      "We demonstrate a commitment to ethical business practices and sustainability, aligning with the values of socially responsible employees.",
  },

  {
    imageSrc: "/assets/career/partnership-careers.webp",
    title: "Workplace Culture and Environment",
    description:
      "We cultivate a positive and collaborative workplace culture that values teamwork, innovation, and open communication. Our comfortable and modern work environment encourages creativity and productivity.",
  },

  // Continue adding items as needed
];

const CareerPage = () => {
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
      <div className="career-page section w-full h-[100svh]">
        <div className="relative w-full h-full">
          <Image
            src="/assets/banners/careers-banner.jpg"
            alt="Careers Banner"
            width={1000}
            height={600}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay */}
        </div>
        {/* <div className="absolute bottom-0 left-0 p-24 z-10">
          <div className="flex flex-col gap-2">
            <h6 className="custom-h6 font-mont font-regular text-white">
              Careers
            </h6>
            <h1 className="custom-h1 font-mont font-regular text-white">
              Help Guide the Future
            </h1>
          </div>
        </div> */}
      </div>

      <div className="career-search-section my-20">
        <div className="container">
          <div className="flex flex-col gap-20 w-[90%] lg:w-[70%]">
            <div className="summary">
              <h4 className="custom-h6 font-pops font-regular">
                Working at Cognitud comes with a wide range of career benefits.
                Our employees get the opportunity to improve their skills by
                gaining experience on the job, networking with other
                professionals, accessing mentorship programs for personal
                growth, following a structured career path for progression,
                staying up-to-date with the latest industry trends, and enjoying
                a good work-life balance that ultimately fosters long-term
                professional success.
              </h4>
            </div>

            <div className="search-button">
              <Link href="/job">
                <button className="text-p font-pops border border-bluePrimary text-bluePrimary hover:text-white hover:bg-bluePrimary py-4 px-6">
                  Search & Apply for Job
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="career-benefits my-20">
        <div className="container">
          <div className="heading">
            <h2 className="custom-h4 font-pops font-medium text-bluePrimary">
              Benefits at Cognitud
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col gap-6 justify-between">
                <Image
                  src={benefit.imageSrc}
                  alt={benefit.title}
                  width={1000}
                  height={600}
                  className="w-full h-[15rem] object-cover"
                />
                <h6 className="custom-h6 font-medium font-pops">
                  {benefit.title}
                </h6>
                <p className="text-p font-regular font-pops min-h-[8rem]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
                purpose and aligning the workforce with the organization's
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

              <div className="bg-blueMedium p-12 h-auto flex flex-col justify-between gap-16">
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
    </>
  );
};

export default CareerPage;
