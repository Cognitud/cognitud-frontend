"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/latestNews"); // Adjust the path as needed
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error("Failed to fetch news items:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="latest-news my-40">
      <div className="container">
        <div className="heading">
          <h2 className="custom-h2 font-mons font-semibold">
            Cognitud News & Announcements
          </h2>
        </div>

        <div className="latest-news-items my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#f1f1f1] ">
            {newsItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col justify-between gap-8 px-4 py-6 border-r border-[#858585]/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/assets/icon/news-icon.png"
                      alt="News Icon"
                      width={1000}
                      height={600}
                      className="w-[1rem] h-[1rem] object-cover"
                    />
                    <h5 className="custom-h5 font-mons font-regular">News</h5>
                  </div>
                  <div className="date">
                    <h4>{new Date(item.date).toLocaleDateString()}</h4>
                  </div>
                </div>
                <div className="title">
                  <h4 className="text-lg font-semibold font-pops">
                    {item.title}
                  </h4>
                </div>
                <div className="read-more-btn flex items-center gap-4">
                  <button className="font-semibold text-bluePrimary font-pops">
                    Read More
                  </button>
                  <div className="image">
                    <img
                      src="/assets/icon/right.png"
                      alt="right-arrow"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>

        <div className="flex justify-center items-center">
          <button className="font-semibold text-bluePrimary font-pops border-bluePrimary border p-4">View All News</button>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
