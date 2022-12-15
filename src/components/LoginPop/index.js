import React, { Children } from "react";
import { MenuClose } from "../Icons";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { Category } from "..";
import data from "../../utils/data";

const index = ({ isVisible, onClose, product }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-60 backdrop:blur-sm flex justify-center items-center "
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[600px] flex flex-col">
          <button
            type="button"
            className="text-white place-self-end"
            onClick={() => onClose()}
          >
            <MenuClose />
          </button>
         
          
          <div className='bg-white rounded'>

{/* LOGIN FORM STARTS */}

<section className="h-full sm:mt-10">
  <div className="px-6 h-full text-gray-800">
    <div
      className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >
      {/* <div
        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image"
        />
      </div> */}
      <div className=" overflow-y-scroll p-10">
      {data.product.map((product) => (
              <Category product={product} key={product.id}></Category>
            ))}
      </div>
    </div>
  </div>
</section>

{/* LOGIN FORM ENDS */}

                </div>



            {/* LOGIN FORM ENDS */}
          </div>
        </div>
      </div>
 
  );
};

export default index;
