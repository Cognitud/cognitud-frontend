// app/solutions/[slug]/page.js or pages/solutions/[slug].js
"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image"; // Ensure you import Image from Next.js
import { solutionsData } from "@/data/data"; // Adjust the import as needed
import Link from "next/link";
import FeaturedInsights from "@/app/featuredInsights/page";

const SolutionDetail = () => {
  const { slug } = useParams(); // Get the slug from the params

  // Use a fallback for when slug is not yet available
  const solution = slug ? solutionsData.find((sol) => sol.slug === slug) : null;

  if (!solution) {
    return <div>Solution not found</div>;
  }

  return (
    <>
      <div className="solution-detail-section mt-28">
        <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row py-6 container">
          <Link href="/news">
            <h6 className="text-sm font-pops font-regular">1. Home</h6>
          </Link>
          <h6 className="text-sm font-pops font-semibold">
            2. {solution.slug}
          </h6>
        </div>

        <div className="relative banner-image">
          <Image
            src="/assets/services/climate-net-zero-banner.jpg"
            alt="Logo"
            width={1000}
            height={600}
            className="w-full cursor-pointer h-full object-cover"
          />
          <div className="absolute top-0 left-0 px-8 lg:px-20 py-32 bg-gradient-to-t from-black to-transparent text-white w-full h-full">
            <h6 className="text-p font-mont font-regular text-white">
              Solutions
            </h6>
            <h4 className="custom-h6 w-full lg:w-[60%] font-mont font-regular mt-4">
              {solution.para}
            </h4>
          </div>
        </div>

        <div className="why-cognitud-detail-para my-20">
          <div className="container">
            <div className="flex items-center justify-center w-full flex-col gap-6">
              <h6 className="custom-h6 font-pops font-regular">
                {solution.whyCognitud}
              </h6>
            </div>
          </div>
        </div>

        <div className="why-business my-20">
          <div className="container">
            <div className="heading">
              <h4 className="custom-h5 font-medium text-bluePrimary font-pops">
                {solution.importance.subHeading}
              </h4>
            </div>

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solution.importance.points.map((points, index) => (
                <div
                  key={index}
                  className="item py-4 border-t border-b border-greyPrimary"
                >
                  <p className="text-p font-pops font-regular">{points}</p>
                </div>
              ))}
            </div>

            {/* <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="item bg-white p-8">
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item bg-white p-8">
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item bg-white p-8">
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item bg-white p-8">
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>  
            </div> */}
          </div>
        </div>

        <div className="strategy bg-bluePrimary">
          <div className="container">
            <div className="heading pt-12">
              <h4 className="custom-h5 font-medium text-white font-pops">
                {solution.implementationStrategy.title}
              </h4>
            </div>

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solution.implementationStrategy.steps.map((steps, index) => (
                <div
                  key={index}
                  className="item bg-white px-4 py-8 flex flex-col gap-4"
                >
                  <h6 className="custom-h6 font-pops font-regular font-medium">
                    {steps.title}
                  </h6>
                  <p className="text-p font-pops font-regular">
                    {steps.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="our-approach my-20">
          <div className="container">
            <div className="heading">
              <h4 className="custom-h5 font-medium text-bluePrimary font-pops">
                {solution.approach.title}
              </h4>
            </div>

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12">
              {solution.approach.services.map((points, index) => (
                <div
                  key={index}
                  className={`border-b border-greyPrimary py-8 ${
                    index !== solution.approach.services.length - 1 ? "" : ""
                  }`}
                >
                  <h6 className="text-p text-black font-pops font-regular">
                    {points}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="outcomes my-20">
          <div className="container">
            <div className="heading">
              <h4 className="custom-h5 font-medium text-bluePrimary font-pops">
                {solution.keyOutcomes.title}
              </h4>
            </div>

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solution.keyOutcomes.outcomes.map((points, index) => (
                <div
                  key={index}
                  className="item border-[2px] border-borderGrey p-4 group transition-all duration-300 ease-in-out"
                >
                  {/* Heading with hover effect to reduce font size */}
                  <p className="text-p font-pops font-regular text-xl group-hover:text-p group-hover:font-semibold transition-all duration-300 ease-in-out">
                    {points.heading}
                  </p>

                  {/* Description initially hidden, shown on hover */}
                  <p className="pt-4 text-p font-pops font-regular opacity-0 group-hover:opacity-100 group-hover:mt-2 transition-opacity duration-300 ease-in-out">
                    {points.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FeaturedInsights />
      </div>
    </>
  );
};

export default SolutionDetail;
