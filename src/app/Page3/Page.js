
"use client"

export default function FranchiseModels() {
    return (
        <div id="Franchise" className=" min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-[120px]">

            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#294711]">Our Franchise Models</h2>
                <p className="text-gray-600 mt-2">
                    Choose from our versatile franchise models designed to suit different spaces <br />
                    and business visions
                </p>
                <div className="w-16 h-1 bg-green-600 mx-auto mt-4 rounded"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
                {/* Main Franchise Model Card */}
                <div className="hover:scale-110 transition-all bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-start gap-4">
                        <div className=" bg-[#008A32] p-3 rounded-xl text-white">
                            <span className="text-xl">🏢</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#155016]">MedU by ShopU</h3>
                            <p className="text-gray-600 mt-1">Medicine Store Format</p>
                        </div>
                    </div>
                    <div className="mt-4 text-gray-700 space-y-2">
                        <p>✔ Size: 120 Sq Ft to 5000 Sq Ft</p>
                        <p>✔ Ideal for healthcare entrepreneurs</p>
                        <p>✔ Focus on community healthcare</p>
                    </div>
                </div>

                {/* Other Franchise Models */}
                <div className="space-y-4 ml-6">
                    <div className="hover:scale-110 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                        <h4 className="text-lg font-semibold text-[#155016]">ShopU Store</h4>
                        <p className="text-sm text-gray-600">120 Sq Ft to 499 Sq Ft</p>
                        <p className="text-gray-700 mt-1">Perfect for small retail setups targeting daily essentials</p>
                    </div>

                    <div className="hover:scale-110 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                        <h4 className="text-lg font-semibold text-[#155016]">ShopU Mart</h4>
                        <p className="text-sm text-gray-600">500 Sq Ft to 1249 Sq Ft</p>
                        <p className="text-gray-700 mt-1">Ideal for larger setups with wider product variety</p>
                    </div>

                    <div className="hover:scale-110 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                        <h4 className="text-lg font-semibold text-[#155016]">ShopU Super Mart</h4>
                        <p className="text-sm text-gray-600">More than 1249 Sq Ft</p>
                        <p className="text-gray-700 mt-1">Best suited for hypermarkets and comprehensive solutions</p>
                    </div>
                </div>
            </div>


            <button className="mt-8 bg-[#008A32] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-green-800 transition">
                Apply for Franchise
            </button>
        </div>
    );
}
