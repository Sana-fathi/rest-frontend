import React from "react";

function index() {
  return (
    <div>
      <div className="container">
        <h4 className="text-base font-bold text-gray-600 mb-2">
          COLLECTION &amp; TIME DETAILS
        </h4>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                </div>
        <div className="container">
          <div className="">
            <div className="mb-3">
              <label className="font-semibold text-gray-700" htmlFor="check-order-type">
                Order Type
              </label>
              <div className="">
                <div className="flex flex-row space-x-3">
                  <div className="space-x-1">
                    <input
                      className="px-1"
                      type="radio"
                      id="formCheck-1"
                      name="check-order-type"
                      defaultValue="TAKEAWAY"
                    />
                    <label
                      className="font-font-worksans text-sm text-gray-500"
                      htmlFor="check-order-takeaway"
                    >
                      Take-Away
                    </label>
                  </div>

                  <div className="space-x-1">
                    <input
                      className="px-1"
                      type="radio"
                      id="formCheck-2"
                      name="check-order-type"
                      defaultValue="DELIVERY"
                    />
                    <label className="font-font-worksans text-sm text-gray-500" htmlFor="check-order-type">
                      Delivery
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="mb-3">
              <label className="font-semibold text-gray-700" htmlFor="check-order-time">
                Order Time
              </label>
              <div className="row">
                <div className="space-x-1">
                  <input
                    className=""
                    type="radio"
                    id="formCheck-3"
                    name="check-order-time"
                    defaultValue="CURRENT_ORDER"
                  />
                  <label className="font-font-worksans text-sm text-gray-600" htmlFor="check-order-now">
                    Earliest (30-60 Minss)
                  </label>
                  <div>
                    <span className="font-font-worksans text-sm text-gray-500">Only Pre-Order accepted during closed hours</span>
                  </div>
                </div>
        
                <div className="space-x-1">
                  <input
                    className=""
                    type="radio"
                    id="formCheck-2"
                    name="check-order-time"
                    defaultValue="PRE_ORDER"
                  />
                  <label className="font-font-worksans text-sm text-gray-600" htmlFor="check-preorder">
                    Pre Order
                  </label>
                </div>
 
              </div>
            </div>
            
          </div>
    
        </div>
      </div>
    </div>
  );
}

export default index;
