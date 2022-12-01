import React from "react";
import { MailIcon, PhoneIcon } from "../Icons";

function index(props) {
  return (
    <div className="sticky w-auto h-10 bg-black ">
      <div className="h-full container mx-auto px-2">
        <div className="flex h-full items-center">
          <ul className="inline-flex text-white">
            <li className="mr-4 inline-flex content-center items-center">
              <PhoneIcon className="w-6 h-6 mr-1 md:w-4 md:h-4" />
              <span className="hidden md:inline text-sm">+65 9810 9499</span>
            </li>
            <li className="mr-4 inline-flex items-center">
              <MailIcon className="w-6 h-6 mr-1 md:w-4 md:h-4" />
              <span className="hidden md:inline text-sm">support@atees.sg</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default index;
