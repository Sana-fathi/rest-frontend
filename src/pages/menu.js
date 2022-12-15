import React, { useState } from "react";
import { Layout, ProductItem, Category, LoginPop } from "../components";
import { List } from "../components/Icons";
import data from "../utils/data";

menu.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function menu({onClose}) {
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };


  return (
    <div className="bg-[#f2f1ed] h-full">
      <div className="flex flex-col bg-black items-center justify-center w-full">
        {/* <p className='bg-tbRed px-1 py-1 rounded-lg w-28 text-white font-medium text-center mb-4'>Menu</p>
    <h3 className='text-center font-extrabold font-worksans text-4xl mb-3'>Order Now</h3> */}
        {/* <div className="mx-5 h-1 bg-gray-300 rounded mt-2 mb-4"></div> */}
        <img
          src={
            "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/feature-platter.jpg"
          }
          className="relative object-cover h-72 w-full mix-blend-overlay"
        />
        <div className="absolute">
          <h3 className="text-5xl font-extrabold text-white z-100 font-ubuntu">
            ORDER NOW
          </h3>
        </div>
      </div>




      <div className="flex flex-col md:flex-row  px-2 m-8 mb-0 pb-5">
      {/* <div className="bg-green rounded text-center py-1 "><h3 className="font-medium text-white">Category</h3></div> */}

        <div className="hidden lg:flex">
        {/* <div className="bg-green rounded text-center py-1 "><h3 className="font-medium text-white">Category</h3></div> */}

          <div className="overflow-y-scroll h-96 w-72 bg-white">
            {data.product.map((product) => (
              <Category product={product} key={product.id}></Category>
            ))}
          </div>
        </div>

        {/*  mobile  */}

        <div className="w-full fixed bottom-0 left-0 z-50" id="header">
          <div className="h-16 flex lg:hidden justify-between items-center bg-white outline-2 container mx-auto px-4 rounded shadow-lg">
            <button className="inline-flex px-2 font-bold font-ubuntu text-gray-700"  onClick={() => setShow(true)}>
              <List />
              <p className="px-2">category</p>
              {/* <MenuIcon size={20} className="px-2"/> */}
            </button>
            {/* {data.product.map((product) => ( */}
           
            <LoginPop isVisible={show} onClose={() => setShow(false)}/>
       
            {/* ))} */}
          </div>
        </div>
        {/* <div className=''>
      <div className=''>
      {data.product.map((product) => (
      <Category product={product} key={product.id}></Category>
      ))}
      </div>
      </div> */}

        {/* <div className='h-96 w-72'></div> */}
        <div className="grid gap-4 mx-5 md:grid-cols-2 xl:grid-cols-4 grid-flow-row overflow-x-scroll">
          {data.product.map((product) => (
            <ProductItem product={product} key={product.id}></ProductItem>
          ))}
        </div>
      </div>
      </div>
  );
}

export default menu;
