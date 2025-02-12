"use client";
import Image from "next/image";
import logoFooter from "@/public/logo/logoFooter.png";
import Link from "next/link";
export default function Navbar() {


    return (<>
        <footer id="footer" className="bg-neutral-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="animate__animated animate__fadeIn">
          <div className="mb-6">
            <Link href="#Home">
            <Image src={logoFooter} className="w-36 " alt="Logo" />
            </Link>
            <p className="text-neutral-400 mt-2">Revolutionizing retail with zero-commission solutions</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/shopuofficial" className="text-neutral-400 hover:text-white transition-colors">
            <svg  className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24"  id="linkedin">
  <path d="M8.021 8.015h-5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5zm-.5 15h-4v-14h4v14zM5.727-.015c-1.768 0-3.206 1.456-3.206 3.246 0 1.791 1.438 3.247 3.206 3.247s3.206-1.457 3.206-3.247c0-1.79-1.438-3.246-3.206-3.246zm0 5.494c-1.216 0-2.206-1.008-2.206-2.247 0-1.238.99-2.246 2.206-2.246 1.217 0 2.206 1.008 2.206 2.246 0 1.239-.989 2.247-2.206 2.247zM20.521 7.909c-2.438 0-4.097.6-5 1.051v-.445a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-8.238c0-1.285 1.32-2.246 2.5-2.246s2.5.961 2.5 2.246v8.238a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-9.611a6.004 6.004 0 0 0-6-5.995zm5 15.106h-4v-7.738c0-1.729-1.636-3.246-3.5-3.246s-3.5 1.517-3.5 3.246v7.738h-3v-14h3v.825c0 .191.109.364.281.448a.496.496 0 0 0 .527-.055c.017-.013 1.745-1.324 5.191-1.324 2.757 0 5 2.24 5 4.994l.001 9.112z"></path>
</svg>
            </Link>
            <Link href="https://www.instagram.com/shopu.live?igsh=MWg3eDN1azk0c3dhbQ==" className="text-neutral-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="animate__animated animate__fadeIn animate__delay-1s">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#Home" className="text-neutral-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#page1" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#Franchise" className="text-neutral-400 hover:text-white transition-colors">Franchise Models</a></li>
            <li><a href="#Investment" className="text-neutral-400 hover:text-white transition-colors">Benefits</a></li>
          </ul>
        </div>

        <div className="animate__animated animate__fadeIn animate__delay-2s">
          <h4 className="text-lg font-semibold mb-4">Franchise Models</h4>
          <ul className="space-y-2">
            <li><a href="#Franchise" className="text-neutral-400 hover:text-white transition-colors">MedU by ShopU</a></li>
            <li><a href="#Franchise" className="text-neutral-400 hover:text-white transition-colors">ShopU Store</a></li>
            <li><a href="#Franchise" className="text-neutral-400 hover:text-white transition-colors">ShopU Mart</a></li>
            <li><a href="#Franchise" className="text-neutral-400 hover:text-white transition-colors">ShopU Super Mart</a></li>
          </ul>
        </div>

        <div className="animate__animated animate__fadeIn animate__delay-3s">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center text-neutral-400">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              +91 96465 34433
            </li>
            <li className="flex items-center text-neutral-400">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              liveshopu@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
        <p>&copy; 2024 ShopU. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </>);

}