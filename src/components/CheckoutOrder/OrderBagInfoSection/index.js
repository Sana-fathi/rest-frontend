import React from "react";

function index() {
  return (
    <div className="">
      <div>
        <h3 className="text-base font-bold text-gray-600 mb-2 uppercase">
          Order Items
        </h3>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                </div>

        <div className="item">
          <span className=""></span>
          <p className="item-name">
            <span></span>
          </p>
          <p
            className="text-end d-none item-description"
          ></p>
        </div>

        {/* <div className="item"><span className="price" style={{fontSize: '14px'}}>$200</span>
                <p className="item" style={{fontSize: '14px', fontWeight: 200}}><span style={{marginRight: '7px', color: '#c8c8c8'}}>2x</span>Thalassery Mutton Biriyani</p>
                <p className="text-end d-none item-description" style={{fontSize: '12px'}}>x3</p>
              </div> */}

        <div className="mb-3 font-medium font-font-dmsans text-gray-700">
          <div className="flex flex-row justify-between ">
            <span>Sub Total</span>
            <span className="price">$00</span>
          </div>

          <div className="flex flex-row justify-between">
            <span>Delivery</span>
            <span className="price">$00</span>
          </div>

          <div className="flex flex-row justify-between">
            <span>Discount</span>
            <span className="price">$00</span>
          </div>

          <div className="flex flex-row justify-between">
            <span className="font-bold text-gray-700">Total</span>
            <span className="price">$00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
