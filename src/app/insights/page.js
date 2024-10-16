"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Shimmer from "@/components/ShimmerUI"; // Import the shimmer component if needed
import Link from "next/link";

const createSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading or trailing hyphens
};

const Insights = () => {
  const [insights, setInsights] = useState({ featured: [], all: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("ALL");
  const insightsPerPage = 8;

  // Subscription state and logic
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();

      if (data.msg && data.msg.length > 0) {
        // Check for error messages from the API
        setMessage(data.msg.join(". "));
      } else if (data.success) {
        setMessage(data.msg.join(". "));
        setEmail(""); // Clear email input on successful subscription
        setShowSuccess(true); // Show success message
        setIsModalOpen(true); // Open the modal

        // Show modal and reload the page on modal close
        setTimeout(() => {
          setIsModalOpen(false);
          window.location.reload(); // Reload the page after closing
        }, 3000); // Reload after 3 seconds
      } else {
        setMessage("Failed to subscribe. Please try again later.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

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
  // Filter insights based on selected tab
  const filteredInsights =
    selectedTab === "ALL"
      ? insights.all
      : insights.all.filter((insight) => insight.category === selectedTab);
  const indexOfLastInsight = currentPage * insightsPerPage;
  const indexOfFirstInsight = indexOfLastInsight - insightsPerPage;
  const currentInsights = insights.all.slice(
    indexOfFirstInsight,
    indexOfLastInsight
  );

  const totalPages = Math.ceil(insights.all.length / insightsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // if (loading) return <Shimmer />;
  // Show shimmer effect while loading
  if (error) return <p>Error loading insights</p>; // Display error message

  // Function to create rows based on the current insights
  const getRows = () => {
    const rows = [];
    let currentRow = [];

    currentInsights.forEach((insight, index) => {
      if (index % 2 === 0) {
        if (currentRow.length > 0) {
          rows.push(currentRow);
        }
        currentRow = [insight];
      } else {
        currentRow.push(insight);
      }
    });

    if (currentRow.length > 0) {
      rows.push(currentRow);
    }

    return rows;
  };

  const rows = getRows();

  return (
    <>
      <div className="insight-section mt-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_30%] gap-16">
            <div className="heading flex flex-col gap-6  py-12">
              <h1 className="custom-h1 font-semibold font-mont">Insights</h1>
              <h5 className="custom-h4 font-light font-mont pt-20">
                Deep knowledge, thoughtful analysis and our integrated
                commercial and public sectors know-how feed our research and
                advice. Here's how we apply our experience and foresight to
                support our clients.
              </h5>
            </div>

            <div className="subscription-form flex flex-col justify-end gap-8 ">
              <h6 className="custom-h6 font-regular font-pops">
                Subscribe to get Cognitud Insights, thought leadership and
                events delivered to your inbox.
              </h6>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="input-box border-b-2 border-bluePrimary flex flex-row gap-4 justify-between items-center py-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="custom-h6 p-0 placeholder-gryPrimary outline-none w-full text-bluePrimary shadow-none bg-transparent border-none box-border"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
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

              {message && (
                <p className="p-4 text-bluePrimary bg-red items-center text-center pl-4">
                  {message}
                </p>
              )}
            </div>
          </div>

          <div className="feature-insights my-20">
            <div className="heading">
              <h3 className="custom-h4 font-medium text-bluePrimary font-mont">
                Featured Insights
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
              <div className="left-column">
                {loading ? (
                  <Shimmer className="w-full h-full" />
                ) : (
                  insights.featured[0] && (
                    <div className="relative w-full h-full">
                      <img
                        src={insights.featured[0].image}
                        alt={insights.featured[0].title}
                        className="w-full object-cover min-h-[224px] h-full"
                      />
                      <div className="absolute top-0 flex flex-col justify-between p-[1rem] lg:p-[2rem] bg-gradient-to-t from-black to-transparent text-white w-full h-full">
                        <button className="p-[0.5rem] flex item-center justify-center  w-[8rem] rounded-2xl border text-sm">
                          {insights.featured[0].category}
                        </button>
                        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                          <span className="font-mont font-pops font-regular">
                            {insights.featured[0].weekday} ,{" "}
                            {new Date(
                              insights.featured[0].date
                            ).toLocaleDateString()}
                          </span>
                          <h5 className="custom-h6 news-title font-pops font-medium">
                            <Link
                              href={`/insights/${createSlug(
                                insights.featured[0].title
                              )}`}
                            >
                              {insights.featured[0].title}
                            </Link>
                          </h5>
                          <Link href={`/insights/${insights.featured[0].slug}`}>
                            <div className="read-more-btn flex items-center gap-4">
                              <button className="font-medium text-white font-pops text-sm">
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
                  )
                )}
              </div>

              <div className="right-column flex flex-col justify-between gap-6">
                {loading ? (
                  <Shimmer className="w-full h-full" />
                ) : (
                  insights.featured.slice(1).map((insight, index, array) => (
                    <div
                      key={insight.slug}
                      className={`flex gap-8 lg:flex-row  pb-0 ${
                        index !== array.length - 1
                          ? "border-custom-blue border-b-2 pb-6"
                          : ""
                      }`}
                    >
                      <div className="relative flex-1">
                        <img
                          src={insight.image}
                          alt={insight.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 p-[1rem] bg-gradient-to-t from-black to-transparent text-white w-full h-full">
                          <button className="p-1 w-[8rem] rounded-2xl border text-xs font-pops">
                            {insight.category}
                          </button>
                        </div>
                      </div>
                      <div className="information flex flex-col gap-6 flex-1">
                        <span className="text-sm text-greyPrimary font-pops font-medium">
                          {insight.weekday},{" "}
                          {new Date(insight.date).toLocaleDateString()}
                        </span>
                        <h4 className="text-p font-pops font-regular">
                          <Link href={`/insights/${createSlug(insight.title)}`}>
                            {insight.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="all-insights my-20">
            <div className="heading">
              <h3 className="custom-h4 font-medium text-bluePrimary font-mont">
                Insights to explore
              </h3>
            </div>

            <div className="tabs flex items-center gap-12 my-12">
              <button
                onClick={() => setSelectedTab("ALL")}
                className={`tab-button custom-h6 border-b-2 font-pops ${
                  selectedTab === "ALL"
                    ? "border-bluePrimary"
                    : "border-transparent"
                } hover:border-bluePrimary transition-all duration-300 ease-in-out`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTab("Sustainability")}
                className={`tab-button custom-h6 border-b-2 font-pops ${
                  selectedTab === "Sustainability"
                    ? "border-bluePrimary"
                    : "border-transparent"
                } hover:border-bluePrimary transition-all duration-300 ease-in-out`}
              >
                Sustainability
              </button>
              <button
                onClick={() => setSelectedTab("Executive Search")}
                className={`tab-button custom-h6 border-b-2 font-pops ${
                  selectedTab === "Executive Search"
                    ? "border-bluePrimary"
                    : "border-transparent"
                } hover:border-bluePrimary transition-all duration-300 ease-in-out`}
              >
                Executive Search
              </button>
            </div>

            {filteredInsights.length === 0 ? (
              <div className="no-insights-found h-[400px] flex items-center justify-center text-center text-gray-600">
                <p>No insights found for the selected category</p>
              </div>
            ) : (
              <>
                {rows.map((row, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className={`grid ${
                      rowIndex % 3 === 2 && row.length === 3
                        ? "lg:grid-cols-3" // Third row with 3 equal columns if row has 3 items
                        : rowIndex % 2 === 0
                        ? "lg:grid-cols-[65%_34%]" // First row with 65% and 34%
                        : "lg:grid-cols-[34%_65%]" // Second row with 34% and 65%
                    } gap-6 my-12`}
                  >
                    {row.map((insight) => (
                      <div
                        key={insight.slug}
                        className="relative w-full h-full"
                      >
                        <img
                          src={insight.image}
                          alt={insight.title}
                          className="w-full object-cover min-h-[224px] h-full"
                        />
                        <div className="absolute top-0 flex flex-col justify-between p-[1rem] lg:p-[2rem] bg-gradient-to-t from-black to-transparent text-white w-full h-full">
                          <button className="p-[0.5rem] w-[8rem] rounded-2xl border text-sm font-pops">
                            {insight.category}
                          </button>
                          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                            <span className="font-pops text-sm font-medium">
                              {insight.weekday} ,{" "}
                              {new Date(insight.date).toLocaleDateString()}
                            </span>
                            <h5 className="custom-h6 font-pops font-medium">
                              <Link
                                href={`/insights/${createSlug(insight.title)}`}
                              >
                                {insight.title}
                              </Link>
                            </h5>
                            <Link href={`/insights/${insight.slug}`}>
                              <div className="read-more-btn flex items-center gap-4">
                                <button className="font-medium text-white font-pops text-sm">
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

                    {/* Only add filler elements if there are fewer than 3 items in the third row */}
                    {rowIndex % 3 === 2 &&
                      row.length < 3 &&
                      Array(3 - row.length)
                        .fill(null)
                        .map((_, fillerIndex) => (
                          <div
                            key={`filler-${fillerIndex}`}
                            className="w-full h-full"
                          />
                        ))}
                  </div>
                ))}
              </>
            )}
          </div>

          <div className="pagination flex justify-center gap-8  my-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn flex items-center gap-2"
            >
              <Image
                src="/assets/icon/prev-arrow.svg"
                alt="Previous"
                width={32}
                height={32}
                className="w-[2rem] h-[2rem]"
              />
            </button>
            <span className="pagination-info custom-h6 font-mons font-medium text-bluePrimar">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-btn flex items-center gap-2"
            >
              <Image
                src="/assets/icon/next-arrow.svg"
                alt="Next"
                width={32}
                height={32}
                className="w-[2rem] h-[2rem]"
              />
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Insights;
