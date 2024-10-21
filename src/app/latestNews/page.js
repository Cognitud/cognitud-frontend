'use client'
import React from "react";
import { useState , useEffect } from "react";
import Image from "next/image";
import Shimmer from "@/components/ShimmerUI"; // Import the shimmer component
import Link from "next/link";

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // Step 1: State for hover

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/latestNews"); // Adjust the path as needed
        const data = await response.json();

        // Filter news items by category "Features News"
        const filteredNews = data.filter(item => item.type === "Featured News");

        setNewsItems(filteredNews);
        setLoading(false); // Data fetched, stop loading
      } catch (error) {
        console.error("Failed to fetch news items:", error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="latest-news my-20">
        <div className="container">
          <div className="heading mb-10">
            <h3 className="custom-h4 font-semibold text-bluePrimary font-mont">
              LATEST NEWS
            </h3>
            <h4 className="custom-h6 font-regular font-pops pt-4">
              Explore ways to future-proof businesses
            </h4>
          </div>
          <Shimmer /> {/* Show shimmer effect while loading */}
        </div>
      </div>
    );
  }

  return (
    <div className="latest-news my-20">
      <div className="lg:mx-8 mx-4">
        <div className="heading mb-10">
          <h4 className="custom-h4 font-semibold text-bluePrimary font-mont">
            LATEST NEWS
          </h4>
          <h4 className="custom-h6 font-regular font-pops pt-4">
            Discover the latest in sustainability
          </h4>
        </div>

        <div className="latest-news-items my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Slice the newsItems array to show only the latest 3 items */}
            {newsItems.slice(0, 4).map((item) => (
              <div key={item._id} className="w-full flex flex-col gap-4 relative "> 
                <img
                  src={item.image} // Assuming the news item has an image URL field
                  alt={item.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                />
                <div
                  className="news-card-content relative flex flex-col justify-between gap-6"
                >
                  <div className="flex items-center justify-between">
                    <button className="text-xs text-bluePrimary font-pops">
                      {item.category ? item.category : "No category"}
                    </button>
                    <div className="date">
                      <h4 className="text-xs font-regular font-pops text-greyPrimary">
                        {new Date(item.date).toLocaleDateString()}{" "}
                        {/* Date field */}
                      </h4>
                    </div>
                  </div>

                  <div className="title">
                    <h3 className="news-title text-p font-pops font-medium news-title ">
                      {item.title} {/* Title field */}
                    </h3>
                  </div>

                  <div className="read-more-btn pb-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/assets/icon/arrow-blue-link.svg"
                        alt="Read More"
                        width={28}
                        height={28}
                        className="w-[28px] h-[28px] object-cover"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Link href="/news">
            <div
              className="flex items-center justify-center gap-8 py-4  px-2 w-[10rem] border border-borderGrey text-bluePrimary hover:text-white transition duration-300 ease-in-out hover:bg-bluePrimary"
              onMouseEnter={() => setIsHovered(true)} // Step 2: Set hover state to true
              onMouseLeave={() => setIsHovered(false)} // Set hover state to false
            >
              <button className="font-semibold font-pops text-sm">
                View All
              </button>
              <Image
                src={
                  isHovered
                    ? "/assets/icon/white-cognitud-arrow.svg" // Use white arrow when hovered
                    : "/assets/icon/arrow-blue-link.svg" // Use blue arrow otherwise
                }
                alt="Read More"
                width={24}
                height={24}
                className="w-[24px] h-[24px] object-cover transition duration-300 ease-in-out"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
