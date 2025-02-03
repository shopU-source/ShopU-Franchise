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
            <h2 className="text-4xl font-extrabold text-center text-[#294711]">Success Stories</h2>
            <p className="text-center text-gray-600 mt-3 text-lg">
            Hear from our franchise partners about their journey with ShopU
            </p>
            <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
                {[
                    { step: 'R', title: 'Rahul Sharma', owner: "MedU Franchise Owner", desc: '\"Starting a MedU franchise was the best business decision I\'ve made. The zero investment model and comprehensive support made it possible for me to start my own business."' },
                    { step: 'P', title: 'Priya Patel', owner: "ShopU Mart Owner", desc: '\"The technology platform and supply chain support from ShopU has made managing my store incredibly efficient. I achieved break-even faster than expected."' },
                    { step: 'A', title: 'Amit Kumar', owner: "ShopU Super Mart Owner", desc: '\"The ongoing support and training from ShopU has been exceptional. Their technology platform has revolutionized how we manage inventory and serve customers."' },
                ].map((item, index) => (
                    <div key={index} className="p-6 hover:scale-110 transition-all hover:shadow-lg bg-white rounded-lg shadow-md flex flex-col items-center text-center">
                        <div className="w-14 h-14 flex items-center justify-center bg-[#008C33] text-white text-2xl font-bold rounded-full mb-4">{item.step}</div>
                        
                        <h3 className="text-xl font-semibold text-[#009F3B]">{item.title}</h3>
                        <h4 className="text-sm font-semibold text-[#009F3B]">{item.owner}</h4>
                        <p className="text-gray-600 mt-2">{item.desc}</p>
                        <div className="flex items-center justify-center mt-4">
                        <svg className ="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg className ="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg className ="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg className ="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                <svg className ="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                  </path>
                </svg>
                </div>
                    </div>
                ))}
            </div>

        

            
        </div>
    );
};

export default ApplicationProcess;