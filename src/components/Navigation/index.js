import Link from "next/link";
import React, { useState, useRef, useContext } from "react";
import { MenuIcon, Cart, MenuClose } from "../Icons";
import PincodeInput from "../PincodeInput";
import { useRouter } from "next/router";

function index({ cartItemsCount }) {
  const [navbar, setNavbar] = useState(false);
  const [loginInfo, setLoginInfo] = useState(false);
  const router = useRouter();
  const reflink = useRef();


  const handleLogOut = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <nav className="shadow sticky top-0 z-50 bg-gray-50 md:shadow-none bg-white">
      <div className="container mx-auto px-2 py-4 flex justify-between">
        {/* <div className="px-3 py-3 md:hidden"> */}
        <div className="px-3 py-3 md:hidden">
          <button
            className="p-2 text-gray-700 outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <MenuClose /> : <MenuIcon />}
          </button>
        </div>
        <img
          className="rounded-full mx-auto md:mx-0 py-2"
          src="../../assets/logo.png"
        />
        <PincodeInput />

        {/* login button */}

        <div className="px-3 py-3 focus:text-orange">
          <ul
            className="navbar-nav"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <Badge
            badgeContent ={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              }
            }}
            > */}
            {/* <IconButton
                // onClick={() => dispatch(setIsCartOpen({}))}
                sx={{ color: "black" }}
              > */}

            <Link href="/menu">
              <div className="relative">
                <Cart />
              
                    <span className="absolute -top-2 -right-2 text-[13px] bg-tbRed h-[18px] w-[18px] rounded-full grid place-items-center text-white">
                        2
                    </span>
               
              
              </div>
            </Link>

            {/* </IconButton> */}
            {/* </Badge> */}
          </ul>
        </div>
      </div>
      {navbar ? (
        <div className="items-center h-auto bg-white md:hidden">
          <header className="container flex justify-center mx-auto">
            <ul className=" font-mono text-center text-gray-dark ">
              <Link href="/">
                <li className="mx-2 px-4 py-4 hover:border-b-2 hover:border-green">
                  Home
                </li>
              </Link>
              <Link href="about">
                <li className="mx-2 px-4 py-4 hover:border-b-2 hover:border-green">
                  About
                </li>
              </Link>
              <Link href="menu">
                <li className="mx-2 px-4 py-4 hover:border-b-2 hover:border-green">
                  Menu
                </li>
              </Link>
              <Link href="deals">
                <li className="mx-2 px-4 py-4 hover:border-b-2 hover:border-green">
                  Deals
                </li>
              </Link>
              <Link href="contact">
                <li className="mx-2 px-4 py-4 mb-4 hover:border-b-2 hover:border-green">
                  Contact
                </li>
              </Link>
            </ul>
          </header>
        </div>
      ) : (
        <div className="hidden md:flex items-center h-10 bg-green">
          <header className="container flex justify-center mx-auto">
            <ul className="inline-flex font-mono text-white">
              <Link href="/">
                <li className="mx-2 px-6 hover:border-b-2 hover:border-white">
                  Home
                </li>
              </Link>
              <Link href="about">
                <li className="mx-2 px-6 hover:border-b-2 hover:border-white">
                  About
                </li>
              </Link>
              <Link href="menu">
                <li className="mx-2 px-6 hover:border-b-2 hover:border-white">
                  Menu
                </li>
              </Link>
              <Link href="deals">
                <li className="mx-2 px-6 hover:border-b-2 hover:border-white">
                  Deals
                </li>
              </Link>
              <Link href="contact">
                <li className="mx-2 px-6 hover:border-b-2 hover:border-white">
                  Contact
                </li>
              </Link>
            </ul>
          </header>
        </div>
      )}
    </nav>
  );
}

export default index;
