import React, { useEffect, useState } from "react";
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
            .slice(0, 4);
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
            <h2 className="custom-h3 font-semibold text-bluePrimary font-mont">
              INSIGHTS
            </h2>
            <h3 className="custom-h4 font-medium font-mont pt-4">
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
        <div className="text-lg text-red-500 font-pops">{error}</div>
      </div>
    );
  }

  return (
    <div className="feature-insights my-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="heading w-full lg:w-[60%] mb-10">
          <h2 className="custom-h3 font-semibold text-bluePrimary font-mont">
            INSIGHTS
          </h2>
          <h3 className="custom-h4 font-medium font-mont pt-4">
            Explore ways to future-proof businesses
          </h3>
        </div>

        <div className="insights-item my-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="item bg-white shadow-lg overflow-hidden flex flex-col justify-between gap-6 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="insight-image">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-62 object-cover"
                  />
                </div>
                <div className="category px-4">
                  <h6 className="text-[#919191] text-sm font-medium uppercase font-mont">
                    THIS WEEK IN{" "}
                    {insight.category ? insight.category : "No category"}
                  </h6>
                </div>
                <div className="content px-4 flex">
                  <h5 className="text-p font-medium font-mont text-[#919191] news-title">
                    {insight.title}
                  </h5>
                </div>
                <div className="read-more-btn px-4 pb-6 flex items-center gap-4 ">
                  <button className="font-semibold text-bluePrimary font-pops text-p">
                    Read More
                  </button>
                  <div className="image">
                    <Image
                      src="/assets/icon/arrow-blue-link.svg"
                      alt="Read More"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
        <Link href="/insights">
          <div className="flex items-center justify-between gap-8 p-4 border border-blueBorder">

              <button className="font-semibold text-blueBorder font-pops">
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
