import React from "react";

function index() {
  return (
    <div>
      <div className="space-y-2">
        <div className="border rounded p-4">
          <h3 className="text-xl mb-2 font-bold text-gray-600">USER INFO</h3>
          <div className="">
            <form>
              <div className="py-3">
                <div className="">
                  <div className="">
                    <div className="mb-3">
                      {/* <label className="text-sm font-bold text-gray-600 font-font-dmsans" htmlFor="input_first_name">
                        First Name
                      </label> */}
                      <input
                        className="form-control block w-full px-4 py-2 text-xl font-font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="text"
                        id="card_holder-2"
                        placeholder="First Name"
                        name="input_first_name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="mb-3">
                      {/* <label
                        className="text-sm font-bold text-gray-600 font-font-dmsans"
                        htmlFor="input_last_name"
                      >
                        Last Name
                      </label> */}
                      <input
                        className="form-control block w-full px-4 py-2 text-xl font-font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="text"
                        id="card_holder-2"
                        placeholder="Last Name"
                        name="input_last_name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      {/* <label
                        className="text-sm font-bold text-gray-600 font-font-dmsans"
                        htmlFor="input_mail"
                      >
                        email
                      </label> */}
                      <input
                        className="form-control block w-full px-4 py-2 text-xl font-font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="text"
                        id="card_holder-3"
                        placeholder="Email"
                        name="input_mail"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="mb-3">
                      {/* <label
                        className="text-sm font-bold text-gray-600 font-font-dmsans"
                        htmlFor="input_phone"
                      >
                        Phone
                      </label> */}
                      <input
                        className="form-control block w-full px-4 py-2 text-xl font-font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="text"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip
                        id="card_holder-4"
                        placeholder="Phone"
                        name="input_phone"
                        maxLength={10}
                        minLength={10}
                        required
                        inputMode="numeric"
                        title="Phone"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-end mb-3">
                      <button className="primary-button" type="button">
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
