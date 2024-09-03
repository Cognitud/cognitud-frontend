"use client";

import React from "react";
import Image from "next/image";

const HomeCareer = () => {
  return (
    <>
      <div className="homeCareer my-40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-blueDark flex flex-col items-center justify-center">
              <h3 className="custom-h3 font-mons font-semibold text-white">
                Career at Cognitud
              </h3>
            </div>

            <div className="banner-image">
              <Image
                src="/assets/banners/home-career-banner.png"
                alt="Close Icon"
                width={1000}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#f1f1f1] flex flex-col items-center justify-center px-8 py-8">
              <h4 className="custom-h4 font-mons font-regular">
                Cognitud offers a culture of diversity and equal opportunity,
                where I can contribute my best knowing each and every voice
                matters and fuels our success.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCareer;
