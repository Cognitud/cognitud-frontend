"use client";

import React, { useState, useEffect } from "react";

const ImageSlider = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [images.length]);

  useEffect(() => {
    const buttons = document.querySelectorAll(".navigationButton");
    buttons.forEach((button) => {
      button.classList.remove("activeItem");
    });
    buttons[currentSlide].classList.add("activeItem");
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-[800ms] ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-none w-full transition-opacity duration-500"
            >
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-[100svh] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 lg:top-1/3 lg:left-1/11 transform -translate-x-1/2 -translate-y-1/2 lg:transform lg:translate-x-1 lg:translate-y-1 text-white flex flex-row w-full">
                <div className="flex flex-col">
                  <h4
                    className="cursor-pointer font-sans text-center lg:text-left font-bold text-white custom-h2 w-full px-4 lg:px-0 lg:w-[70%] margin-auto"
                    dangerouslySetInnerHTML={{ __html: image.heading }}
                    onClick={() => handleButtonClick(image.redirectUrl)}
                  />
                  <div className="mt-8 px-4 lg:px-0 text-center lg:text-left">
                    <button
                      className="border-2 hover:bg-white hover:text-black border-white font-medium text-white text-sm font-pops py-2 px-6"
                      onClick={() => handleButtonClick(image.redirectUrl)}
                    >
                      {image.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons with slider line at the top */}
        <div className="absolute bottom-1 left-[5%] w-[90%] overflow-x-auto lg:overflow-visible">
          <div className="flex lg:grid lg:grid-cols-5 gap-12 mt-5 space-x-4 lg:space-x-0">
            {[
              "Sustainability Reporting",
              "Decarbonisation",
              "Life Cycle Assessment",
              "Climate Risk Assessment",
              "Executive Search",
            ].map((item, index) => (
              <button
                key={index}
                className={`relative navigationButton bg-none border-none cursor-pointer py-2 text-sm text-left inline-block whitespace-nowrap ${
                  index === currentSlide
                    ? "activeItem font-bold text-white opacity-1"
                    : "text-greyLight"
                }`}
                onClick={() => goToSlide(index)}
              >
                {/* Slider line */}
                <div
                  className={`absolute top-0 left-0 w-full h-[2px] bg-white transform scale-x-0 origin-left transition-transform duration-500 ${
                    index === currentSlide ? "animate-fillLine scale-x-100" : ""
                  }`}
                  style={{ marginBottom: "12px" }} // Gap between slider line and label
                ></div>

                {/* Label */}
                <span
                  className={`block text-xs ${
                    index === currentSlide ? "text-white" : "text-greyLight"
                  }`}
                  style={{ marginBottom: "12px" }} // Gap between label and button text
                >
                  {`0${index + 1}/05`}
                </span>

                {/* Button text */}
                <span className="text-sm font-medium font-pops">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
