import Link from "next/link";
import React, { useState, useRef, Fragment, useEffect } from "react";
import { MenuIcon, Cart, MenuClose, User } from "../Icons";
import { PincodeInput, Bag, LoginPop } from "..";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const index = ({ onClose }) => {
  // if ( !isVisible ) return null;
  const [navbar, setNavbar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const reflink = useRef();

  // const handleClose = (e) => {
  //     if (e.target.id === 'wrapper') onClose();
  // }

  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setNavbar(false);
      }
    });
  }, []);

  const handleLogOut = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <nav className="shadow sticky fixed-top top-8 z-50 md:shadow-none bg-white">
        <div className="container mx-auto px-2 py-1 md:py-2 flex justify-between">
          {/* <div className="px-3 py-3 md:hidden"> */}
          <div className="px-3 py-3 md:hidden ">
            <button
              className="p-2 text-gray-700 outline-none"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <MenuClose /> : <MenuIcon />}
            </button>
          </div>
          <div className="flex flex-row space-x-7 py-2">
            <img
              className="rounded-full mx-auto md:mx-0 "
              src="../../assets/logo.png"
            />
            <PincodeInput />
          </div>

          {/* login button */}

          <div className="px-4 py-2">
            <ul className="flex flex-row justify-start items-center md:space-x-3">
              <div className="hidden md:flex">
                {isLogin ? (
                  <li className="">
                    <div className="md:pl-[100px] top-16">
                      <Menu as="div" className="relative inline-block">
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <User /> <p className="text-gray-600">user</p>
                            <ChevronDownIcon
                              className=" -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href={"/my-account"}>
                                    <button
                                      className={`${
                                        active
                                          ? "bg-violet-500 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      Dashboard
                                    </button>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href={"/my-account/profile"}>
                                    <button
                                      className={`${
                                        active
                                          ? "bg-violet-500 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      Profile
                                    </button>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    onClick={handleLogOut}
                                    className={`${
                                      active
                                        ? "bg-orange-200 text-white"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Log out
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </li>
                ) : (
                  <>
                    <Link href={"/login"}>
                      <span className="flex flex-row text-gray-500 font-semibold font-dmsans">
                        <User /> Login
                      </span>
                    </Link>
                    {/* <LoginPop isVisible={show} onClose={() => setShow(false)} /> */}
                  </>
                )}
              </div>

              <li className="pt-1">
                {" "}
                <button className="mt-2" type="button" onClick={() => setOpen(true)}>
                  <div className="relative ">
                    <Cart />
                    <span className="absolute -top-2 -right-2 text-[13px] bg-tbRed h-[18px] w-[18px] rounded-full grid place-items-center text-white">
                      2
                    </span>
                  </div>
                </button>
              </li>

              {/* </IconButton> */}
              {/* </Badge> */}
            </ul>
          </div>
          <Bag isVisible={open} onClose={() => setOpen(false)} />
        </div>
        {navbar ? (
          <div
            className="top-0 right-0 inset-0 shadow-md items-center h-auto bg-white md:hidden  "
            ref={menuRef}
          >
            <header
              className={`container flex justify-center mx-auto inset-x-0
            ${
              navbar ? "translate-x-0" : "translate-x-full"
            } ease-in-out duration-500
            `}
            >
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

                <div className="flex md:hidden">
                  {isLogin ? (
                    <li className="">
                      <div className="md:pl-[100px] top-16">
                        <Menu as="div" className="relative inline-block">
                          <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                              <User />
                              <ChevronDownIcon
                                className=" -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 mt-2 lg:w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none left-[-120px] w-[353px]">
                              <div className="px-1 py-1 ">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-violet-500 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      Dashboard
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="px-1 py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      className={`${
                                        active
                                          ? "bg-violet-500 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      Profile
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="px-1 py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      onClick={handleLogOut}
                                      className={`${
                                        active
                                          ? "bg-orange-200 text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                      Log out
                                    </button>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </li>
                  ) : (
                    <>
                      <button
                        className="mb-5 pl-4"
                        onClick={() => setShow(true)}
                      >
                        <span className="flex flex-row text-gray-500 font-semibold font-dmsans ">
                          <User /> Login
                        </span>
                      </button>
                      {/* <LoginPop isVisible={show} onClose={() => setShow(false)}/> */}
                    </>
                  )}
                </div>
              </ul>
            </header>
          </div>
        ) : (
          <div className="hidden md:flex items-center h-10 bg-[#333] border-0">
            <header className="container flex justify-center mx-auto">
              <ul className="inline-flex font-mono text-white">
                <Link href="/">
                  <li className="mx-2 px-6 font-ubuntu  hover:text-amber-400">
                    Home
                  </li>
                </Link>
                <Link href="about">
                  <li className="mx-2 px-6 font-ubuntu  hover:text-amber-400">
                    About
                  </li>
                </Link>
                <Link href="menu">
                  <li className="mx-2 px-6 font-ubuntu hover:text-amber-400">
                    Menu
                  </li>
                </Link>
                <Link href="deals">
                  <li className="mx-2 px-6 font-ubuntu hover:text-amber-400">
                    Deals
                  </li>
                </Link>
                <Link href="contact">
                  <li className="mx-2 px-6 font-ubuntu hover:text-amber-400">
                    Contact
                  </li>
                </Link>
              </ul>
            </header>
          </div>
        )}
      </nav>
    </>
  );
};

export default index;
