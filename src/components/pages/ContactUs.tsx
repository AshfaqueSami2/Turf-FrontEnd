const ContactUs = () => {
  return (
<div>
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


{/* component 2 */}
<section className="py-12 px-6 lg:px-0 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-500 mb-10">
          Feel free to contact us? Submit your queries here and we will listen.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-500">
            <div className="mb-4">
              <div className="inline-block p-4 bg-indigo-100 rounded-full">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M18 8a6 6 0 10-7.906 5.719l5.169 2.075a1 1 0 001.174-1.518l-2.106-2.106A5.978 5.978 0 0018 8zM12 0a8 8 0 11-5.293 13.793l5.252 2.101a3 3 0 01-2.8 1.106 3.001 3.001 0 010-6h2V8h-2a1 1 0 110-2h2a8 8 0 013-15z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Help Center</h3>
            <p className="text-gray-500 mb-6">Get Question? We have got an answer.</p>
            <a
              href="#"
              className="py-2 px-4 bg-indigo-600 text-white rounded-full transition duration-300 hover:bg-indigo-700"
            >
              Contact Us
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-500">
            <div className="mb-4">
              <div className="inline-block p-4 bg-indigo-100 rounded-full">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.3 2a1 1 0 00-.987 1.163l1.075 6.444c.116.692.646 1.174 1.39 1.307l6.138 1.125 4.828-4.828A8.014 8.014 0 0118 8c0 4.411-3.589 8-8 8a7.98 7.98 0 01-4.362-1.344L2.707 18.707a1 1 0 01-1.414-1.414l1.364-1.364A7.98 7.98 0 010 10a8 8 0 0111.031-7.734l-4.31 4.31L2.3 2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Call Us Now</h3>
            <p className="text-gray-500 mb-6">Get Question? We have got an answer.</p>
            <a
              href="#"
              className="py-2 px-4 bg-indigo-600 text-white rounded-full transition duration-300 hover:bg-indigo-700"
            >
              Contact Us
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-500">
            <div className="mb-4">
              <div className="inline-block p-4 bg-indigo-100 rounded-full">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 7h14a1 1 0 00.864-1.506l-7-11a1 1 0 00-1.728 0l-7 11A1 1 0 003 7zm12 6a1 1 0 01-1-1V6h-8v6a1 1 0 01-1 1h-2a1 1 0 000 2h14a1 1 0 000-2h-2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Chat with Us</h3>
            <p className="text-gray-500 mb-6">Get Question? We have got an answer.</p>
            <a
              href="#"
              className="py-2 px-4 bg-indigo-600 text-white rounded-full transition duration-300 hover:bg-indigo-700"
            >
              Contact Us
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition duration-500">
            <div className="mb-4">
              <div className="inline-block p-4 bg-indigo-100 rounded-full">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M16 7h-2v6h2V7zm-4-2h-2v10h2V5zm-4 2H6v6h2V7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Email Us Now</h3>
            <p className="text-gray-500 mb-6">Get Question? We have got an answer.</p>
            <a
              href="#"
              className="py-2 px-4 bg-indigo-600 text-white rounded-full transition duration-300 hover:bg-indigo-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>



    {/* component 3 */}
</div>
  );
};

export default ContactUs;
