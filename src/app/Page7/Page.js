'use client';

import React from 'react';

const ApplicationProcess = () => {
  return (
    <div className="max-w-6xl mx-auto pt-8 bg-[#F3F4F6] ">
      <h2 className="text-4xl font-extrabold text-center text-[#294711]">Simple Application Process</h2>
      <p className="text-center text-gray-600 mt-3 text-lg">
        Get your ShopU franchise up and running in just 30 days
      </p>
      <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { step: '1', title: 'Submit Application', desc: 'Fill out our simple application form with your details and preferred franchise model.' },
          { step: '2', title: 'Selection Process', desc: 'Shortlisted candidates will be contacted for detailed discussion and location assessment.' },
          { step: '3', title: 'Launch Your Store', desc: 'Get operational within 30 days with our complete setup and training support.' },
        ].map((item, index) => (
          <div key={index} className="p-6 hover:scale-110 transition-all hover:shadow-lg bg-white rounded-lg shadow-md flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center bg-[#008C33] text-white text-2xl font-bold rounded-full mb-4">{item.step}</div>
            <h3 className="text-xl font-semibold text-[#009F3B]">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 bg-white p-6 rounded-lg shadow-2xl">
        <h3 className="text-2xl font-bold text-[#008C33]">What Happens Next?</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-4 text-lg text-gray-600">
          {[
            'Complete store setup and branding',
            'Marketing and launch support',
            'Staff training and system implementation',
            'Ongoing operational guidance',
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <span className=" text-xl mr-2"><svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg></span> {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#008C33] hover:bg-green-800 text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
          Apply Now - Limited Slots Available!
        </button>
      </div>
    </div>
  );
};

export default ApplicationProcess;