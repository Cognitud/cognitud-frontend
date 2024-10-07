"use client";

import React from "react";
import Image from "next/image";

const HomeCareer = () => {
  return (
    <section className="homeCareer my-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]">
          {/* Left Section: Image with Overlay */}
          <div className="relative banner-image">
            {/* Image overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Image
              src="/assets/banners/home-career-banner.png"
              alt="Home Career Banner"
              width={1000}
              height={600}
              className="w-full h-full object-cover"
            />
            <h3 className="absolute text-white text-p font-pops font-medium bottom-10 left-12">
              Create a legacy in an organization with limitless possibilities!
            </h3>
          </div>

          {/* Right Section: Testimonial and Join Us */}
          <div className="bg-[#f1f1f1] flex flex-col relative">
            <div className="p-8">
              <Image
                src="/assets/icon/inert-comma.png"
                alt="Inert Comma Icon"
                width={42}
                height={42}
                className="w-[42px] h-auto object-cover"
              />
              <p className="custom-h6 font-mont py-8 wrap-nowrap">
                Cognitud offers a culture of diversity and equal opportunity,
                where I can contribute my best knowing each and every voice
                matters and fuels our success.
              </p>

              <div className="m-auto hidden lg:visible w-[12rem]  flex items-center justify-center absolute bottom-[-10rem] right-2">
              <div className="relative">
                <Image
                  src="/assets/icon/home-career-shape.svg"
                  alt="Career Shape Background"
                  width={1000}
                  height={600}
                  className="w-full h-[246px] object-cover"
                />
                <Image
                  src="/assets/icon/white-top-arrow.svg"
                  alt="Arrow Icon"
                  width={62}
                  height={62}
                  className="w-[62px] h-[62px] object-cover absolute top-6 right-6"
                />
                <div className="absolute bottom-6 left-6 leading-[42px]">
                  <h3 className="custom-h2 text-white">
                    Join <br />
                    <span className="custom-h5">OUR TEAM</span>
                  </h3>
                </div>
              </div>
            </div>
            </div>

            {/* Bottom Section: Join Our Team */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareer;
