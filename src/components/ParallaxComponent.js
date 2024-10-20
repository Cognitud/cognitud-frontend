"use client";

import React, { useState, useEffect, useRef } from "react";

// Data for sections
const sectionsData = [
  {
    image: "/assets/banners/sustainability-parallax.png",
    heading: "Our Mission",
    content:
      "We redefine business where profit and purpose go hand-in-hand. We turn your bottom line into a green machine, driving eco-friendly innovations with our cost-saving efficiencies. We position your brand as a leader in the eco-conscious marketplace, seamlessly integrating sustainability into your business operations.",
  },
  {
    image: "/assets/banners/executive_search.jpg",
    heading: "Our Vision",
    content:
      "We are your orbit to navigate talent and unlock untapped potential. We do not only recruit; we encourage leadership. Our unique focus on integrating business strategy and dynamic leadership sets us apart. We are committed to optimizing your organization's performance with our meticulous approach to talent acquisition.",
  },
];

// Reusable ParallaxSection component
const ParallaxSection = ({ image, heading, content }) => (
  <div
    className="parallax-section relative h-screen flex flex-col justify-center items-center bg-cover bg-fixed"
    style={{ backgroundImage: `url(${image})` }}
  >
    <h1 className="absolute top-12 text-center custom-h1 font-semibold font-pops text-white">
      {heading}
    </h1>

    <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full lg:px-20 px-6 services-content-inner">
      <div className="services-container bg-white bg-opacity-30 p-12">
        <h4 className="text-black">{content}</h4>
      </div>
    </div>
  </div>
);

const ParallaxComponent = () => {
  const sectionsRef = useRef([]);

  return (
    <div>
      {sectionsData.map((section, index) => (
        <div ref={(el) => (sectionsRef.current[index] = el)} key={index}>
          <ParallaxSection
            image={section.image}
            heading={section.heading}
            content={section.content}
          />
        </div>
      ))}
    </div>
  );
};

export default ParallaxComponent;
