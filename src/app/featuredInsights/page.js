"use client";

import React, { useEffect, useState } from "react";

const FeaturedInsights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the data from your API or data source
    const fetchInsights = async () => {
      try {
        const response = await fetch("/api/featuredInsights");
        if (response.ok) {
          const data = await response.json();
          // Filter insights by type "Featured Insights" and sort by date to get the latest 3
          const filteredInsights = data
            .filter(insight => insight.type === "Featured Insights")
            .sort((a, b) => new Date(b.date) - new Date(a.date)) // Assuming `date` is the field for publication date
            .slice(0, 3); // Get only the latest 3 insights
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
      <div className="flex justify-center items-center h-full">
        <div className="text-lg text-bluePrimary font-pops">Loading...</div>
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
    <div className="feature-insights my-40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="heading w-full lg:w-[60%] mb-10">
          <h4 className="custom-h4 font-semibold text-bluePrimary font-pops">
            Spotlight
          </h4>
          <h2 className="custom-h2 text-3xl lg:text-4xl font-medium font-pops pt-4">
            Explore the ideas that are shaping the future of business
          </h2>
        </div>

        <div className="insights-item my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="item bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <div className="insight-image">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="category px-4 py-2 bg-blue-100">
                  <h4 className="text-bluePrimary text-sm font-semibold uppercase font-pops">
                    {insight.category ? insight.category : "No category"}
                  </h4>
                </div>
                <div className="content px-4 py-4">
                  <h4 className="text-lg font-semibold font-pops">
                    {insight.title}
                  </h4>
                </div>
                <div className="read-more-btn px-4 py-4 flex items-center gap-4">
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
          <button className="font-semibold text-bluePrimary font-pops border-bluePrimary border p-4">View All insights</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsights;
