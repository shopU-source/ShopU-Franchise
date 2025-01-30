"use client";

import Image from "next/image"; // Image tag

import page1 from "@/public/hero/page1image.png";

export default function Revolutionizing() {
  return (
    <>
      <div className="relative bg-[#f6f6f6] text-white pt-10  ">
        <div className="mb-2 bg-[#f6f6f6] max-w-[1320px] mx-auto">
          <h1 className="sm:text-4xl text-2xl text-center py-5  text-[#294711]">
            Revolutionizing Retail & Medicine Delivery
          </h1>
        </div>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <Image
              src={page1}
              alt="Placeholder"
              
              className="rounded-2xl shadow-lg w-full p-5 object-cover"
            />
          </div>

          {/* Text Card Section */}
          <div className=" bg-[#d4e1cd] flex items-center p-6 rounded-2xl shadow-lg w-full">
            <div className="h-56 flex-row">
              <h2 className="text-[#294711] md:text-2xl text-xl font-bold mb-3">Who We Are</h2>
              <p className="text-black md:text-md text-sm font-bold mb-3">
                ShopU is redefining the future of retail and medicine delivery by bringing quick,
              </p>
              <p className="text-black md:text-md text-sm font-bold  mb-3">
                Zero commission business model
              </p>
              <p className="text-black md:text-md text-sm font-bold mb-3">
                Technology-driven operations
              </p>
              <p className="text-black md:text-md text-sm font-bold  mb-3">
                Comprehensive support system
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}