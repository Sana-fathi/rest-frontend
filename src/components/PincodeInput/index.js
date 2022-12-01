import React from 'react';
import {IoMdLocate} from 'react-icons/io';

function index(props) {
    const inputStyle = "absolute border-b border-gray-light px-10 md:flex py-2 my-2 w-[500px]"
    const buttonStyle = "absolute border-x border-gray-light px-3 py-1 mx-2 my-2 ml-[400px] text-gray-dark focus:text-orange"

  return (
    <div>
        <div className="relative hidden md:flex justify-center px-2">
            <input
              className={inputStyle}
              type="pincode"
              inputMode="pincode"
              name="pincode"
              id="pincode"
              placeholder="pincode"
              // style={{
              //   position: "relative",
              //   display: "flex",
              //   flexDirection: "row",
              //   justifyContent: "center",
              //   alignItems: "center",
              // }}
              required
            />
          <button type="button" className="absolute my-4 flex items-center pr-4 ml-48 focus:text-orange focus:animate-pulse"><IoMdLocate/></button>
          <button className={buttonStyle} type="submit">Delivery</button>
          </div>
    </div>
  )
}

export default index;

