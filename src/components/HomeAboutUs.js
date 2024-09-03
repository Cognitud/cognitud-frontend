"use client";

import React from "react";
import Image from "next/image";
const HomeAboutUs = () => {
  return (
    <>
      <div className="home-about-us my-40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-blueDark flex flex-col gap-12 py-4 px-8">
              <h3 className="custom-h3 font-mons font-semibold text-white">
                Integrate Sustainability into the core of your business
              </h3>
              <h6 className="custom-h6 font-pops font-regular text-white">
                At Cognitud, we are driven by a fervent passion to translate
                your ideas into living realities. Challenging the norm is our
                modus operandi. We strive for excellence.
              </h6>
              <button className="font-medium bg-greenDark w-[155px] text-white  font-mons  p-4">
                Read More
              </button>
            </div>

            <div className="banner-image">
              <Image
                src="/assets/about/about-home-banner.png"
                alt="Close Icon"
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAboutUs;
