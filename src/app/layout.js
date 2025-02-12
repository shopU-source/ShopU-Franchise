import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Page1 from "@/app/Page1/Page"
import Page2 from "@/app/Page2/Page"
import Page3 from "@/app/Page3/Page"
import Page4 from "@/app/Page4/Page"
import Page5 from "@/app/Page5/Page"
import Page6 from "@/app/Page6/Page"
import Page7 from "@/app/Page7/Page"
// import ContactUs from "@/app/ContactUs/Page"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShopU",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-[#f3f4f6]"
      >
        <Navbar />
        {children}
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        {/* <ContactUs /> */}
        <Footer />
      </body>
    </html>
  );
}
