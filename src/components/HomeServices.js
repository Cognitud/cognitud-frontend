"use client";

import React from "react";
import Image from "next/image";

const ServiceItem = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="services-image relative group business-vertical-inner">
      <div className="business-vertical-inner-img overflow-hidden rounded relative">
        {/* Image with hover animation triggered by parent container */}
        <Image
          src={imageSrc}
          alt={altText}
          width={1000}
          height={600}
          className="w-full h-[420px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {/* ::before pseudo-element for overlay effect */}
        <div className="absolute inset-0 before-overlay"></div>
      </div>

      <div className="content absolute left-[1.25rem] bottom-0 z-20">
        {/* Plus Icon with Smooth Transition */}
        <div className="plus-read-more-btn flex items-center justify-center bg-white w-[2rem] h-[2rem] mb-2 transition-transform duration-500 ease-in-out transform group-hover:translate-y-[-50px] opacity-100">
          <Image
            src="/assets/icon/plus-icon-bold.png"
            alt="Plus Icon"
            width={18}
            height={18}
            className="w-[18px] h-[18px] object-cover"
          />
        </div>

        {/* Content Box with Smooth Transition */}
        <div className="business-vertical-overlay-content-box text-white transition-all duration-500 ease-in-out opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-[-30px] z-20">
          <h5 className="custom-h5 transition-transform duration-500 ease-in-out">
            {title}
          </h5>
          <p className="text-p transition-transform duration-500 ease-in-out">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const HomeServices = () => {
  const services = [
    {
      imageSrc: "/assets/services/Artboard-4-min.png",
      altText: "Home Services Banner",
      title: "Title 1",
      description: "Description goes here",
    },
    {
      imageSrc: "/assets/services/Artboard-5-min.png",
      altText: "Home Services Banner",
      title: "Title 2",
      description: "Description goes here",
    },
    {
      imageSrc: "/assets/services/Artboard-6-min.png",
      altText: "Home Services Banner",
      title: "Title 3",
      description: "Description goes here",
    },
    {
      imageSrc: "/assets/services/Artboard-1-min.png",
      altText: "Home Services Banner",
      title: "Title 4",
      description: "Description goes here",
    },
    {
      imageSrc: "/assets/services/oil_and_gas-min.png",
      altText: "Home Services Banner",
      title: "Title 5",
      description: "Description goes here",
    },
  ];

  return (
    <section className="home-services my-20">
      <div className="full-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              imageSrc={service.imageSrc}
              altText={service.altText}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
