"use client";

import React from "react";

const ParallaxSection = ({ image, heading, content }) => {
  return (
    <div
      className="parallax-section relative h-screen flex flex-col justify-center items-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Heading positioned at the top */}
      <h1 className="absolute top-12 text-center text-4xl md:text-6xl font-bold text-white">
        {heading}
      </h1>

      {/* Content positioned in the middle with white background */}
      <div className="absolute bottom-24 flex items-center justify-center p-8 bg-white bg-opacity-90 rounded-lg shadow-lg mx-4 w-full max-w-4xl">
        <p className="text-lg md:text-2xl text-gray-800">{content}</p>
      </div>
    </div>
  );
};

const ParallaxComponent = () => {
  return (
    <div>
      <ParallaxSection
        image="/assets/banners/sustainability-parallax.png"
        heading="Sustainability"
        content="Sustainability is about meeting the needs of the present without compromising the ability of future generations to meet their own needs."
      />
      <ParallaxSection
        image="/assets/banners/executive_search.jpg"
        heading="Executive Search"
        content="Executive Search is the process of recruiting senior executives to fit the needs of an organization."
      />
    </div>
  );
};

export default ParallaxComponent;
