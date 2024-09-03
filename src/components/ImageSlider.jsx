"use client";

import React, { useState, useEffect } from "react";

const ImageSlider = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [images.length]); // Run effect when images length changes

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
    // Redirect to the URL specific to the image
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
            <div key={index} className="relative flex-none w-full transition-opacity duration-500">
              <img
                src={image.url}
                alt={`Slide ${index + 1}`}
                className="w-full h-[100svh] object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
              <div className="absolute top-1/2 left-1/2 lg:top-1/3 lg:left-1/11 transform -translate-x-1/2 -translate-y-1/2 lg:transform lg:translate-x-1 lg:translate-y-1 text-white flex flex-row w-full">
                <div className="flex flex-col">
                  <h2
                    className="cursor-pointer font-sans text-center lg:text-left font-bold text-white text-4xl w-full px-4 lg:px-0 lg:w-[60%] margin-auto"
                    dangerouslySetInnerHTML={{ __html: image.heading }}
                    onClick={() => handleButtonClick(image.redirectUrl)}
                  />
                  <div className="mt-4 px-4 lg:px-0 text-center lg:text-left">
                    <button
                      className="border-2 hover:bg-white hover:text-black border-white font-medium text-white text-lg py-2 px-12"
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
        <div className="absolute bottom-2 left-[5%] w-[90%] flex mt-5 grid grid-cols-5">
          {["Sustainability is our business", "Executive Search", "Renewable Energy", "Climate & Net Zero", "Carbon Market"].map((item, index) => (
            <button
              key={index} // Ensure each button has a unique key
              className={`navigationButton  bg-none border-none cursor-pointer px-5 py-2 mx-2 custom-h5  text-left relative ${
                index === currentSlide ? "activeItem font-bold text-white opacity-1" : "text-greyLight"
              }`}
              onClick={() => goToSlide(index)}
            >
              {item}
              <div className={`absolute top-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-500 ${index === currentSlide ? "animate-fillLine" : ""}`}></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
