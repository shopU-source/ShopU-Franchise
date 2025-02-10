"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import heropic from "@/public/hero/heropic.png";

export default function Home() {
  // State variables to track statistics
  const [franchises, setFranchises] = useState(0);
  const [investment, setInvestment] = useState(1000);
  const [margin, setMargin] = useState(0);
  const [month, setMonth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Ensures the component is mounted before running animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation effect to increment franchises count up to 20
  useEffect(() => {
    if (!isMounted) return;

    if (franchises < 20) {
      const timer = setTimeout(() => setFranchises((prev) => prev + 1), 40);
      return () => clearTimeout(timer);
    }
  }, [franchises, isMounted]);

  // Animation effect to increment months count up to 3
  useEffect(() => {
    if (!isMounted) return;

    if (month < 3) {
      const timer = setTimeout(() => setMonth((prev) => prev + 1), 60);
      return () => clearTimeout(timer);
    }
  }, [month, isMounted]);

  // Animation effect to increment profit margin up to 50%
  useEffect(() => {
    if (!isMounted) return;

    if (margin < 50) {
      const timer = setTimeout(() => setMargin((prev) => prev + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [margin, isMounted]);

  // Animation effect to decrement investment value down to 0
  useEffect(() => {
    if (!isMounted) return;

    if (investment > 0) {
      const timer = setTimeout(() => setInvestment((prev) => prev - 10), 8);
      return () => clearTimeout(timer);
    }
  }, [investment, isMounted]);

  return (
    <>
      {/* Hero Section */}
      <section id="Home" className="relative bg-[#f6f6f6] text-white pt-20 pb-3 ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-[#287c2c] font-bold leading-tight">
              🚀Join the ShopU Revolution
            </h1>
            <h3 className="text-xl md:text-3xl lg:text-4xl text-[#78bb42] font-bold leading-tight">
              Zero Investment Franchise Opportunity
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-[#294711]">
              Be among the first 20 partners to own a franchise with ZERO initial investment.
              Transform the future of retail and medicine delivery.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <Link href="#contact">
              <button className="bg-[#008C33] hover:animate-bounce font-semibold px-6 py-3 rounded-lg shadow-2xl hover:bg-green-800 transition">
                Apply Now
              </button>
              </Link>
              <Link href="#Investment">
              <button className="text-green-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#008C33] hover:text-white transition">
                Explore Models
              </button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="py-6 md:w-1/2 flex justify-center md:justify-evenly">
            <Image
              src={heropic}
              alt="Hero Image"
              width={350}
              height={350}
              className="max-w-xs w-auto h-auto md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="my-5 mx-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatCard value={franchises} label="Exclusive Franchises" />
          <StatCard value={`${month} months`} label="To First Profit" />
          <StatCard value={`${margin}%`} label="Profit Margin" />
          <StatCard value={`₹${investment}`} label="Initial Investment" />
        </div>
      </section>
    </>
  );
}

// Component for displaying each statistic
const StatCard = ({ value, label }) => {
  return (
    <div className="min-h-[10vh] p-2 bg-[#effee7] rounded-lg shadow">
      <div className="md:text-3xl text-xl font-bold text-[#287c2c]">{value}</div>
      <div className="text-sm text-[#294711]">{label}</div>
    </div>
  );
};
