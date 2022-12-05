import React from "react";
import { MailIcon, PhoneIcon } from "../Icons";

function index(props) {
  return (
    <div className="sticky fixed-top w-auto h-8 bg-black ">
      <div className="h-full container mx-auto px-2">
        <div className="flex h-full items-center justify-between">
          <ul className=" text-white px-5">
            <li className="mr-4 inline-flex content-center items-center">
              <PhoneIcon className="mr-1 w-4 h-4" />
              <span className="hidden md:inline  text-[12px] font-font-dmsans">+65 9810 9499</span>
            </li>
            <li className="mr-4 inline-flex items-center">
              <MailIcon className=" mr-1 w-4 h-4" />
              <span className="hidden md:inline text-[12px] font-font-dmsans">support@atees.sg</span>
            </li>
       
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default index;
