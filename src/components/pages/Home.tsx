import React, { useState, useEffect } from "react";
import Banner from "../layout/Banner";
import FeaturedFacilities from "./FeaturedFacilities";
import HowItWorks from "./HowItWorks";
import LatestNews from "./LatestNews";

const Home = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Function to handle scroll behavior
  //take some help from gpt to understand this
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 300) { // Show button when scrolled down 300px
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto p-6">
        <FeaturedFacilities />
      </div>
      <HowItWorks></HowItWorks>
      <LatestNews></LatestNews>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
