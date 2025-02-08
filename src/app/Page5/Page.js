'use client';

import React from 'react';

const ROIInvestment = () => {
    return (
        <div className="max-w-6xl mx-auto p-8  bg-[#F3F4F6] ">
            <h2 className="text-4xl font-extrabold text-center text-[#294711]">ROI & Investment Details</h2>
            <p className="text-center text-gray-600 mt-3 text-lg">
                Explore the setup costs and potential returns for each franchise model
            </p>
            <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>
            <div className="mt-8 overflow-x-auto shadow-lg">
                <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg bg-white">
                    <thead>
                        <tr className="bg-gradient-to-r from-green-600 to-green-900 text-white">
                            <th className="p-4 text-left text-lg">Franchise Type</th>
                            <th className="p-4 text-left text-lg">Size Requirement</th>
                            <th className="p-4 text-left text-lg">Setup Cost</th>
                            <th className="p-4 text-left text-lg">Monthly Revenue</th>
                            <th className="p-4 text-left text-lg">Profit Margin</th>
                            <th className="p-4 text-left text-lg">ROI Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: 'MedU by ShopU', size: '120 - 5000 Sq Ft', cost: '₹2L - ₹20L', revenue: '₹1.5L - ₹10L', margin: '40-50%', roi: '6-12 months' },
                            { name: 'ShopU Store', size: '120 - 499 Sq Ft', cost: '₹1L - ₹5L', revenue: '₹1L - ₹3L', margin: '40-50%', roi: '6-9 months' },
                            { name: 'ShopU Mart', size: '500 - 1249 Sq Ft', cost: '₹5L - ₹15L', revenue: '₹3L - ₹8L', margin: '40-50%', roi: '6-9 months' },
                            { name: 'ShopU Super Mart', size: '>1249 Sq Ft', cost: '₹15L - ₹50L', revenue: '₹8L - ₹20L', margin: '40-50%', roi: '6-12 months' },
                        ].map((item, index) => (
                            <tr key={index} className="border-b border-gray-300 hover:bg-gray-100 transition-all duration-300">
                                <td className="p-4 text-[#155016] font-semibold">{item.name}</td>
                                <td className="p-4 text-gray-700">{item.size}</td>
                                <td className="p-4 text-gray-700">{item.cost}</td>
                                <td className="p-4 text-gray-700">{item.revenue}</td>
                                <td className="p-4 text-green-600 font-bold">{item.margin}</td>
                                <td className="p-4 text-gray-700">{item.roi}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#155016]">Notes for Calculation</h3>
                <ul className="mt-4 space-y-3 text-gray-600 text-lg">
                    <li className="flex items-center"><span className="text-green-600 mr-2">📌</span> Setup Cost includes interiors, branding, inventory, and technology integration</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">📌</span> Expenses include rent, utilities, and staff salaries</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">📌</span> Monthly Revenue is projected based on market size and product turnover</li>
                    <li className="flex items-center"><span className="text-green-600 mr-2">📌</span> Profit Margin varies depending on sales volume and operational efficiency</li>
                </ul>
            </div>
        </div>
    );
};

export default ROIInvestment;
