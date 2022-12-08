import React from "react";
import { Layout } from "../components";
import {
  OrderAddressSection,
  OrderBagInfoSection,
  OrderCustomerInfoSection,
  OrderTypeSection,
  OrderDetailsInfoSection,
  OrderPaymentSection,
} from "../components/CheckoutOrder";

checkout.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function checkout() {
  return (
    <div className="">
      <section className="mx-3 md:m-10 md:mx-20 ">
      <div className="block-heading">
            <h2 className="text-xl uppercase font-bold text-gray-700 font-font-worksans text-center py-5">Payment &amp; Checkout</h2>
          </div>
        <div className="flex flex-col lg:flex-row space-x-2">
          <div className="container px-5 py-5 shadow-md rounded">
          <OrderTypeSection/>
          <OrderCustomerInfoSection/>
          <OrderAddressSection />
          <OrderPaymentSection />
          </div>
          <div className="container px-5 py-5 shadow-md rounded h-full">
         <OrderDetailsInfoSection/>
         <OrderBagInfoSection/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default checkout;
