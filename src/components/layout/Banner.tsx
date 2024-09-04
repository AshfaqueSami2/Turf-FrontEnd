import bannerPicture from "../../assets/bannerImg/gettyimages-2163943380-2048x2048.jpg";

const Banner = () => {
  return (
    <div>
      <main className="bg-white relative overflow-hidden">
        <div className="bg-white flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 py-16 flex flex-col sm:flex-row relative">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 mb-8 sm:mb-0">
              <span className="w-20 h-2 bg-black mb-8"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none text-black">
                Book
                <span className="text-5xl sm:text-7xl">Now</span>
              </h1>
              <p className="text-sm sm:text-base text-black mt-4">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="flex mt-8">
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="sm:w-1/3 lg:w-3/5 relative">
              <img
                src={bannerPicture}
                className="max-w-xs md:max-w-md lg:max-w-lg m-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
