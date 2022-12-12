import React from "react";
import { ResetPassword } from "../components/UserAccount";
import Layout from "../components/Layout";
import {User} from '../components/Icons'

resetpassword.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function resetpassword() {
  return (
    <>
      <div className="mt-24">
        <div className="flex flex-col items-center justify-center mb-10 border-b-2 border-gray-300 xl:mx-10">
          <div className="text-center rounded-full mb-2 bg-tbRed px-3 py-3 text-white">
            <User />
          </div>
          <h3 className="text-center font-bold font-worksans text-4xl mb-8">
            My Account
          </h3>
          {/* <div className="mx-5 h-1 bg-gray-300 rounded mt-2 mb-4"></div> */}
        </div>
        <ResetPassword />
      </div>
    </>
  );
}

export default resetpassword;
