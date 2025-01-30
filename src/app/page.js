"use client";

import Image from "next/image";

import heropic from "@/public/hero/heropic.png";

export default function Home() {
  return (
    <>
      <section className="relative  bg-[#f6f6f6] text-white pt-10 pb-5 min-h-[90vh]">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-[#287c2c] font-bold leading-tight">
              🚀Join the ShopU Revolutions
            </h1>
            <h3 className="text-xl md:text-3xl lg:text-4xl text-[#78bb42] font-bold leading-tight">
              Zero Investment Franchise Opportunity
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-[#294711]">
              Be among the first 20 partners to own a franchise with ZERO
              initial investment. Transform the future of retail and medicine
              delivery.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <button className="bg-[#287c2c] font-semibold px-6 py-3 rounded-lg shadow-2xl hover:bg-green-800 transition">
                Apply Now
              </button>
              <button className=" text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#287c2c]   hover:text-white transition">
                Explore Models
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="py-6 md:w-1/2 flex justify-center md:justify-evenly">
            <Image
              src={heropic}
              alt="Hero Image"
              width={350}
              height={350}
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="my-5 mx-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="min-h-[10vh] p-2 bg-[#effee7] rounded-lg shadow">
            <div className="md:text-3xl text-xl font-bold text-[#287c2c]">20</div>
            <div className="text-sm text-[#294711]">Exclusive Franchises</div>
          </div>
          <div className="min-h-[10vh] p-2 bg-[#effee7] rounded-lg shadow">
            <div className="md:text-3xl text-xl font-bold text-[#287c2c]">₹0</div>
            <div className="text-sm text-[#294711]">Initial Investment</div>
          </div>
          <div className="min-h-[10vh] p-2 bg-[#effee7] rounded-lg shadow">
            <div className="md:text-3xl text-xl font-bold text-[#287c2c]">3 months</div>
            <div className="text-sm text-[#294711]">To First Profit</div>
          </div>
          <div className="min-h-[10vh] p-2 bg-[#effee7] rounded-lg shadow">
            <div className="md:text-3xl text-xl font-bold text-[#287c2c]">50%</div>
            <div className="text-sm text-[#294711]">Profit Margin</div>
          </div>
        </div>
      </section>
   
    </>
  );
}

