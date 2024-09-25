"use client";

import React from "react";
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
  return (
    <>
      <div className="career-page section relative w-full h-[100svh]">
        <div className="relative w-full h-full">
          <Image
            src="/assets/banners/careers-banner.jpg"
            alt="Careers Banner"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay */}
        </div>
        <div className="absolute bottom-0 left-0 p-24 z-10">
          <div className="flex flex-col gap-2">
            <h6 className="custom-h6 font-mont font-regular text-white">
              Careers
            </h6>
            <h1 className="custom-h1 font-mont font-regular text-white">
              Help Guide the Future
            </h1>
          </div>
        </div>
      </div>

      <div className="career-search-section my-20">
        <div className="container">
          <div className="flex flex-col gap-20 w-[90%] lg:w-[50%]">
            <div className="summary">
              <h4 className="custom-h6 font-mont font-regular">
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
                <button className="text-p border border-black py-4 px-6">
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
            <h2 className="custom-h3 font-mont font-semibold text-bluePrimary">
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
                <h6 className="custom-h6 font-medium font-mont">
                  {benefit.title}
                </h6>
                <p className="text-sm font-regular font-mont min-h-[8rem]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="congnitud-culture my-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_60%] gap-20">
            <div className="heading">
              <div className="heading">
                <h2 className="custom-h5 font-mont font-semibold text-bluePrimary">
                  Culture at Cognitud
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPage;
