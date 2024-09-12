"use client";

import React from "react";

const ParallaxSection = ({ image, heading, content }) => {
  return (
    <div
      className="parallax-section relative h-screen flex flex-col justify-center items-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Heading positioned at the top */}
      <h1 className="absolute top-12 text-center custom-h1 font-bold  font-mont text-white">
        {heading}
      </h1>

      {/* Content positioned in the middle with white background */}
      <div className="absolute bottom-24 flex items-center justify-center p-8 bg-white bg-opacity-40 rounded-lg shadow-lg mx-4 w-full max-w-4xl">
        <p className="custom-h6 font-medium font-mont ">{content}</p>
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
        content="
            We redefine business where profit and purpose go hand-in-hand. We
            turn your bottom line into a green machine, driving eco-friendly
            innovations with our cost-saving efficiencies. We position your
            brand as a leader in the eco-conscious marketplace, seamlessly
            integrating sustainability into your business operations.
        "
      />
      <ParallaxSection
        image="/assets/banners/executive_search.jpg"
        heading="Executive Search"
        content="We are your orbit to navigate talent and unlock untapped potential. We do not only recruit; we encourage leadership. Our unique focus on integrating business strategy and dynamic leadership sets us apart. We are committed to optimizing your organization's performance with our meticulous approach to talent acquisition."
      />
    </div>
  );
};

export default ParallaxComponent;
