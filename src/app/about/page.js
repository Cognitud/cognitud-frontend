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

        <div className="about-detail-para my-20">
          <div className="container">
            <div className="flex items-center justify-center w-[80%] m-auto flex-col gap-6">
              <h6 className="custom-h6 font-pops font-regular">
                We are a group of passionate and curious minds driven by a
                constant hunger to learn, evolve, and help our clients succeed.
                We're not content with the status quo; we challenge conventions
                and question assumptions, all in the pursuit of better
                solutions.
              </h6>
              <h6 className="custom-h6 font-pops font-regular">
                As bona fide business companions, we're committed, daring, and
                always ready to explore uncharted territories alongside our
                clients. Our core ethos revolves around execution excellence. We
                believe in granting individuals the autonomy to harness their
                full potential and infuse innovation with purposeful direction.
              </h6>
              <h6 className="custom-h6 font-pops font-regular">
                We're grounded individuals—a diverse spectrum of hardworking
                people committed to transparency and integrity. We take the time
                to genuinely understand those we partner with, forging
                connections that enable us to align with their unique needs and
                move forward together.
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
