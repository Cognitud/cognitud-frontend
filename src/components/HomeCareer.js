"use client";

import React from "react";
import Image from "next/image";

const HomeCareer = () => {
  return (
    <>
      <div className="homeCareer py-20">
        <div className="container">
          <div className="grid grid-cols-[70%_30%] h-[340px]">
            <div className="banner-image relative">
              {/* Image overlay */}
              <div className="absolute inset-0 bg-black opacity-40"></div>

              <Image
                src="/assets/banners/home-career-banner.png"
                alt="Close Icon"
                width={1000}
                height={600}
                className="w-full h-full object-cover"
              />
              <h3 className="absolute text-white custom-h6 font-mont font-medium bottom-10 left-12">
                Create a legacy in an organization with limitless possibilities!
              </h3>
            </div>

            <div className="bg-[#f1f1f1] flex flex-col relative">
              <div className="px-8 py-8">
                <Image
                  src="/assets/icon/inert-comma.png"
                  alt="Read More"
                  width={42}
                  height={42}
                  className="w-[42px] h-auto object-cover"
                />
                <h4 className="custom-h6 font-mont font-regular py-8">
                  Cognitud offers a culture of diversity and equal opportunity,
                  where I can contribute my best knowing each and every voice
                  matters and fuels our success.
                </h4>
              </div>

              <div className="w-full m-auto flex items-center justify-center absolute bottom-[-6rem]">
                <div className="relative w-[80%]">
                  <Image
                    src="/assets/icon/home-career-shape.svg"
                    alt="Read More"
                    width={1000}
                    height={600}
                    className="w-full h-[246px] object-cover"
                  />
                  <Image
                    src="/assets/icon/white-top-arrow.svg"
                    alt="Read More"
                    width={42}
                    height={42}
                    className="w-[62px] h-[62px] object-cover absolute top-6 right-6"
                  />
                  <div
                    className="absolute bottom-6 left-6"
                    style={{ lineHeight: "42px" }}
                  >
                    <h3 className="custom-h2 text-white length-2">
                      Join <br />
                      <span className="custom-h5">OUR TEAM</span>
                    </h3>
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

export default HomeCareer;
