import React, { useState, useEffect } from "react";
import Image from "next/image";
import Shimmer from "@/components/ShimmerUI"; // Import the shimmer component

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/latestNews"); // Adjust the path as needed
        const data = await response.json();
        setNewsItems(data);
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
            <h2 className="custom-h3 font-semibold text-bluePrimary font-mont">
              LATEST NEWS
            </h2>
            <h3 className="custom-h4 font-medium font-mont pt-4">
              Explore ways to future-proof businesses
            </h3>
          </div>
          <Shimmer /> {/* Show shimmer effect while loading */}
        </div>
      </div>
    );
  }

  return (
    <div className="latest-news my-20">
      <div className="container">
        <div className="heading mb-10">
          <h2 className="custom-h3 font-semibold text-bluePrimary font-mont">
            LATEST NEWS
          </h2>
          <h3 className="custom-h4 font-medium font-mont pt-4">
          Discover the latest in sustainability
          </h3>
        </div>

        <div className="latest-news-items my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Slice the newsItems array to show only the latest 3 items */}
            {newsItems.slice(0, 3).map((item) => (
              <div key={item._id} className="flex flex-col">
                <img
                  src={item.image} // Assuming the news item has an image URL field
                  alt={item.title}
                  className="w-full h-[240px] object-cover"
                />
                <div
                  className="news-card-content relative mt-[-2rem] mx-2 p-4 flex flex-col justify-between gap-8 shadow-[0_.2px_60px_0_rgba(217,202,250,0.1)] backdrop-blur-[65px]"
                  style={{
                    background:
                      "linear-gradient(23deg, rgba(178, 198, 216, 0.4) 13.8%, rgba(255, 255, 255, 0.75) 96.31%)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <button className="bg-[#1f4e79] p-2 rounded-[22px] custom-h6 text-white">
                      {item.category || "Category"} {/* Category field */}
                    </button>
                    <div className="date">
                      <h4 className="custom-h5 font-regular font-mont">
                        {new Date(item.date).toLocaleDateString()}{" "}
                        {/* Date field */}
                      </h4>
                    </div>
                  </div>

                  <div className="title">
                    <h3 className="news-title custom-h4 font-mont font-medium">
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
                        width={32}
                        height={32}
                        className="w-[32px] h-[32px] object-cover"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
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
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
