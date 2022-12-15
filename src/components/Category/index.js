import React from "react";


const index =  ({product}) => {
  return (
    <>

    <div className="w-52  px-2 ">
      {/* <div className="bg-green rounded text-center py-1 "><h3 className="font-medium text-white">Category</h3></div> */}
      <ul className="list-none space-y-5 lg:mt-5 text-center uppercase font-bold font-dmsans text-sm">
      
        {/* <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
      <li key={index} className="text-black">biriyani</li> */}
    
        <li className="text-black">{product.category_name}</li>
      </ul>
    </div>
    </>
  );
}

export default index;
