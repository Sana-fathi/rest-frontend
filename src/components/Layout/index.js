import Head from "next/head";
import React, { Fragment } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import TopBar from "../TopBar";

function index({ children }) {


  return (
    <>
      {/* <Head></Head> */}
      <TopBar />
      <Navigation type="main" />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}

export default index;


