import React from "react";

function index() {
  return (
    <div>
      <h3 className="text-base font-bold text-gray-600 mb-2">
        PAYMENT INFO
        <i
          className="fa fa-info-circle"
          data-bs-toggle="tooltip"
          data-bss-tooltip
          data-bs-placement="left"
          title="Choose your dine options between delivery, takeaway & dine-in."
        />
      </h3>
      <div className="row">
        <div className="col-12">
          <div className="mb-3">
            <label className="text-lg text-gray-500 font-semibold font-font-worksans" htmlFor="check-payment-type">
              Payment Method
            </label>
            <div className="row">
              <div className="col-12 col-lg-4">
                <div className="space-x-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="formCheck-4"
                    name="check-payment-type"
                    defaultValue="PAY_NOW"
                  />
                  <label className="mt-1 text-gray-500 font-font-worksans font-bold" htmlFor="check-pay-now">
                    PAY NOW
                  </label>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="form-check">
                  <button className="bg-green mt-2 rounded text-white w-full py-1" type="button">PROCEED TO PAY</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
