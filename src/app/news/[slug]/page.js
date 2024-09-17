"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import parse from "html-react-parser";
import Shimmer from "@/components/ShimmerUI";

const NewsDetail = () => {
  const [newsItem, setNewsItem] = useState(null);
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { slug } = useParams(); // Get the dynamic slug from the route

  useEffect(() => {
    if (slug) {
      const fetchNewsDetail = async () => {
        try {
          const response = await fetch(`/api/news/${slug}`);
          if (response.ok) {
            const data = await response.json();
            setNewsItem(data);
          } else {
            setError("Failed to fetch news details");
          }
        } catch (error) {
          setError("Failed to fetch news details");
          console.error("Error fetching news details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchNewsDetail();
    }
  }, [slug]);

  useEffect(() => {
    // Fetch the latest news for the "Latest News" section
    const fetchLatestNews = async () => {
      try {
        const response = await fetch("/api/latestNews");
        if (response.ok) {
          const data = await response.json();
          // Filter only "Featured News" type and limit to 3 news items
          const filteredNews = data
            .filter((item) => item.type === "Featured News")
            .slice(0, 3);
          setLatestNews(filteredNews);
        } else {
          setError("Failed to fetch latest news");
        }
      } catch (error) {
        setError("Failed to fetch latest news");
        console.error("Error fetching latest news:", error);
      }
    };

    fetchLatestNews();
  }, []);

  // Function to add custom classes to specific tags
  const addCustomClasses = (htmlContent) => {
    return parse(htmlContent, {
      replace: (domNode) => {
        if (domNode.name === "h2") {
          domNode.attribs = {
            ...domNode.attribs,
            class: "custom-h4 font-mont font-semibold text-bluePrimary",
          };
        } else if (domNode.name === "h3") {
          domNode.attribs = {
            ...domNode.attribs,
            class: "custom-h6 font-mont font-semibold text-bluePrimary",
          };
        } else if (domNode.name === "p") {
          domNode.attribs = {
            ...domNode.attribs,
            class: "text-p font-mont font-regular leading-custom-32",
          };
        }
      },
    });
  };

  if (loading) return <Shimmer />
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <div className="news-section-detail mt-28">
        <div className="flex gap-12 py-6 container">
          <Link href="/news">
            <h6 className="text-xs font-pops font-regular">1. INSIGHTS</h6>
          </Link>
          <h6 className="text-xs font-pops font-semibold">
            2. {newsItem?.title}
          </h6>
        </div>

        <div className="relative banner-image">
          <img
            src={newsItem?.image}
            alt={newsItem?.title}
            className="w-full h-[22rem] lg:h-[32rem] object-cover"
          />
          <div className="absolute top-0 left-0 px-20 py-32 bg-gradient-to-t from-black to-transparent text-white w-full h-full">
            <h6 className="custom-h6 font-mont font-regular text-white">
              {newsItem?.category}
            </h6>
            <h4 className="custom-h4 w-[60%] font-mont font-regular mt-4">
              {newsItem?.title}
            </h4>
          </div>
        </div>

        <div className="my-20 content-section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12">
              <div className="content-details">
                {newsItem?.content && (
                  <div className="content text-gray-800">
                    {addCustomClasses(newsItem.content)}
                  </div>
                )}

                {/* Add Download PDF link if the PDF URL exists */}
                {newsItem?.pdf && (
                  <div className="mt-6">
                    <a
                      href={newsItem.pdf} // Use the PDF URL stored in the database
                      target="_blank" // Open in a new tab
                      rel="noopener noreferrer" // Security best practice
                      className="text-bluePrimary font-semibold underline custom-h6 font-mont"
                    >
                      Download PDF
                    </a>
                  </div>
                )}
              </div>

              <div className="recommended-news flex flex-col gap-4">
                <h5 className="custom-h5 font-semibold text-bluePrimary">
                  Latest News
                </h5>
                <div className="flex flex-col gap-12">
                  {/* Display only "Featured News" type and show 3 items */}
                  {latestNews.map((item) => (
                    <div key={item._id} className="flex flex-col gap-6 mb-12">
                      <div className="relative image">
                        <img
                          src={item.image} // Assuming the news item has an image URL field
                          alt={item.title}
                          className="w-full h-[240px] object-cover"
                        />
                        <div className="absolute top-0 flex flex-col justify-between px-[1.5rem] pt-[1.5rem] pb-[3rem] bg-gradient-to-t from-black to-transparent text-white w-full h-full">
                          <button className="p-1 w-[10rem] rounded-2xl border font-mont text-sm font-medium">
                            {item.category ? item.category : "No category"}
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-6 flex-col">
                        <div className="data">
                          <span className="font-mont text-sm font-medium">
                            {" "}
                            {item.weekday} ,{" "}
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="title news-title">
                          <Link href={`/news/${item.slug}`}>
                            <h5 className="custom-h6 font-mont font-medium">
                              {item.title}
                            </h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
