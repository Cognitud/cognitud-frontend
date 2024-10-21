  'use client'

  import React from "react";
  import { useState , useEffect } from "react";
  import Image from "next/image";
  import Shimmer from "@/components/ShimmerUI"; // Import the shimmer component
  import Link from "next/link";
  const FeaturedInsights = () => {
    const [insights, setInsights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchInsights = async () => {
        try {
          const response = await fetch("/api/featuredInsights");
          if (response.ok) {
            const data = await response.json();
            const filteredInsights = data
              .filter((insight) => insight.type === "Featured Insights")
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 3);
            setInsights(filteredInsights);
          } else {
            setError("Failed to fetch insights");
          }
        } catch (error) {
          setError("Failed to fetch insights");
          console.error("Error fetching insights:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchInsights();
    }, []);

    if (loading) {
      return (
        <div className="feature-insights my-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="heading w-full lg:w-[60%] mb-10">
              <h2 className="custom-h4 font-semibold text-bluePrimary font-mont">
                INSIGHTS
              </h2>
              <h3 className="custom-h6 font-medium font-mont pt-4">
                Explore ways to future-proof businesses
              </h3>
            </div>
            <Shimmer />
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="text-lg text-red-500 font-mont">{error}</div>
        </div>
      );
    }

    return (
      <div className="feature-insights my-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="heading w-full lg:w-[60%] mb-10">
            <h3 className="custom-h4 font-semibold text-bluePrimary font-mont">
              INSIGHTS
            </h3>
            <h4 className="custom-h6 font-regular font-pops pt-4">
              Explore ways to future-proof businesses
            </h4>
          </div>

          <div className="insights-item my-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="item flow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <div className="insight-image">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-62 object-cover"
                    />
                  </div>
                  <div className="px-[1.5rem]">
                    <div className="content-inner relative mt-[-3rem] px-[1rem] py-[1.5rem] bg-white flex flex-col gap-4 border-b-2 border-bluePrimary">
                      {/* <h6 className="text-greyPrimary text-xs font-medium uppercase font-mont">
                        THIS WEEK IN{" "}
                        {insight.category ? insight.category : "No category"}
                      </h6> */}

                      <h5 className="custom-h6 font-medium font-pops text-[#001b42] news-title">
                        {insight.title}
                      </h5>

                      <div className="read-more-btn flex items-center gap-4 ">
                        <button className="font-medium text-bluePrimary font-pops text-sm">
                          Read More
                        </button>
                        <div className="image">
                          <Image
                            src="/assets/icon/arrow-blue-link.svg"
                            alt="Read More"
                            width={20}
                            height={20}
                            className="w-[20px] h-[20px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Link href="/insights">
              <div className="flex items-center justify-center gap-8 p-2 w-[9rem] border border-blueBorder">
                <button className="font-semibold text-blueBorder font-pops text-sm">
                  View All
                </button>
                <Image
                  src="/assets/icon/arrow-blue-link.svg"
                  alt="Read More"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default FeaturedInsights;
