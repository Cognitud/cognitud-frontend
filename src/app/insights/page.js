"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Shimmer from "@/components/ShimmerUI"; // Import the shimmer component if needed
import Link from "next/link";

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading or trailing hyphens
};

const Insights = () => {
  const [insights, setInsights] = useState({ featured: [], all: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const insightsPerPage = 10;

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch("/api/featuredInsights");
        if (response.ok) {
          const data = await response.json();
          const featuredInsights = data
            .filter((insight) => insight.type === "Featured Insights")
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 4);
          const allInsights = data;

          setInsights({
            featured: featuredInsights,
            all: allInsights,
          });
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

  const indexOfLastInsight = currentPage * insightsPerPage;
  const indexOfFirstInsight = indexOfLastInsight - insightsPerPage;
  const currentInsights = insights.all.slice(indexOfFirstInsight, indexOfLastInsight);

  const totalPages = Math.ceil(insights.all.length / insightsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) return <Shimmer />; // Show shimmer effect while loading
  if (error) return <p>Error loading insights</p>; // Display error message

  return (
    <>
      <div className="insight-section mt-32">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_30%] gap-16">
            <div className="heading flex flex-col gap-6 py-20">
              <h1 className="custom-h3 font-regular font-mont">Insights</h1>
              <h3 className="custom-h5 font-regular font-mont">
                Deep knowledge, thoughtful analysis and our integrated
                commercial and public sectors know-how feed our research and
                advice. Here's how we apply our experience and foresight to
                support our clients.
              </h3>
            </div>

            <div className="subscription-form flex flex-col justify-end gap-6">
              <h5 className="custom-h6 font-regular font-mont">
                Subscribe to get Guidehouse news, thought leadership and events
                delivered to your inbox.
              </h5>

              <form className="flex flex-col gap-4">
                <div className="input-box border-b-2 border-bluePrimary flex flex-row gap-4 justify-between items-center py-2 mt-10">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="custom-h6 p-0 placeholder-bluePrimary outline-none w-full text-bluePrimary shadow-none bg-transparent border-none box-border"
                  />
                  <button
                    type="button"
                    className="flex justify-center items-center"
                    style={{ border: "none", background: "transparent" }}
                  >
                    <Image
                      src="/assets/icon/right.png"
                      alt="Subscribe"
                      width={26}
                      height={26}
                      className="w-[26px] object-cover cursor-pointer"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="feature-insights my-20">
            <div className="heading">
              <h1 className="custom-h3 font-mont font-regular text-bluePrimary">
                Featured Insights
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
              <div className="left-column">
                {insights.featured[0] && (
                  <div className="relative w-full h-full">
                    <img
                      src={insights.featured[0].image}
                      alt={insights.featured[0].title}
                      className="w-full object-cover h-full"
                    />
                    <div className="absolute top-0 flex flex-col justify-between px-[3rem] pt-[1.5rem] pb-[3rem] bg-gradient-to-t from-black to-transparent text-white w-full h-full">
                      <button className="p-2 w-[145px] rounded-2xl border text-p">
                        {insights.featured[0].category}
                      </button>
                      <div className="flex flex-col gap-8">
                        <span>
                          {insights.featured[0].weekday} ,{" "}
                          {new Date(insights.featured[0].date).toLocaleDateString()}
                        </span>
                        <h5 className="custom-h6 font-mont font-medium">
                          <Link href={`/insights/${createSlug(insights.featured[0].title)}`}>
                            {insights.featured[0].title}
                          </Link>
                        </h5>
                        <Link href={`/insights/${insights.featured[0].slug}`}>
                          <div className="read-more-btn flex items-center gap-4 pt-12">
                            <button className="font-semibold text-white font-pops text-p">
                              Read More
                            </button>
                            <div className="image">
                              <Image
                                src="/assets/icon/white-top-arrow.svg"
                                alt="Read More"
                                width={24}
                                height={24}
                                className="w-[24px] h-[24px] object-cover"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="right-column flex flex-col gap-6">
                {insights.featured.slice(1).map((insight) => (
                  <div
                    key={insight.slug} // Use slug or a unique property
                    className="flex gap-8 flex-col lg:flex-row border-custom-blue border-b-2 pb-6"
                  >
                    <div className="relative flex-1">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full object-cover"
                      />
                      <div className="absolute top-0 p-[1rem] bg-gradient-to-t from-black to-transparent text-white w-full h-full">
                        <button className="p-1 w-[145px] rounded-2xl border text-p">
                          {insight.category}
                        </button>
                      </div>
                    </div>
                    <div className="information flex flex-col gap-6 flex-1">
                      <span className="custom-h6 text-[#919191] font-mont">
                        {insight.weekday} ,{" "}
                        {new Date(insight.date).toLocaleDateString()}
                      </span>
                      <h4 className="custom-h6 font-mont font-medium">
                        <Link href={`/insights/${createSlug(insight.title)}`}>
                          {insight.title}
                        </Link>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="all-insights my-20">
            <div className="heading">
              <h1 className="custom-h3 font-mont font-regular text-bluePrimary">
                Insights to explore
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
              {currentInsights.map((insight) => (
                <div
                  key={insight.slug} // Use slug or a unique property
                  className="relative w-full h-full"
                >
                  <img
                    src={insight.image}
                    width={1000}
                    height={576}
                    alt={insight.title}
                    className="w-full min-h-[244px] lg:min-h-[466px] object-cover"
                  />
                  <div className="absolute top-0 flex flex-col gap-6 justify-between px-[3rem] pt-[1.5rem] pb-[3rem] bg-gradient-to-t from-black to-transparent text-white w-full h-full">
                    <button className="p-2 w-[145px] rounded-2xl border text-p">
                      {insight.category}
                    </button>
                    <div className="flex flex-col gap-6">
                      <span>
                        {insight.weekday} ,{" "}
                        {new Date(insight.date).toLocaleDateString()}
                      </span>
                      <h5 className="custom-h6 font-mont font-medium">
                        <Link href={`/insights/${createSlug(insight.title)}`}>
                          {insight.title}
                        </Link>
                      </h5>
                      <Link href={`/insights/${insight.slug}`}>
                        <div className="read-more-btn flex items-center gap-4 pt-12">
                          <button className="font-semibold text-white font-pops text-p">
                            Read More
                          </button>
                          <div className="image">
                            <Image
                              src="/assets/icon/white-top-arrow.svg"
                              alt="Read More"
                              width={24}
                              height={24}
                              className="w-[24px] h-[24px] object-cover"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination flex justify-center gap-4 my-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-btn flex items-center gap-2"
              >
                <Image
                  src="/assets/icon/prev-arrow.svg" // Placeholder URL for the arrow image
                  alt="Previous"
                  width={24}
                  height={24}
                />
                
              </button>
              <span className="pagination-info">
                 {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-btn flex items-center gap-2"
              >
                
                <Image
                  src="/assets/icon/next-arrow.svg" // Placeholder URL for the arrow image
                  alt="Next"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
