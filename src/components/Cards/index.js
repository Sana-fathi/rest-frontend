import React from "react";

function index() {
  return (
    <section className="text-gray-600 body-font lg:px-20 mb-20 xl:mb-32">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-20">
          <a className="font-medium text-xl mb-4 w-32 px-2 py-1 text-center text-gray-700 rounded font-caveat">
            Categories
          </a>
          <h3 className="sm:text-4xl text-4xl font-ubuntu font-bold">
            Our Categories
          </h3>
        </div>

        <div className="flex flex-wrap justify-center">
         
        <div className=" lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
             
                <div className="bg-[#333] shadow-md rounded-[25px] relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/naan.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mx-2 h-40 w-40 p-1 outline-double  outline-white"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center  text-white">
                     Biriyani
                    </div>
                  </div>
                </div>
         
            </div>
          </div>

         
          <div className=" lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-[#333] shadow-md rounded-[25px] relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/rice.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mx-2 h-40 w-40 p-1 outline-double  outline-white"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-white">
                      Drinks
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className=" lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-[#333] shadow-md rounded-[25px] relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/snacks.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mx-2 h-40 w-40 p-1 outline-double  outline-white"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-white">
                    Thali
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className=" lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-[#333] shadow-md rounded-[25px] relative"> 
                  <div className="flex justify-center">
                    <img
                      src={"./assets/naan.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mx-2 h-40 w-40 p-1 outline-double  outline-white"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-white">
                     Kebab
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          
          <div className=" lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-[#333] shadow-md rounded-[25px] relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/rice.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mx-2 h-40 w-40 p-1 outline-double  outline-white"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-white">
                      Chicken
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          

          <div className=" lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-[#333] shadow-md rounded-[25px] relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/snacks.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mx-2 h-40 w-40 p-1 outline-double  outline-white"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-white">
                      Desserts
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
