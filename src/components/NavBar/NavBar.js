import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import MyIcon from "../icon/Icon";
import Link from "next/link";
import { Icon } from "@iconify/react";
// import "./styles.css"
const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);

  return (
 

    <div className="mx-auto">
      <nav className="border-gray-200 py-3 bg-[#009BCE]">
        <div className="container mx-auto px-[20px] flex flex-wrap items-center justify-between">
          <a href="#" className="flex">
          <img src="/images/logo.png" alt="" className="h-[100px]"/>
           
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="md:hidden ml-3 text-[#fff] focus:outline-none p-1 border ring-2 ring-[#fff] rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-[600]">
              <li>
                <a
                  href="#"
                  className="text-[#fff] hover:text-[#25A52B] font-[Quicksand] uppercase decoration-none  md:hover:bg-transparent block pl-3 pr-4 py-2 text-[18px]  md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="text-[#fff] hover:text-[#25A52B] font-[Quicksand] uppercase decoration-none text-[18px] border-gray-100 md:hover:bg-transparent  pl-3 pr-4 py-2  md:p-0 font-[600] flex items-center justify-between w-full md:w-auto"
                >
                  Location
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownNavbar"
                  className="hidden  md:pt-[0px] lg:pt-[40px] text-base z-10 list-none divide-y divide-gray-100 rounded   w-44"
                >
                  <ul className="py-1 bg-white relative drop-down-triangle" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Dallas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Houston
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Miami
                      </a>
                    </li>
                  </ul>
                  {/* <div className="py-1">
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Sign out
                    </a>
                  </div> */}
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#fff] hover:text-[#25A52B] font-[Quicksand] uppercase decoration-none  md:hover:bg-transparent block pl-3 pr-4 py-2 text-[18px]  md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#fff] hover:text-[#25A52B] font-[Quicksand] uppercase decoration-none  md:hover:bg-transparent block pl-3 pr-4 py-2 text-[18px]  md:p-0"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#fff] hover:text-[#25A52B] font-[Quicksand] uppercase decoration-none  md:hover:bg-transparent block pl-3 pr-4 py-2 text-[18px]  md:p-0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
