import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/24-7 Water Damage Restoration  Inc Logo.png";
import MyIcon from "../icon/Icon";
import Link from "next/link";
import { Icon } from "@iconify/react";
// import "./styles.css"
const NavBar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.onload = function () {
      const toggle = document.querySelector(".toggle");
      const menu = document.querySelector(".menu");
      const items = document.querySelectorAll(".item");
console.log("toggle", toggle)
      /* Toggle mobile menu */
      function toggleMenu() {
        if (menu.classList.contains("active")) {
          menu.classList.remove("active");
          toggle.querySelector("span").innerHTML = "<i class='fas fa-bars'></i>";
        } else {
          menu.classList.add("active");
          toggle.querySelector("span").innerHTML = "<i class='fas fa-times'></i>";
        }
      }

      /* Activate Submenu */
      function toggleItem() {
        if (this.classList.contains("submenu-active")) {
          this.classList.remove("submenu-active");
        } else if (menu.querySelector(".submenu-active")) {
          menu
            .querySelector(".submenu-active")
            .classList.remove("submenu-active");
          this.classList.add("submenu-active");
        } else {
          this.classList.add("submenu-active");
        }
      }

      /* Close Submenu From Anywhere */
      function closeSubmenu(e) {
        if (menu.querySelector(".submenu-active")) {
          let isClickInside = menu
            .querySelector(".submenu-active")
            .contains(e.target);

          if (!isClickInside && menu.querySelector(".submenu-active")) {
            menu
              .querySelector(".submenu-active")
              .classList.remove("submenu-active");
          }
        }
      }
      /* Event Listeners */
       toggle.addEventListener("click", toggleMenu, false);
      for (let item of items) {
        if (item.querySelector(".submenu")) {
          item.addEventListener("click", toggleItem, false);
        }
        item.addEventListener("keypress", toggleItem, false);
      }
      document.addEventListener("click", closeSubmenu, false);
    };
  }, []);

  if (!isMounted) {
    return null; // Don't render on the server
  }
  return (
    // <div className="flex items-center justify-center bg-white w-[100%] border">
    //     <div className="container flex items-center mx-auto gap-[100px] font-[600]">
    //   <div className="logo py-2">
    //     <Image
    //       src={logo}
    //       alt="logo"
    //       className="w-[100px] h-[100px] object-contain"
    //     />
    //   </div>
    //   <div className="flex flex-col w-[100%]">
    //     <div className="flex items-center justify-between text-[#009BCE]">
    //       <p className="font-[600] leading-[26px] flex items-center gap-[10px]">
    //         <MyIcon icon="mdi:map-marker" />
    //         Serving All of Los Angeles and Ventura County
    //       </p>

    //       <a
    //         className="flex items-center justify-between] gap-[10px]"
    //         href="tel:(855) 961 – 2660"
    //       >
    //         <MyIcon icon="material-symbols:call" />
    //         (855) 961 – 2660
    //       </a>
    //     </div>
    //     <div className="bg-[#009BCE] mt-[10px]  h-[40px] px-[20px] flex items-center justify-between] gap-[10px]">
    //       <Link href="/" className="text-[#fff] text-[20px] w-[50px]">
    //         <MyIcon icon="ion:home" />
    //       </Link>
    //       <Link href="/" className="text-[#fff] uppercase font-[400] text-[15px] min-w-[100px]">
    //         Services
    //       </Link>
    //       <Link href="/" className="text-[#fff] uppercase font-[400] text-[15px] min-w-[100px]">
    //        Gallery
    //       </Link>
    //       <Link href="/" className="text-[#fff] uppercase font-[400] text-[15px] min-w-[100px]">
    //        About us
    //       </Link>
    //       <Link href="/" className="text-[#fff] uppercase font-[400] text-[15px] min-w-[100px]">
    //        insurance
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <nav className="relative flex justify-between">
       <a href="#" className="sm:absolute w-[200px] h-[100px] top-[20px] lg:relative ">
            <Image
              src={logo}
              alt="logo"
              className="h-[70px] w-[100px] object-contain"
            />
          </a>
      <ul className="menu sm:mt-[50px]  lg:mt-0 relative md:leading-[70px] flex justify-between items-center">
        {/* <li className="logo">
          <a href="#">
            {" "}
            <Image
              src={logo}
              alt="logo"
              className="h-[100px] w-[100px] object-contain"
            />{" "}
          </a>
        </li> */}
        <li className="item">
          <a href="#">Home</a>
        </li>
        <li className="item">
          <a href="#">About</a>
        </li>
        <li className="item has-submenu">
          <a tabindex="0">
            Services <Icon icon="mdi:chevron-down" />
          </a>
          <ul className="submenu">
            <li className="subitem">
              <a href="#" className="leading-[20px]">Dallas</a>
            </li>
            <li className="subitem">
              <a href="#" className="leading-[20px]">Houston</a>
            </li>
            <li className="subitem">
              <a href="#" className="leading-[20px]">Miami</a>
            </li>
          </ul>
        </li>
        <li className="item has-submenu">
          <a tabindex="0">Plans</a>
        </li>
        <li className="item">
          <a href="#">Blog</a>
        </li>
        <li className="item">
          <a href="#">Contact</a>
        </li>

        <li className="toggle"  >
          <span >
            <i class="fas fa-bars"></i>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
