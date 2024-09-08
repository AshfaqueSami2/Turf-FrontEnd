import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-20">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-indigo-900 mb-4">
          How Our Badminton Academy <p className="text-green-600 inline">Works?</p>
        </h2>
        <p className="text-gray-500 text-lg max-w-3xl mx-auto mb-12">
          Discover the steps to boost your badminton skills with our tailored training sessions. Our world-class coaching program ensures rapid improvement and offers an enjoyable learning experience.
        </p>
      </div>

      {/* Image & Steps Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Image on the right */}
        <div className="hidden lg:block">
          <img
          style={{marginLeft:'120px'}}
            src="https://i.ibb.co/cDfjy03/240-F-310621281-fo-Eq-KBGt-Gl-NWFQRe-Pgd-F5-Bp-LOFy-Tsnz-O.jpg"
            alt="Badminton Training"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Steps on the left */}
        <div className="space-y-10">
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-xl">
                1
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900">
                Tailored Badminton Coaching
              </h3>
              <p className="text-gray-500">
                Our expert coaches analyze your playing style and create a customized training plan to help you improve your footwork, shots, and game strategy.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-xl">
                2
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900">
                Team-Based Practice
              </h3>
              <p className="text-gray-500">
                Engage in team-based practice sessions, improve your doubles coordination, and work on perfecting your shot placement and speed.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <span className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-xl">
                3
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-900">
                Advanced Match Insights
              </h3>
              <p className="text-gray-500">
                Play real-time matches, receive feedback from our professional coaches, and improve your competitive edge by applying tactical game strategies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image display */}
      <div className="lg:hidden mt-10">
        <img
          src="https://i.ibb.co/cDfjy03/240-F-310621281-fo-Eq-KBGt-Gl-NWFQRe-Pgd-F5-Bp-LOFy-Tsnz-O.jpg"
          alt="Badminton Training"
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>


      {/* testomonial */}

      
      <section className="py-24 bg-gray-50">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
      What our customers say about <span className="text-green-600">Sam Turf</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-green-600">
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
            <span className="text-green-600 font-semibold">4.9</span>
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
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-green-600">
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
            <span className="text-green-600 font-semibold">4.9</span>
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
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-green-600">
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
            <span className="text-green-600 font-semibold">4.9</span>
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
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-green-600">
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
            <span className="text-green-600 font-semibold">4.9</span>
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
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-green-600">
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
            <span className="text-green-600 font-semibold">4.9</span>
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
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 border border-transparent hover:border-green-600">
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
            <span className="text-green-600 font-semibold">4.9</span>
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

    </div>
  );
};

export default HowItWorks;
