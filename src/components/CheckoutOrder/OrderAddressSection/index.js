import React from "react";

function index() {
  return (
    <div>
      <div className="card-details">
        <h4 className="text-base font-bold text-gray-600 mb-2">
          DELIVERY INFO
        </h4>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"></div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label
                className="font-worksans font-semibold text-sm text-gray-600"
                htmlFor="input_country"
              >
                Country
              </label>
              <input
                className="form-control block w-full px-4 py-1 text-sm font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="card_holder-3"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label
                className="font-worksans font-semibold text-sm text-gray-600"
                htmlFor="input_postalcode"
              >
                Postal code
              </label>
              <input
                className="form-control block w-full px-4 py-1 text-sm font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                data-bs-toggle="tooltip"
                data-bss-tooltip
                id="card_holder-4"
                placeholder="Postal Code"
                name="input_postalcode"
                maxLength={6}
                minLength={6}
                required
                inputMode="numeric"
                title="Make sure to enter accurate pincode. Wrong pincode will result in extra delivery fee"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label
                className="font-worksans font-semibold text-sm text-gray-600"
                htmlFor="input_address_line_1"
              >
                Address Line 1
              </label>
              <input
                className="form-control block w-full px-4 py-1 text-sm font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="card_holder-5"
                placeholder="Building Number, Streent Name"
                name="input_address_line_1"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label
                className="font-worksans font-semibold text-sm text-gray-600"
                htmlFor="card_holder"
              >
                Address Line 2
              </label>
              <input
                className="form-control block w-full px-4 py-1 text-sm font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="card_holder-5"
                placeholder="Unit Number(eg: #30-234), Bulding Name"
                name="input_address_line_2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
