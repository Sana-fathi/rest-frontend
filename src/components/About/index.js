import React from "react";
// import Image from "next/image";

function index() {
  return (
    <>
      <section className="text-gray-dark body-font font-font-dmsans">
        <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row">
          <div className="flex flex-col text-center lg:text-left mb-20">
            <div className="wrapper antialiased text-gray-900">
              <div>
                <img
                  src={"/assets/img3.jpeg"}
                  alt=" random imgee"
                  className="w-full object-cover object-center rounded shadow-md"
                />

                <div className="relative px-4 -mt-16  ">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h4 className="mt-1 text-xl font-semibold leading-tight truncate">
                      Our Services Since 1999
                    </h4>

                    <div className="mt-4">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisici elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua. Idque Caesaris Lorem ipsum dolor sit amet,
                        consectetur adipisici elit, sed eiusmod tempor incidunt
                        ut labore et dolore magna aliqua. Idque Caesaris
                      </p>
                    </div>
                    <a className="text-gray-700 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="md:w-full px-8 lg:py-6 lg:border-l-2 lg:border-gray-dim border-opacity-60 hover:shadow-md ">
              <p clasName="text-lg sm:text-3xl text-gray-900 font-bold mb-2">
                Standard Post Format
              </p>
              <p className="leading-relaxed text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque
                Caesaris
              </p>
              <a className="text-gray-700 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className=" md:w-full px-8 py-6 lg:border-l-2 lg:border-gray-dim border-opacity-60 hover:shadow-md">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque
                Caesaris
              </p>
              <a className="text-gray-700 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
