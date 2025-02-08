"use client";
import { useState } from 'react';
import Image from "next/image";

import page1 from "@/public/hero/page1image.png";

export default function Revolutionizing() {
  const [Name, setName] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');

  const [PhoneNumber, setPhoneNumber] = useState('');
  const [PreferredFranchise, setPreferredFranchise] = useState('');

  const [PreferredLocation, setPreferredLocation] = useState('');
  const [AdditionalInformation, setAdditionalInformation] = useState('');

  const sendMail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        Name,
        EmailAddress,
        PhoneNumber,
        PreferredFranchise,
        PreferredLocation,
        AdditionalInformation

      })
    })
    console.log(await response.json())
  }
  return (
    <>
      <div id="root">
        <section id="contact" className="py-20 bg-[#F3F4F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#294711]">
                Apply Now
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Limited slots available for zero investment franchise opportunity
              </p>
              <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-neutral-100 p-8 shadow rounded-xl animate__animated animate__fadeInLeft">
                <h3 className="text-2xl font-bold mb-6 text-neutral-900">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Phone</h4>
                      <p className="text-neutral-600">+91 1234567890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Email</h4>
                      <p className="text-neutral-600">franchise@shopu.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate__animated animate__fadeInRight">
                <form onSubmit={sendMail} id="franchise-form" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="name">Full Name *</label>
                    <input name="Name"
                      type="text"
                      id="Name"
                      value={Name} placeholder="Enter Full Name" required className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      onChange={(e) => {
                        setName(e.target.value)
                      }} />
                  </div>



                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="email">Email Address *</label>
                    <input type="email" name="EmailAddress"
                      id="EmailAddress" placeholder="Enter Email Address" required
                      value={EmailAddress}
                      onChange={(e) => {
                        setEmailAddress(e.target.value)
                      }} className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent" />
                  </div>



                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="phone">Phone Number *</label>
                    <input type="tel" name="PhoneNumber"
                      id="description" placeholder="Enter Phone Number" required
                      value={PhoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value)
                      }} className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent" />
                  </div>



                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="franchise-type">Preferred Franchise Model *</label>
                    <select name="description" onChange={(e) => {
                        setPreferredFranchise(e.target.value)
                      }}
                      id="description" required className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent">
                      <option value="">Select a model</option>
                      <option value="medu">MedU by ShopU</option>
                      <option value="store">ShopU Store</option>
                      <option value="mart">ShopU Mart</option>
                      <option value="supermart">ShopU Super Mart</option>
                    </select>
                    
                    
                  </div>



                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="location">Preferred Location *</label>
                    <input type="text" name="description"
                      id="description"
                      value={PreferredLocation}
                      onChange={(e) => {
                        setPreferredLocation(e.target.value)
                      }} placeholder="Enter Location" required className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent" />
                  </div>



                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="message">Additional Information</label>
                    <textarea name="description"
                      id="description" rows="4"
                      value={AdditionalInformation} className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      onChange={(e) => {
                        setAdditionalInformation(e.target.value)
                      }}
                      onInput={(e) => {
                        const words = e.target.value.trim().split(/\s+/);
                        if (words.length > 200) {
                          e.target.value = words.slice(0, 200).join(" ");
                        }
                      }}
                    >
                    </textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#008C33] hover:bg-green-800 text-white font-semibold px-6 py-4 rounded-lg transition-all transform hover:scale-105">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}