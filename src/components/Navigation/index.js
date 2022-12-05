import Link from "next/link";
import React, { useState, useRef, Fragment } from "react";
import { MenuIcon, Cart, MenuClose, User } from "../Icons";
import { PincodeInput, LoginModal, Bag } from "..";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function index() {
  const [navbar, setNavbar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const reflink = useRef();

  //   useEffect(() => {
  //     const closeDropdown = e => {
  //       if(e.path[0].tagName !== 'BUTTON') {
  //         setNavbar(t);
  //       }
  //     }
  // document.body.addEventListener('click', closeDropdown);

  // return () => document.body.removeEventListener('click',closeDropdown);

  //   },[])

  const handleLogOut = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <nav className="shadow sticky fixed-top top-8 z-50 md:shadow-none bg-white">
      <div className="container mx-auto px-2 py-1 md:py-2 flex justify-between">
        {/* <div className="px-3 py-3 md:hidden"> */}
        <div className="px-3 py-3 md:hidden">
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

            <div className="hidden md:flex">
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
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                  {active ? (
                                    <EditActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <EditInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
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
                                  {active ? (
                                    <ArchiveActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ArchiveInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
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
                                  {active ? (
                                    <ArchiveActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ArchiveInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
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
                <LoginModal />
              )}
            </div>

            <li className="pt-1">
              {" "}
              <Bag />
            </li>

            {/* </IconButton> */}
            {/* </Badge> */}
          </ul>
        </div>
      </div>
      {navbar ? (
        <Transition
          as={Fragment}
          show={true}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className=" items-center h-auto bg-white md:hidden ">
            <header className="origin-left scale-90 delay-1000 translate-x-4 transition-left container flex justify-center mx-auto">
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
                        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                  {active ? (
                                    <EditActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <EditInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
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
                                  {active ? (
                                    <ArchiveActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ArchiveInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
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
                                  {active ? (
                                    <ArchiveActiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ArchiveInactiveIcon
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
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
                <div className="float-top top-0">
                <LoginModal />
                </div>
              )}
            </div>
              </ul>
            </header>
          </div>
        </Transition>
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

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}
