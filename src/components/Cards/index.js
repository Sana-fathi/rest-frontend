import React from "react";

function index() {
  return (
    <section className="text-gray-600 body-font lg:px-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-20">
          <a className="font-medium title-font mb-4 w-32 text-gray-900 bg-tbRed px-2 py-1 text-center text-white rounded">
            Categories
          </a>
          <h3 className="sm:text-4xl text-2xl leading-relaxed font-worksans font-bold">
            Our Categories
          </h3>
        </div>

        <div className="flex flex-wrap">
         
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
             
                <div className="bg-white relative">
                  <div className="flex justify-center ">
                    <img
                      src={"./assets/img3.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mr-2 h-32 w-32 outline-double outline-gray hover:animate-pulse"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-zinc-600">
                     Biriyani
                    </div>
                  </div>
                </div>
         
            </div>
          </div>

         
          <div className="md:w-1/2 lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-white relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/img3.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mr-2 h-32 w-32"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-zinc-600">
                      Drinks
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-white relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/img3.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mr-2 h-32 w-32"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-zinc-600">
                    Thali
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-white relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/img3.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mr-2 h-32 w-32"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-zinc-600">
                     Kebab
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          
          <div className="md:w-1/2 lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-white relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/img3.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mr-2 h-32 w-32"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-zinc-600">
                      Chicken
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          

          <div className="md:w-1/2 lg:w-1/3 xl:w-1/6 py-4 px-4">
            <div className=" ">
              <a href="">
                <div className="bg-white relative">
                  <div className="flex justify-center">
                    <img
                      src={"./assets/img3.jpeg"}
                      className="rounded-full -mt-6  object-center object-cover mr-2 h-32 w-32"
                    />
                  </div>
                  <div className="py-2 px-2">
                    <div className=" font-bold font-title text-center text-zinc-600">
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
