// app/solutions/[slug]/page.js or pages/solutions/[slug].js
"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image"; // Ensure you import Image from Next.js
import { solutionsData } from "@/data/data"; // Adjust the import as needed
import Link from "next/link";

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
            <h6 className="text-sm font-pops font-regular">Home</h6>
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
            <h6 className="custom-h6 font-mont font-regular text-white">
              Solutions
            </h6>
            <h4 className="custom-h4 w-full lg:w-[60%] font-mont font-regular mt-4">
              Cognitud is shaping a sustainable future with the world's leading
              organizations
            </h4>
          </div>
        </div>

        <div className="why-cognitud-detail-para my-20">
          <div className="container">
            <div className="flex items-center justify-center w-full flex-col gap-6">
              <h6 className="custom-h6 font-pops font-regular">
                Cognitud strives to make a difference in the sustainability
                landscape by supporting businesses that share the same
                perspective. Our proficient sustainability advisors come up with
                several innovative strategies, like extensive business data
                assessment, identifying key performance indicators, using
                predictive analytics, and implementing digital tools for product
                traceability, which will help a business level up their
                sustainability game.
              </h6>
            </div>
          </div>
        </div>

        <div className="why-business my-20">
          <div className="container">
            <div className="heading">
              <h4 className="custom-h4 font-regular font-pops">
                Why is Data and Digital essential for businesses?
              </h4>
            </div>

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="item py-4 border-t border-b border-greyPrimary">
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item py-4 border-t border-b border-greyPrimary">
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item py-4 border-t border-b border-greyPrimary">
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item py-4 border-t border-b border-greyPrimary">
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>
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

        <div className="strategy my-20 bg-bluePrimary">
          <div className="container">
            <div className="heading py-12">
              <h4 className="custom-h4 font-regular font-pops text-white">
                Why is Data and Digital essential for businesses?
              </h4>
            </div>

            <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="item bg-white p-4 flex flex-col gap-4">
                <h6 className="custom-h6 font-pops font-regular font-medium">
                  Data Strategy and Integration:
                </h6>
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item bg-white p-4 flex flex-col gap-4">
                <h6 className="custom-h6 font-pops font-regular font-medium">
                  Data Strategy and Integration:
                </h6>
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item bg-white p-4 flex flex-col gap-4">
                <h6 className="custom-h6 font-pops font-regular font-medium">
                  Data Strategy and Integration:
                </h6>
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>

              <div className="item bg-white p-4 flex flex-col gap-4">
                <h6 className="custom-h6 font-pops font-regular font-medium">
                  Data Strategy and Integration:
                </h6>
                <p className="text-p font-pops font-regular">
                  Data analytics in business helps provide data-driven insights
                  in the areas of operations, performance metrics, market
                  trends, and customer behavior. This facilitates businesses in
                  making more strategic and wise decisions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="our-approach my-20">
          <div className="container">
            <div className="heading">
              <h4 className="custom-h4 font-medium text-bluePrimary font-pops">
                Our Approach
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 gap-12">
              <div className="flex gap-4 items-center py-8 border-b-2 border-grayS">
                <div className="">
                  <Image
                    src="/assets/icon/blue-circle.svg"
                    alt="circle"
                    width={32}
                    height={32}
                    className="cursor-pointer w-[22px] h-[22px]"
                  />
                </div>
                <div className="text">
                  <h3 className="custom-h6 font-sans font-light text-black">
                    Design of Process and Data Models
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 items-center py-8 border-b-2 border-grayS">
                <div className="">
                  <Image
                    src="/assets/icon/blue-circle.svg"
                    alt="circle"
                    width={32}
                    height={32}
                    className="cursor-pointer w-[22px] h-[22px]"
                  />
                </div>
                <div className="text">
                  <h3 className="custom-h6 font-sans font-light text-black">
                    Data Capture Automation and Digital Workflows
                  </h3>
                </div>
              </div>

              <div className="flex items-center py-8 border-b-2 border-grayS">
                <div className="">
                  <Image
                    src="/assets/icon/blue-circle.svg"
                    alt="circle"
                    width={32}
                    height={32}
                    className="cursor-pointer w-[22px] h-[22px]"
                  />
                </div>
                <div className="text ml-4">
                  <h3 className="custom-h6 font-sans font-light text-black">
                    Software Selection aligned with Requirements and Target
                    Architecture
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 items-center py-8 border-b-2 border-grayS">
                <div className="">
                  <Image
                    src="/assets/icon/blue-circle.svg"
                    alt="circle"
                    width={32}
                    height={32}
                    className="cursor-pointer w-[22px] h-[22px]"
                  />
                </div>
                <div className="text">
                  <h3 className="custom-h6 font-sans font-light text-black">
                    Solution Configuration and Deployment
                  </h3>
                </div>
              </div>

              <div className="flex gap-4 items-center py-8 border-b-2 border-grayS">
                <div className="">
                  <Image
                    src="/assets/icon/blue-circle.svg"
                    alt="circle"
                    width={32}
                    height={32}
                    className="cursor-pointer w-[22px] h-[22px]"
                  />
                </div>
                <div className="text">
                  <h3 className="custom-h6 font-sans font-light text-black">
                    Automated Sustainability Reporting and Disclosure
                  </h3>
                </div>
              </div>

              <div className="flex items-center py-8 border-b-2 border-grayS">
                <div className="">
                  <Image
                    src="/assets/icon/blue-circle.svg"
                    alt="circle"
                    width={32}
                    height={32}
                    className="cursor-pointer w-[22px] h-[22px]"
                  />
                </div>
                <div className="text ml-4">
                  <h3 className="custom-h6 font-sans font-light text-black">
                    Advanced Data Analytics, Visualization, and Dashboard
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionDetail;
