import React from "react";
import { Outlet } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { IoIosHeart } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { FaGreaterThan } from "react-icons/fa6";
import menu from "../assets/menu.png";

const Dashboard = () => {
  return (
    <div>
      <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-2.5 sm:py-4 overflow-hidden">
        <nav
          class="max-w-7xl flex basis-full items-center w-full mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div class="me-5 md:me-8">
            <a
              class="flex-none text-xl text-[#CF2D2D] font-bold dark:focus:outline-none dark:focus:ring-1"
              aria-label="Brand"
            >
              BookUsNow <br />{" "}
            </a>
            <div className="flex items-center gap-1 mt-2">
              <TiLocation className="h-6 w-4 fill-[#989090]" />
              Mumbai,&nbsp;India
              <FaGreaterThan className="w-2 m-1" />
            </div>
          </div>
          <div class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div class="sm:hidden">
              <button
                type="button"
                class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-white disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1"
              >
                <ImSearch className="h-5 w-5 fill-[#989090]" />
              </button>
            </div>
            <div className="max-[480px]:hidden absolute left-72">
              <button className="flex items-center gap-3 py-1 bg-[black] text-white w-36 rounded-lg">
                <img
                  src={menu}
                  alt="menu-icon"
                  className="w-4 h-4 grayscale invert ms-3"
                />
                <div>Categories</div>
              </button>
            </div>
            <div class="hidden mx-auto sm:block relative">
              <label for="icon" class="sr-only">
                Search
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  class="py-2 ps-4 pe-20 block w-92 md:w-96 bg-transparent border-[#989090] shadow-lg rounded-lg text-sm"
                  placeholder="DJI Phantom"
                />
                <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center justify-end sm:gap-4 lg:gap-7">
              <button
                type="button"
                class="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full text-white disabled:pointer-events-none focus:outline-none focus:ring-1"
              >
                <IoIosHeart className="fill-[#989090] h-6 w-6" />
              </button>
              <button
                type="button"
                class="max-[480px]:hidden -ml-3 w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm  rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1"
                data-hs-offcanvas="#hs-offcanvas-right"
              >
                <span className="">Favourites</span>
              </button>
              <div>
                <button className="border px-2 py-1 max-[480px]:hidden">
                  Sign In
                </button>
                <BsPersonFill className="fill-[#989090] w-6 h-6 min-[481px]:hidden mx-2" />
              </div>
            </div>
            <div className="flex items-center"></div>
          </div>
        </nav>
      </header>
      <main id="content" role="main">
        <nav
          class="bg-[#ffffff] text-sm font-medium pt-6 md:pb-6 -mt-px"
          aria-label="Jump links"
        >
          <div
            class="lg:ml-[340px] max-w-7xl snap-x w-full flex items-center overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-0 mx-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full  font-bold cursor-default"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div class="snap-center shrink-0 pe-5 sm:pe-8 sm:last-pe-0">
              <a class="inline-flex items-center gap-x-2  dark:focus:outline-none dark:focus:ring-1">
                Live shows
              </a>
            </div>
            <div class="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a class="inline-flex items-center gap-x-2  dark:focus:outline-none dark:focus:ring-1">
                Streams
              </a>
            </div>
            <div class="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a class="inline-flex items-center gap-x-2  dark:focus:outline-none dark:focus:ring-1">
                Movies
              </a>
            </div>
            <div class="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a class="inline-flex items-center gap-x-2  dark:focus:outline-none dark:focus:ring-1">
                Plays
              </a>
            </div>
            <div class="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a class="inline-flex items-center gap-x-2  dark:focus:outline-none dark:focus:ring-1">
                Events
              </a>
            </div>
            <div class="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a class="inline-flex items-center gap-x-2  dark:focus:outline-none dark:focus:ring-1">
                Sports
              </a>
            </div>
            <div class="snap-center shrink-0 pe-5 sm:pe-8 sm:last:pe-0">
              <a class="inline-flex items-center gap-x-2  dark:focus:outline-none dark:focus:ring-1">
                Activities
              </a>
            </div>
          </div>
        </nav>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
