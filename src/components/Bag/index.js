import React from "react";
import { MenuClose } from "../Icons";
import { AiOutlineGooglePlus } from "react-icons/ai";

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
          <div className="">
            <div className="bg-white rounded w-96 h-screen mt-8">
              <button
                type="button"
                className="text-black px-2 py-2"
                onClick={() => onClose()}
              >
                <MenuClose />
              </button>

              {/* LOGIN FORM STARTS */}

              <div className=" flex justify-center mb-10">
                <h3 className="text-xl text-center font-font-dmsans font-bold">
                  SHOPPING BAG
                </h3>
              </div>

              <div className="px-10 space-y-2">
                <div className="flex flex-row justify-between">
                  <h4 className="font-semibold text-gray-700">Subtotal:</h4>
                  <p className="text-gray-700">$23</p>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="text-gray-700">Shipping</h4>
                  <p className="text-gray-700">$23</p>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="text-gray-700">Subtotal</h4>
                  <p className="text-gray-700">$23</p>
                </div>
                <div className="flex flex-row justify-between">
                  <h4 className="text-gray-700">Subtotal</h4>
                  <p className="text-gray-700">$23</p>
                </div>
              </div>

              <div className="mx-3 h-1 bg-gray-200 rounded mt-2 mb-4"></div>

              <div className="px-10 flex flex-row justify-between mb-10">
                  <h4 className="font-bold text-gray-700">Total:</h4>
                  <p className="text-gray-700">$23</p>
                </div>

              <div className=" flex justify-center mx-4 bg-green ">
                <button
                  type="button"
                  className="text-white px-2 py-2"
                  onClick={() => onClose()}
                >
                  CHECKOUT
                </button>
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
