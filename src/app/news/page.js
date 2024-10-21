"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Shimmer from "@/components/ShimmerUI"; // Import the Shimmer component

const News = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [loading, setLoading] = useState(true);

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
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/latestNews"); // Adjust the path as needed
        const data = await response.json();
        setNewsItems(data); // Set the fetched news items
        setLoading(false); // Data fetched, stop loading
      } catch (error) {
        console.error("Failed to fetch news items:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchNews();
  }, []);

  // Filter news items based on the selected tab
  const filteredNewsItems =
    selectedTab === "ALL"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedTab);

  return (
    <div className="news-section mt-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_30%] gap-16">
          <div className="heading flex flex-col gap-6 py-12">
            <h1 className="custom-h1 font-regular font-mont">News</h1>
            <h5 className="custom-h4 font-regular font-mont pt-20">
              Deep knowledge, thoughtful analysis, and our integrated commercial
              and public sectors know-how feed our research and advice. Here&apos;s
              how we apply our experience and foresight to support our clients.
            </h5>
          </div>

          <div className="subscription-form flex flex-col justify-end gap-8">
            <h6 className="custom-h6 font-regular font-pops">
              Subscribe to get Cognitud news, thought leadership, and events
              delivered to your inbox.
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

        <div className="all-news my-20">
          <div className="heading flex items-center justify-center">
            <h3 className="custom-h4 font-medium text-bluePrimary font-mont">
              News to explore
            </h3>
          </div>

          <div className="tabs flex items-center justify-center gap-12 my-12">
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
              onClick={() => setSelectedTab("Media Coverage")}
              className={`tab-button custom-h6 border-b-2 font-pops ${
                selectedTab === "Media Coverage"
                  ? "border-bluePrimary"
                  : "border-transparent"
              } hover:border-bluePrimary transition-all duration-300 ease-in-out`}
            >
              Media Coverage
            </button>
          </div>

          <div className="news-items my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show shimmer effect while loading */}
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <Shimmer key={index} className="flex flex-col gap-6 mb-12">
                  <div className="relative image bg-gray-200 animate-pulse h-[240px]">
                    {/* Shimmer effect for the image */}
                  </div>
                  <div className="flex gap-6 flex-col">
                    <div className="data bg-gray-200 animate-pulse h-6 w-40"></div>
                    <div className="title news-title bg-gray-200 animate-pulse h-6 w-72"></div>
                  </div>
                </Shimmer>
              ))
            ) : /* Display filtered news items */
            filteredNewsItems.length > 0 ? (
              filteredNewsItems.map((item) => (
                <div key={item._id} className="flex flex-col gap-6 mb-12 border p-2">
                  <div className="relative image">
                    <img
                      src={item.image} // Assuming the news item has an image URL field
                      alt={item.title}
                      // width={1000}
                      he
                      className="w-full h-[240px] object-cover"
                    />
                    <div className="absolute top-0 flex flex-col justify-between px-[1.5rem] pt-[1.5rem] pb-[3rem]  text-white w-full h-full">
                      <button className="p-1 w-[9rem] rounded-2xl bg-white text-black border font-pops text-sm font-medium">
                        {item.category ? item.category : "No category"}
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-6 flex-col">
                    <div className="data">
                      <span className="font-pops text-sm font-medium">
                        {item.weekday},{" "}
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="title news-title">
                      <Link href={`/news/${item.slug}`}>
                        <h5 className="custom-h6 font-pops font-medium">
                          {item.title}
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No news available for the selected category.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
