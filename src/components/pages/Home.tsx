import Banner from "../layout/Banner";
import FeaturedFacilities from "./FeaturedFacilities";
import HowItWorks from "./HowItWorks";
import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto p-6">
        <FeaturedFacilities />
      </div>
      <HowItWorks></HowItWorks>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
