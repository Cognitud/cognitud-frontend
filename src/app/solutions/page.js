"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ParallaxComponent from "@/components/ParallaxComponent";

const solutionsData = [
  {
    title: "Sustainability",
    image: "/assets/services/sustainbility-v2.webp",
  },
  {
    title: "Sustainability",
    image: "/assets/services/sustainbility-v2.webp",
  },
  {
    title: "Sustainability",
    image: "/assets/services/sustainbility-v2.webp",
  },
  {
    title: "Sustainability",
    image: "/assets/services/sustainbility-v2.webp",
  },
];

const cognitudNumbers = [
  { number: "23,000", text: "projects worked on in FY23" },
  { number: "8,000+", text: "employees in 40+ countries globally" },
  { number: "152", text: "countries where we worked on projects in 2023" },
  { number: "3,000+", text: "clients across all industries" },
];

const impactData = [
  {
    icon: "/assets/icon/enhanced-brand-icon.svg",
    title: "Economic Resilience",
    description:
      "Drive cost savings, resource efficiency, and access to new markets",
  },
  {
    icon: "/assets/icon/economic-resilience-icon.svg",
    title: "Economic Resilience",
    description:
      "Drive cost savings, resource efficiency, and access to new markets",
  },
  {
    icon: "/assets/icon/positive-social-icon 1.svg",
    title: "Positive Social Impact",
    description:
      "Contribute to social betterment through ethical practices, employee well-being, and community engagement.",
  },
  {
    icon: "/assets/icon/competitive-advantage-icon.svg",
    title: "Competitive Advantage",
    description:
      "Gain a competitive edge by appealing to eco-conscious consumers and staying ahead of regulatory changes.",
  },
  {
    icon: "/assets/icon/long-term-visibility-icon.svg",
    title: "Long-Term Viability",
    description: "Ensure  long-term success for generations to come.",
  },
  {
    icon: "/assets/icon/social-harmony-icon.svg",
    title: "Social Harmony",
    description:
      "Promote a culture of social responsibility, inclusivity, and goodwill among stakeholders.",
  },
];

const Solutions = () => {
  return (
    <>
      <section className="Solutions mt-28">
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row py-6 container">
          <Link href="/news">
            <h6 className="text-sm font-pops font-regular">1. Home</h6>
          </Link>
          <h6 className="text-sm font-pops font-semibold">2. Solutions</h6>
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
              Solutions
            </h6>
            <h4 className="custom-h4 w-full lg:w-[60%] font-mont font-regular mt-4">
              Cognitud is shaping a sustainable future with the world's leading
              organizations
            </h4>
          </div>
        </div>

        <div className="solutions-description my-20">
          <div className="container">
            <div className="description flex flex-col gap-12 w-[70%]">
              <h6 className="custom-h6 font-pops font-regular">
                Companies around the world are responding to the ever-growing
                and evolving sustainability imperative. From regulatory
                compliance to full-scale business transformation, ERM is
                supporting clients at every stage of their sustainability
                journey.
              </h6>

              <h6 className="custom-h6 font-pops font-regular">
                Explore how our strategic and technical delivery capabilities
                are helping clients to successfully navigate the transition to a
                low-carbon economy, accelerating the integration of
                sustainability at every level of their business.
              </h6>
            </div>
          </div>
        </div>

        <div className="solutions-types my-20">
          <div className="container">
            <div className="heading w-full">
              <h3 className="custom-h4 font-semibold text-bluePrimary font-mont">
                Solutions
              </h3>
            </div>

            <div className="types-sections py-12">
              <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-6">
                {solutionsData.map((solution, index) => (
                  <div key={index} className="item flex flex-col gap-6">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={1000}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                    <h4 className="custom-h4 font-mont font-medium">
                      {solution.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ParallaxComponent />

        <div className="cognitud-numbers my-20">
          <div className="container">
            <div className="heading w-full">
              <h3 className="custom-h4 font-semibold text-bluePrimary font-mont">
                Cognitud In Numbers
              </h3>
            </div>

            <div className="numbers-section grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
              {cognitudNumbers.map((item, index) => (
                <div
                  key={index}
                  className="item flex flex-col gap-2 py-6 px-4 bg-greyPrimary"
                >
                  <h6 className="custom-h4 font-regular text-bluePrimary font-mont text-white">
                    {item.number}
                  </h6>
                  <p className="text-p font-regular text-bluePrimary font-pops text-white">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cognitud-impact bg-lightBlue w-full h-auto">
          <div className="container">
            <div className="heading w-full pt-20">
              <h3 className="custom-h4 font-semibold text-bluePrimary font-mont">
                Our Impact
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
              {impactData.map((impact, index) => (
                <div key={index} className="item flex flex-col gap-4  ">
                  <div className="icon w-[3.5rem] h-[3.5rem] bg-bluePrimary hover:bg-transparent border border-bluePrimary flex items-center justify-center transition duration-300">
                    <Image
                      src={impact.icon}
                      alt="Icon"
                      width={32}
                      height={32}
                      className="w-[2.5rem] h-[2.5rem] object-cover filter hover:invert hover:sepia hover:saturate-[500%] hover:hue-rotate-[190deg]"
                    />
                  </div>

                  <h4 className="custom-h6 font-medium font-pops">
                    {impact.title}
                  </h4>
                  <p className="text-p font-pops font-regular">
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="solutions-insights my-20">
  <div className="container">
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className="detail">
          <h4 className="custom-h4 font-pops font-medium text-bluePrimary">
            Insights
          </h4>
          <h6 className="custom-h6 font-pops font-regular pt-6">
            Cognitud Consultants and sustainability experts take an in-depth look at the key issues facing our clients around the world.
          </h6>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Image
          src="/assets/services/insights-solutions.jpg"
          alt="Insight Solutions"
          width={1000}
          height={600}
          className="w-[440px] h-auto object-cover"
        />
      </div>
    </div>
  </div>
</div>

      </section>
    </>
  );
};

export default Solutions;
