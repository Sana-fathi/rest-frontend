import React from "react";
import Image from "next/image";

function index() {
  return (
    <>
      <section className="text-gray-dark body-font font-font-dmsans">
        <div className="container px-5 py-24 mx-auto flex flex-col lg:flex-row">
          <div className="flex flex-col text-center lg:text-left mb-20">
            <h2 className="lg:w-2/3 mx-auto  text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 lg:text-left font-font-worksans">
              ROOF PARTY POLAROID
            </h2>
            <h1 className="lg:w-2/3 mx-auto  sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-font-worksans">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto px-5 md:px-0 leading-relaxed text-base font-font-dmsans mb-5">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
            <div className="pt-4 md:flex md:justify-center px-5">
              {" "}
              <Image src={"/assets/img3.jpeg"} width={600} height={600} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="md:w-full px-8 lg:py-6 lg:border-l-2 lg:border-gray-dim border-opacity-60 bg-gray-dim">
              <h2 clasName="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
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
            <div className=" md:w-full px-8 py-6 lg:border-l-2 lg:border-gray-dim border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Melanchole
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <a className="text-indigo-500 inline-flex items-center">
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
