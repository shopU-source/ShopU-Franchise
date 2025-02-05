"use client";

import Image from "next/image";

import page2 from "@/public/hero/page2image.png";

export default function Revolutionizing() {
  return (
    <>
      <div id="Opportunity" className=" pt-28  bg-[#f6f6f6] text-white  min-h-[90vh]">
        <div className="mb-2 bg-[#f6f6f6] max-w-[1320px] mx-auto">
          <h1 className="sm:text-4xl text-2xl text-center py-5  text-[#294711]">
            Opportunity
          </h1>
        </div>
        <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl mx-auto">
          {/* Text Card Section */}
          <div className=" bg-[#d4e1cd] flex items-center p-6 rounded-2xl shadow-lg w-full  hover:-translate-y-2 transition-all duration-300">
            <div className="h-58 flex-row">
              <h2 className="text-[#294711] md:text-2xl text-xl font-bold mb-4">
                Limited Time Opportunity
              </h2>
              <h3 className="text-black md:text-lg text-md font-bold mb-3 flex">
              <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Add a subheading
              </h3>
              <p className="text-black md:text-md text-sm font-bold mb-4">
                
                Only 20 exclusive franchise opportunities
              </p>
              <h3 className="text-black md:text-lg text-md font-bold mb-3 flex">
              <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Zero Investment
              </h3>
              <p className="text-black md:text-md text-sm font-bold mb-4">
                No upfront fees for first 20 partners
              </p>
              <h3 className="text-black md:text-lg text-md font-bold mb-3 flex">
              <svg className="w-6 h-6 text-green-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Quick Setup
              </h3>
              <p className="text-black md:text-md text-sm font-bold mb-4">
                Operational within 30 days
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center overflow-hidden">
            <Image
              src={page2}
              alt="Placeholder"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg w-full object-cover hover:scale-110 duration-1000"
            />
          </div>
        </div>
      </div>
    </>
  );
}
