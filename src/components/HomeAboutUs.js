"use client";

import React from "react";
import Image from "next/image";
const HomeAboutUs = () => {
  return (
    <>
      <div className="home-about-us my-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" flex flex-col gap-12  px-8">
              <div className="heading">
                <h3 className="custom-h4 font-semibold text-bluePrimary font-mont">
                  Who Are We?
                </h3>
                <h4 className="custom-h6 font-regular font-pops pt-4">
                  Your go-to team of experts for all things green.
                </h4>
              </div>
              <h6 className="custom-h6 font-pops font-regular">
                From India to the UK, our sustainability consultants the globe,
                ensuring your business is always in compliance and making a
                positive impact. Our team of brand boosters is equipped with the
                ethical know-how to ensure your business is always one step
                ahead.
              </h6>
              <div className="flex gap-8 w-[9rem]">
                <button className="font-semibold text-blueBorder font-pops text-p">
                  Read More
                </button>

                <Image
                  src="/assets/icon/arrow-blue-link.svg"
                  alt="Read More"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] object-cover"
                />
              </div>
            </div>

            <div className="banner-image">
              <Image
                src="/assets/banners/about-group-people-2.png"
                alt="Close Icon"
                width={1000}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAboutUs;
