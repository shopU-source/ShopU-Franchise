'use client';

import React, { useEffect, useState } from 'react';

const ApplicationProcess = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration issues by only rendering the content after mount
    if (!mounted) return null;

    return (
        <div className="max-w-6xl mx-auto p-8 bg-[#F3F4F6]">
            <h2 className="text-4xl font-extrabold text-center text-[#294711]">Simple Application Process</h2>
            <p className="text-center text-gray-600 mt-3 text-lg">
                Get your ShopU franchise up and running in just 30 days
            </p>
            <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                    {
                        step: (
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>

                        ), 
                        title: 'Zero Investment', 
                        desc1: "No upfront franchise fees", 
                        desc: 'First 20 partners only'
                    },
                    {
                        step: (
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>

                        ), 
                        title: 'Quick ROI', 
                        desc1: "Profits within 3 months", 
                        desc: '40-50% profit margins'
                    },
                    {
                        step: (
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>

                        ), 
                        title: 'Tech-Driven Operations', 
                        desc1: "Smart inventory management", 
                        desc: 'Automated customer support'
                    },
                ].map((item, index) => (
                    <div key={index} className="p-6 hover:scale-110 transition-all hover:shadow-lg bg-white rounded-lg shadow-md flex flex-col">
                        <div className="w-14 h-14 flex items-center justify-center bg-[#008C33] text-white text-2xl font-bold rounded-full mb-4">{item.step}</div>
                        <h3 className="text-xl font-semibold text-[#009F3B] mb-5">{item.title}</h3>
                        <h4 className="text-sm flex text-gray-600 font-semibold">
                            <svg className="w-5 h-5 text-[#287c2c] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {item.desc1}
                        </h4>
                        <p className="text-gray-600 flex mt-2">
                            <svg className="w-5 h-5 text-[#287c2c] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        

            <div className="mt-8 text-center">
            <p className="text-lg text-neutral-600 mb-8">Join the retail revolution with comprehensive support and training</p>
                <button className="bg-[#008C33] hover:bg-green-800 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    Become a partner
                </button>
            </div>
        </div>
    );
};

export default ApplicationProcess;
