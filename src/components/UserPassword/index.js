import React, { useState } from "react";

function UserPassword() {
  return (
    <div
      className="col col-12 col-md-6"
    >
      <div className="border rounded  p-4">
        <h3
          className="text-xl mb-2 font-bold text-gray-600">
          Change Password
        </h3>
        <div className="mb-3">
          <form>
            <div className="py-3">
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label
                      className="text-sm text-gray-500"
                      htmlFor="input_new_password"
                    
                    >
                      New password
                    </label>
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password"
                      name="new_password"
                      placeholder="New Password"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label
                      className="text-sm text-gray-500"
                      htmlFor="input_repeat_password"
                      
                    >
                      repeat new password
                    </label>
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password"
                      name="new_password_repeat"
                      placeholder="Repeat Password"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label
                      className="text-sm text-gray-500"
                      htmlFor="input_address_line_2"
                     
                    >
                      old password
                    </label>
                    <input
                        className="form-control block w-full px-4 py-2 text-xl font-dmsans font-normal text-gray-700 bg-white bg-clip-padding  border-2 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        type="password"
                      name="old_password"
                      placeholder="Old Password"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-end mb-3">
                    <button
                      className="primary-button"
                      type="button"
                      
                    >
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
  );
}

export default UserPassword;
