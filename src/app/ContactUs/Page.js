"use client";
import { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Revolutionizing() {
  const [Name, setName] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [PreferredFranchise, setPreferredFranchise] = useState("");
  const [PreferredLocation, setPreferredLocation] = useState("");
  const [AdditionalInformation, setAdditionalInformation] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          Name,
          EmailAddress,
          PhoneNumber,
          PreferredFranchise,
          PreferredLocation,
          AdditionalInformation,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success("🎉 Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        //  Reset form fields after successful submission
        setName("");
        setEmailAddress("");
        setPhoneNumber("");
        setPreferredFranchise("");
        setPreferredLocation("");
        setAdditionalInformation("");
      } else {
        toast.error(" Error submitting form. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error(" Network error. Please try again later.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setLoading(false); // Hide loading state after submission
    }
  };

  return (
    <>
      {/* Toast Container for Notifications */}
      <ToastContainer />

      <div id="contact" className="pt-28 pb-5">
        <section id="contact" className="bg-[#F3F4F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#294711]">
                Apply Now
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Limited slots available for zero investment franchise opportunity
              </p>
              <div className="w-24 h-1 bg-green-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-neutral-100 p-8 shadow rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-neutral-900">
                  Contact Information
                </h3>
                <p className="text-neutral-600">
                  Phone: <strong>+91 1234567890</strong>
                </p>
                <p className="text-neutral-600">
                  Email: <strong>franchise@shopu.com</strong>
                </p>
              </div>

              <div>
                <form onSubmit={sendMail} id="franchise-form" className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Full Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={EmailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="Enter Email Address"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={PhoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter Phone Number"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Franchise Model *
                    </label>
                    <select
                      value={PreferredFranchise}
                      onChange={(e) => setPreferredFranchise(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none"
                    >
                      <option value="">Select a model</option>
                      <option value="medu">MedU by ShopU</option>
                      <option value="store">ShopU Store</option>
                      <option value="mart">ShopU Mart</option>
                      <option value="supermart">ShopU Super Mart</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Preferred Location *
                    </label>
                    <input
                      type="text"
                      value={PreferredLocation}
                      onChange={(e) => setPreferredLocation(e.target.value)}
                      placeholder="Enter Location"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      rows="4"
                      value={AdditionalInformation}
                      onChange={(e) => setAdditionalInformation(e.target.value)}
                      placeholder="Enter details..."
                      className="w-full px-4 py-3 rounded-lg border border-green-300 focus:ring-2 focus:ring-green-600 focus:border-transparent focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading} //  Disable button when loading
                    className={`w-full ${
                      loading ? "bg-gray-500" : "bg-[#008C33] hover:bg-green-800"
                    } text-white font-semibold px-6 py-4 rounded-lg transition-all transform hover:scale-105`}
                  >
                    {loading ? "Submitting..." : "Submit Application"} {/*  Show loading text */}
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
