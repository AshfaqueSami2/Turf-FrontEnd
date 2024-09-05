import bannerPicture from "../../assets/bannerImg/gettyimages-2163943380-2048x2048.jpg";

const Banner = () => {
  return (
    <section className="bg-[#FEF9E7] py-40 px-6 lg:px-16">
    <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
      {/* Left Section */}
      <div>
        <p className="text-green-700 uppercase text-sm font-semibold mb-3">
          #RevitalizingYourGame
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6 leading-tight">
          Elevate Your Badminton Journey
        </h1>
        <p className="text-gray-700 mb-8">
          Discover the path to becoming a better badminton player with our expert coaches and state-of-the-art facilities. Whether you're just starting out or fine-tuning your skills, our comprehensive training programs help you enhance your game, combining expert strategies and cutting-edge practices to take your performance to the next level.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
            Book a Session
          </button>
          <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg shadow-lg hover:bg-green-50 transition duration-300">
            Explore Our Programs
          </button>
        </div>
      </div>

      {/* Right Section - Single Image */}
      <div className="flex justify-center">
        <div className="rounded-full overflow-hidden w-64 h-64 mx-auto">
          <img
            src="https://i.ibb.co/55CQfR2/premium-vector-1714230285144-f9b6172c077f.jpg"
            alt="Badminton Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div className="container mx-auto flex justify-center mt-12 space-x-4">
      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3 hover:shadow-xl transition duration-300">
        <div className="bg-green-100 p-3 rounded-full">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m5-9a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <p className="text-gray-700 font-medium">Training Programs</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3 hover:shadow-xl transition duration-300">
        <div className="bg-green-100 p-3 rounded-full">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m5-9a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <p className="text-gray-700 font-medium">Gear & Accessories</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3 hover:shadow-xl transition duration-300">
        <div className="bg-green-100 p-3 rounded-full">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m5-9a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <p className="text-gray-700 font-medium">Tournaments & Events</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3 hover:shadow-xl transition duration-300">
        <div className="bg-green-100 p-3 rounded-full">
          <svg
            className="w-6 h-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m5-9a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <p className="text-gray-700 font-medium">Badminton Store</p>
      </div>
    </div>
  </section>
  );
};

export default Banner;
