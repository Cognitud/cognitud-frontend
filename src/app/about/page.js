"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section className="about-us mt-28">
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row py-6 container">
          <Link href="/news">
            <h6 className="text-sm font-pops font-regular">1. INSIGHTS</h6>
          </Link>
          <h6 className="text-sm font-pops font-semibold">2. About Cognitud</h6>
        </div>

        <div className="relative banner-image">
          <Image
            src="/assets/about/cognitud-slider-1.jpg"
            alt="Logo"
            width={1000}
            height={600}
            className="w-full cursor-pointer h-[32rem] object-cover"
          />
          <div className="absolute top-0 left-0 px-8 lg:px-20 py-32 bg-gradient-to-t from-black to-transparent text-white w-full h-full">
            <h6 className="custom-h6 font-mont font-regular text-white">
              About Cognitud
            </h6>
            <h4 className="custom-h4 w-full lg:w-[60%] font-mont font-regular mt-4">
              Cognitudis shaping a sustainable future with the world's leading
              organizations
            </h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
