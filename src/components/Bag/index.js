import React from "react";
import Link from "next/link";
import { MenuClose } from "../Icons";
import { AiOutlineGooglePlus } from "react-icons/ai";
import data from "../../utils/data";

const index = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-60 backdrop:blur-sm flex justify-end"
        id="wrapper"
        onClick={handleClose}
      >
        <div className=" flex flex-col">
          <div className="bg-[#f2f1ed] rounded w-96 h-screen mt-8 ">
            <button
              type="button"
              className="text-black px-4 py-4"
              onClick={() => onClose()}
            >
              <MenuClose />
            </button>
            <div className="bg-white rounded-lg shadow mx-2 p-2">
              {/* LOGIN FORM STARTS */}

              <div className=" flex justify-center mb-10">
                <h3 className="text-xl text-center font-ubuntu font-bold text-gray-700">
                  SHOPPING BAG
                </h3>
              </div>

              {/* items */}
              {/* {data.product.map((product) => ( */}
              <div className="px-10 py-3 space-y-2 h-32 rounded border mb-5 overflow-y-scroll">
              <div className=" flex justify-center">
                <h3 className="text-xl text-center font-ubuntu font-bold text-gray-700">
                  Order Summary
                </h3>
              </div>
              <div className="mx-3 h-[1px] bg-gray-200 rounded mt-2 mb-4"></div>

                <div
                  className="flex flex-row justify-between"
                  //  product={product} key={product.id}
                >
                  <img
                    src={"assets/snacks.jpeg"}
                    className="h-12 w-12 rounded"
                  />
                  <h4 className="font-semibold font-ubuntu text-gray-500">
                    biriyani
                  </h4>
                  <p className="text-gray-700 font-ubuntu">$23</p>
                </div>
                <div
                  className="flex flex-row justify-between"
                  //  product={product} key={product.id}
                >
                  <img
                    src={"assets/snacks.jpeg"}
                    className="h-12 w-12 rounded"
                  />
                  <h4 className="font-semibold font-ubuntu text-gray-500">
                    biriyani
                  </h4>
                  <p className="text-gray-700 font-ubuntu">$23</p>
                </div>
              </div>
              {/* ))} */}

              <div className="px-10 space-y-2">
                <div className="flex flex-row justify-between">
                  <h4 className="font-semibold font-ubuntu text-gray-500">
                    Subtotal:
                  </h4>
                  <p className="text-gray-700 font-ubuntu">$23</p>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="text-gray-700 font-ubuntu">Shipping</h4>
                  <p className="text-gray-700">$23</p>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="text-gray-700 font-ubuntu">Subtotal</h4>
                  <p className="text-gray-700 font-ubuntu">$23</p>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="text-gray-700 font-ubuntu">Subtotal</h4>
                  <p className="text-gray-700 font-ubuntu">$23</p>
                </div>
              </div>

              <div className="mx-3 h-[1px] bg-gray-200 rounded mt-2 mb-4"></div>

              <div className="px-10 flex flex-row justify-between mb-10">
                <h4 className="font-bold text-gray-700 font-ubuntu">Total:</h4>
                <p className="text-gray-700 font-ubuntu">$23</p>
              </div>

              <div className=" flex justify-center mx-4 bg-[#333] rounded">
                <Link href={"/checkout"}>
                  <button
                    type="button"
                    className="text-white px-2 py-2 "
                    onClick={() => onClose()}
                  >
                    CHECKOUT
                  </button>
                </Link>
              </div>
              {/* LOGIN FORM ENDS */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
