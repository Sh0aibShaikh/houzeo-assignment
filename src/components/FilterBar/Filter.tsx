import React from "react";
import { Cross, DownArrow, Filters, Pen, Search } from "../Icons";

const Filter: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-300 shadow-md">
      <div className="max-w-[1400px] mx-auto px-3 lg:px-6 py-4">
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative">
            <div className="w-96 rounded-full p-[2px] bg-gradient-to-r from-[#2876C1] to-[#0E5293]">
              <input
                className="w-full bg-white rounded-full py-2 pl-5 pr-12 text-gray-700 focus:outline-none"
                type="text"
                placeholder="Austin, TX"
                name="Search"
                id="Search"
              />
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center gap-3">
              <button className="text-gray-500 hover:text-gray-700">
                <Cross />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Search />
              </button>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="relative">
            <select
              className="min-w-36 px-4 py-3 text-sm font-semibold text-[#0B5AA5] border border-[#0B5AA5] focus:outline-none rounded-lg appearance-none bg-white"
              name="Sale"
              id="Sale"
            >
              <option>For Sale</option>
              <option>Sold</option>
            </select>
            <div className="pointer-events-none text-[#0B5AA5] absolute right-2 top-1/2 -translate-y-1/2">
              <DownArrow />
            </div>
          </div>
          <div className="relative">
            <select
              className="min-w-36 px-4 py-3 text-sm font-normal border border-gray-300 rounded-lg appearance-none bg-white"
              name="Pricing"
              id="Pricing"
            >
              <option>Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <DownArrow />
            </div>
          </div>
          <div className="relative">
            <select
              className="min-w-44 px-4 py-3 text-sm font-normal border border-gray-300 rounded-lg appearance-none bg-white"
              name="BedsBaths"
              id="BedsBaths"
            >
              <option>Beds & Baths</option>
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <DownArrow />
            </div>
          </div>
          <div className="relative">
            <select
              className="min-w-40 px-4 py-3 text-sm font-normal border border-gray-300 rounded-lg appearance-none bg-white"
              name="PropertyType"
              id="PropertyType"
            >
              <option>Property Type</option>
            </select>
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
              <DownArrow />
            </div>
          </div>

          <button className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filters />
            <span className="font-normal text-sm">Filters</span>
          </button>

          <button className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-full hover:bg-gray-50">
            <Pen />
            <span className="font-medium text-sm">Saved</span>
          </button>
        </div>

        {/* Mobile Layout - Visible only on mobile */}
        <div className="flex lg:hidden flex-col gap-4">
          {/* Search Bar */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <div className="rounded-full p-[2px] bg-gradient-to-r from-[#2876C1] to-[#0E5293]">
                <input
                  className="w-full bg-white rounded-full py-3 pl-5 pr-24 text-gray-700 focus:outline-none"
                  type="text"
                  placeholder="Austin, TX"
                  name="SearchMobile"
                  id="SearchMobile"
                />
              </div>
              <div className="absolute inset-y-[2px] right-[2px] flex items-center gap-1 pr-1">
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <Cross />
                </button>
                <button
                  className="w-10 h-10 rounded-full bg-[#0B5AA5] flex items-center justify-center text-white hover:bg-[#094a8c]"
                  aria-label="Search"
                >
                  <Search />
                </button>
              </div>
            </div>

            <button
              aria-label="Filters"
              className="relative w-11 h-11 rounded-full border-2 border-[#0B5AA5] bg-white flex items-center justify-center text-[#0B5AA5] hover:bg-gray-50 flex-shrink-0"
            >
              <Filters />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-5 h-5 text-xs font-medium bg-[#0B5AA5] text-white rounded-full">
                2
              </span>
            </button>
          </div>
          {/* Mobile Buttons Row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 flex items-center gap-3">
              <div className="relative">
                <select
                  className="flex-1 pl-2 pr-6 py-2 text-xs font-semibold text-[#0B5AA5] border border-[#0B5AA5] rounded-lg appearance-none bg-white"
                  name="SaleMobile"
                  id="SaleMobile"
                >
                  <option>For Sale</option>
                  <option>Sold</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#0B5AA5]">
                  <DownArrow />
                </div>
              </div>
              <div className="relative">
                <select
                  className="flex-1 pl-2 pr-0 py-2 text-xs font-normal text-gray-700 border border-gray-300 rounded-lg appearance-none bg-white"
                  name="PriceMobile"
                  id="PriceMobile"
                >
                  <option>Price</option>
                  <option>Low to High</option>
                  <option>High to Low</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
                  <DownArrow />
                </div>
              </div>
            </div>

            <button className="px-3 py-2 text-xs font-medium bg-[#0B5AA5] text-white rounded-full">Save Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
