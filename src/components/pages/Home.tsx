import Banner from "../layout/Banner";
import FeaturedFacilities from "./FeaturedFacilities";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto p-6">
        <FeaturedFacilities />
      </div>
    </div>
  );
};

export default Home;
