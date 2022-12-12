import React from "react";

function index() {
  return (
    <div>
      <div className="card-details">
        <h4 className="text-base font-bold text-gray-600 mb-2">
          CUSTOMER INFO
         
        </h4>
        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label
                className="font-worksans text-sm text-gray-600"
                htmlFor="input_first_name"
              >
                First Name*
              </label>
              <input
                className="form-control block w-full px-4 py-1 text-sm font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                placeholder="Full Name"
                name="input_full_name"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label
                className="font-worksans text-sm text-gray-600"
                htmlFor="input_last_name"
              >
                Last Name*
              </label>
              <input
                className="form-control block w-full px-4 py-1 text-sm font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                placeholder="Last Name"
                name="input_last_name"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label
                className="font-worksans text-sm text-gray-600"
                htmlFor="input_contact_number"
              >
                Phone Number*
              </label>
              <input
                className="form-control block w-full px-4 py-1 text-sm font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="card_holder-2"
                placeholder="Mobile"
                name="input_contact_number"
                inputMode="tel"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mb-3">
              <label
                className="font-worksans text-sm text-gray-600"
                htmlFor="input_email"
              >
                Email*
              </label>
              <input
                className="form-control block w-full px-4 py-1 text-sm font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="text"
                id="card_holder-2"
                placeholder="Email"
                name="input_email"
                inputMode="email"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
