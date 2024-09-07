import "swiper/swiper-bundle.css"; // Make sure to include Swiper styles

// Optional: you might need to configure the Swiper settings as per your requirements.
const AboutUs = () => {
  return (
    <div>
      {/* About Us Section */}
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
          Take Your Game to the Next Level with Our Advanced{" "}
            <span className="text-indigo-600">Badminton Tools</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
            Invest intelligently and discover a better way to manage your entire
            wealth easily.
          </p>
        </div>
      </section>

      {/* About Us Content Section */}
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt="About Us tailwind page"
                className="max-lg:mx-auto"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                At <p className="text-green-700 font-bold inline">Sam Turf,</p> we're driven by a passion for badminton and creating world-class experiences for players of all levels. Our meticulously curated facilities are designed to empower athletes, enthusiasts, and coaches alike. Whether you're honing your skills, competing in tournaments, or simply enjoying the game, our mission is to provide a comprehensive environment that elevates your badminton experience. From our state-of-the-art courts to our dedicated team, every aspect of Sam Turf is built to ensure that every interaction on and off the court resonates with excellence and enthusiasm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections... */}

      <section className="py-24 bg-gray-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
      What our customers say about <span className="text-indigo-600">Sam Turf</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-indigo-600">
        <p className="text-gray-700 mb-6">
          Thanks to Sam Turf, my badminton skills have improved significantly. The courts are world-class, and the atmosphere is always welcoming.
        </p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="Emily Johnson"
          />
          <div className="ml-4">
            <h5 className="font-bold text-gray-900">Emily Johnson</h5>
            <p className="text-sm text-gray-500">Badminton Enthusiast</p>
          </div>
          <div className="ml-auto flex items-center">
            <span className="text-indigo-600 font-semibold">4.9</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5.74l.515 1.637a1 1 0 00.948.707h1.737l-1.307.946a1 1 0 00-.36 1.118l.514 1.636L12 10.828l-1.515 1.116-.513-1.637a1 1 0 00-.36-1.118l-1.307-.946h1.737a1 1 0 00.947-.707L12 5.74z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-indigo-600">
        <p className="text-gray-700 mb-6">
          Sam Turf has made it possible for me to play in a top-notch facility with excellent coaching and competition. I can't recommend it enough!
        </p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="Olivia Carter"
          />
          <div className="ml-4">
            <h5 className="font-bold text-gray-900">Olivia Carter</h5>
            <p className="text-sm text-gray-500">Amateur Player</p>
          </div>
          <div className="ml-auto flex items-center">
            <span className="text-indigo-600 font-semibold">4.9</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5.74l.515 1.637a1 1 0 00.948.707h1.737l-1.307.946a1 1 0 00-.36 1.118l.514 1.636L12 10.828l-1.515 1.116-.513-1.637a1 1 0 00-.36-1.118l-1.307-.946h1.737a1 1 0 00.947-.707L12 5.74z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-indigo-600">
        <p className="text-gray-700 mb-6">
          I've been playing at Sam Turf for over a year now, and the quality of the courts and staff is unbeatable. It's the perfect place to train and compete.
        </p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Wyatt Turner"
          />
          <div className="ml-4">
            <h5 className="font-bold text-gray-900">Wyatt Turner</h5>
            <p className="text-sm text-gray-500">CEO</p>
          </div>
          <div className="ml-auto flex items-center">
            <span className="text-indigo-600 font-semibold">4.9</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5.74l.515 1.637a1 1 0 00.948.707h1.737l-1.307.946a1 1 0 00-.36 1.118l.514 1.636L12 10.828l-1.515 1.116-.513-1.637a1 1 0 00-.36-1.118l-1.307-.946h1.737a1 1 0 00.947-.707L12 5.74z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-indigo-600">
        <p className="text-gray-700 mb-6">
          Thanks to Sam Turf, I've been able to connect with other badminton players and take my game to the next level.
        </p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="Ethan Miller"
          />
          <div className="ml-4">
            <h5 className="font-bold text-gray-900">Ethan Miller</h5>
            <p className="text-sm text-gray-500">Badminton Coach</p>
          </div>
          <div className="ml-auto flex items-center">
            <span className="text-indigo-600 font-semibold">4.9</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5.74l.515 1.637a1 1 0 00.948.707h1.737l-1.307.946a1 1 0 00-.36 1.118l.514 1.636L12 10.828l-1.515 1.116-.513-1.637a1 1 0 00-.36-1.118l-1.307-.946h1.737a1 1 0 00.947-.707L12 5.74z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 5 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-indigo-600">
        <p className="text-gray-700 mb-6">
          The staff at Sam Turf made sure I had everything I needed during my tournament. The experience was amazing.
        </p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Jackson Bennett"
          />
          <div className="ml-4">
            <h5 className="font-bold text-gray-900">Jackson Bennett</h5>
            <p className="text-sm text-gray-500">Tournament Player</p>
          </div>
          <div className="ml-auto flex items-center">
            <span className="text-indigo-600 font-semibold">4.9</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5.74l.515 1.637a1 1 0 00.948.707h1.737l-1.307.946a1 1 0 00-.36 1.118l.514 1.636L12 10.828l-1.515 1.116-.513-1.637a1 1 0 00-.36-1.118l-1.307-.946h1.737a1 1 0 00.947-.707L12 5.74z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Testimonial 6 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-indigo-600">
        <p className="text-gray-700 mb-6">
          Sam Turf is the best place for badminton training and competition. The environment is motivating, and the facilities are unmatched.
        </p>
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="Henry Foster"
          />
          <div className="ml-4">
            <h5 className="font-bold text-gray-900">Henry Foster</h5>
            <p className="text-sm text-gray-500">Professional Player</p>
          </div>
          <div className="ml-auto flex items-center">
            <span className="text-indigo-600 font-semibold">4.9</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5.74l.515 1.637a1 1 0 00.948.707h1.737l-1.307.946a1 1 0 00-.36 1.118l.514 1.636L12 10.828l-1.515 1.116-.513-1.637a1 1 0 00-.36-1.118l-1.307-.946h1.737a1 1 0 00.947-.707L12 5.74z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* We are Creative Since 2005 */}
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt="About Us tailwind page"
                  className="block lg:hidden mb-9 mx-auto"
                />

                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2005
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn’t just a collection of components and guidelines;
                  it's a philosophy. We go beyond aesthetics, prioritizing
                  accessibility, scalability, and usability. Every element, from
                  the tiniest detail to the grandest layout, is meticulously
                  crafted to enhance functionality and elevate user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box ">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="hidden lg:block "
              />
            </div>
          </div>
        </div>
      </section>
      {/* Our results in numbers */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Company's remarkable growth journey as we continually
                    innovate and drive towards new heights of success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Company growth
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of
                    pagedone and pillars of our success.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">
                    Projects Completed
                  </h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625 projects worldwide and we
                    are still counting many more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
            <div className="w-full lg:w-1/2">
              <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                Our leading, strong & creative team
              </h2>
              <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
                These people work on making our product best.
              </p>
              <button className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">
                Join our team
              </button>
            </div>
            <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                <img
                  src="https://pagedone.io/asset/uploads/1696238644.png"
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1696238665.png"
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1696238684.png"
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1696238702.png"
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1696238720.png"
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1696238737.png"
                  alt="Team tailwind section"
                  className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact us */}
      <section className="py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
      <div className="md:mb-0 mb-4">
        <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">Get In Touch</h2>
        <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
          Whether you have a concern or simply want to say hello, we are here to facilitate communication with you.
        </p>
        <div className="flex md:items-center md:justify-start justify-center">
          <button className="w-36 h-12 rounded-full bg-indigo-600 transition-all duration-700 hover:bg-indigo-800 shadow text-white text-center text-base font-semibold leading-6">
            Contact Us
          </button>
        </div>
      </div>
      <div className="border-l-2 md:border-indigo-600 border-white px-10 py-6">
        <div className="mb-8">
          <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Email Address</h6>
          <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">pagedone@gmail.com</h3>
        </div>
        <div>
          <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Phone Number</h6>
          <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">470-601-1911</h3>
        </div>
      </div>
    </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
      <div className="h-96 relative flex justify-center">
        <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
        <img
          src="https://pagedone.io/asset/uploads/1696246502.png"
          alt="United Kingdom image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 mb-6 text-center px-6">
          <h5 className="text-white text-lg font-semibold leading-7 mb-2">United Kingdom</h5>
          <p className="text-white text-base font-medium leading-6">123 High Street, Westminster, London</p>
        </div>
      </div>
      <div className="h-96 relative flex justify-center">
        <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
        <img
          src="https://pagedone.io/asset/uploads/1696246522.png"
          alt="Germany image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 mb-6 text-center px-6">
          <h5 className="text-white text-lg font-semibold leading-7 mb-2">Germany</h5>
          <p className="text-white text-base font-medium leading-6">
            101 Unter den Linden, Mitte <br />
            District, Berlin
          </p>
        </div>
      </div>
      <div className="h-96 relative flex justify-center">
        <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
        <img
          src="https://pagedone.io/asset/uploads/1696246551.png"
          alt="France image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 mb-6 text-center px-6">
          <h5 className="text-white text-lg font-semibold leading-7 mb-2">France</h5>
          <p className="text-white text-base font-medium leading-6">
            456 Rue de la Paix, 8th Arrondissement, Paris
          </p>
        </div>
      </div>
      <div className="h-96 relative flex justify-center">
        <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50"></div>
        <img
          src="https://pagedone.io/asset/uploads/1696246565.png"
          alt="Switzerland image"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 mb-6 text-center px-6">
          <h5 className="text-white text-lg font-semibold leading-7 mb-2">Switzerland</h5>
          <p className="text-white text-base font-medium leading-6">
            987 Bahnhofstrasse, Zurich <br />
            City Center, Zurich
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUs;




