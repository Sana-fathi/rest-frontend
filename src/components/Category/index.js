import React from "react";
import { Category } from "..";



function index() {
  return (
    <div className="w-52 bg-white px-2 ">
      <div className="bg-green rounded text-center py-1 "><h3 className="font-medium text-white">Category</h3></div>
      <ul className="list-none space-y-5 mt-5 text-center overflow-y-scroll h-72 uppercase font-bold font-dmsans text-sm">
      
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
        <li key={index} className="text-black">biriyani</li>
      <li key={index} className="text-black">biriyani</li>
<li key={index} className="text-black">biriyani</li>

     
      </ul>
    </div>
  );
}

export default index;
