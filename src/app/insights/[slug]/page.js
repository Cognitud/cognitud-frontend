"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import parse from "html-react-parser";

const InsightDetail = () => {
  const [insightItem, setInsightItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [recommendedInsights, setRecommendedInsights] = useState([]); // Updated: State for recommended insights
  const { slug } = useParams(); // Get the dynamic slug from the route

  // Fetch insight detail
  useEffect(() => {
    if (slug) {
      const fetchInsightDetail = async () => {
        try {
          const response = await fetch(`/api/insights/${slug}`);
          if (response.ok) {
            const data = await response.json();
            setInsightItem(data);
          } else {
            setError("Failed to fetch insight details");
          }
        } catch (error) {
          setError("Failed to fetch insight details");
          console.error("Error fetching insight details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchInsightDetail();
    }
  }, [slug]);

  // Fetch recommended/featured insights
  useEffect(() => {
    const fetchRecommendedInsights = async () => {
      try {
        const response = await fetch("/api/featuredInsights"); // Update with the correct API endpoint
        if (response.ok) {
          const data = await response.json();
          setRecommendedInsights(data);
        } else {
          setError("Failed to fetch recommended insights");
        }
      } catch (error) {
        setError("Failed to fetch recommended insights");
        console.error("Error fetching recommended insights:", error);
      }
    };

    fetchRecommendedInsights();
  }, []);

  // Function to add custom classes to specific tags
  const addCustomClasses = (htmlContent) => {
    return parse(htmlContent, {
      replace: (domNode) => {
        if (domNode.name === "h2") {
          domNode.attribs = {
            ...domNode.attribs,
            class: "custom-h5 font-mont font-semibold text-bluePrimary",
          };
        } else if (domNode.name === "h3") {
          domNode.attribs = {
            ...domNode.attribs,
            class: "custom-h6 font-mont font-semibold text-bluePrimary",
          };
        } else if (domNode.name === "p") {
          domNode.attribs = {
            ...domNode.attribs,
            class: "text-p font-pops font-regular",
          };
        }
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <div className="insights-detail-section mt-28">
        <div className="flex gap-12 py-8 px-32">
          <Link href="/insights">
            <h6 className="text-xs font-pops font-regular">1. INSIGHTS</h6>
          </Link>
          <h6 className="text-xs font-pops font-semibold">
            /2. {insightItem?.title}
          </h6>
        </div>

        <div className="relative banner-image">
          <img
            src={insightItem?.image}
            alt={insightItem?.title}
            className="w-full h-[22rem] lg:h-[32rem] object-cover"
          />
          <div className="absolute top-0 left-0 px-20 py-32 bg-gradient-to-t from-black to-transparent text-white w-full h-full">
            <h6 className="custom-h6 font-pops font-regular text-white">
              {insightItem?.category}
            </h6>
            <h1 className="custom-h4 w-[60%] font-mont font-regular mt-4">
              {insightItem?.title}
            </h1>
          </div>
        </div>

        <div className="my-20 content-section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12">
              <div className="content-details">
                {insightItem?.content && (
                  <div className="content text-gray-800">
                    {addCustomClasses(insightItem.content)}
                  </div>
                )}
              </div>

              <div className="recommended-insights flex flex-col gap-4">
                <h5 className="custom-h5 font-semibold text-bluePrimary">
                  Recommended Insights
                </h5>
                {recommendedInsights.length > 0 ? (
                  recommendedInsights.map((insight, index) => (
                    <div key={insight._id || index} className="relative">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-[263px] object-cover"
                      />
                      <div className="absolute top-0 py-12 px-4 flex flex-col justify-between h-full w-full bg-gradient-to-t from-black to-transparent">
                        <div className="flex justify-between items-center">
                          <button className="p-2 rounded-2xl border text-xs text-white">
                            {insight.category}
                          </button>
                          <span className="text-white">
                            {insight.weekday} ,{" "}
                            {new Date(insight.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="title">
                          <h4 className="text-p text-white font-mont font-medium">
                            <Link href={`/insights/${insight.slug}`}>
                              {insight.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No recommended insights available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightDetail;
