import React from "react";
import Image from "next/image";
import logo from "../public/Finetic (3).png";
import inst from "../public/Instagram-Logo.wine.svg";
import twit from "../public/Twitter-Logo.wine.svg";
import link from "../public/LinkedIn-Icon-Logo.wine.svg";
import face from "../public/Facebook-f_Logo-White-Logo.wine.svg";

const Footer = () => {
  return (
    <footer className=" p-8 lg:flex max-w-7xl xl:pl-72 pr-16 flex-col">
      <div className=" md:flex justify-between">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">Have any questions?</h2>
          <button className="bg-green-500 rounded-full px-4 py-2  border-4">Contact Support</button>
        </div>
        <div>
          <h4 className="mb-4 font-bold">Products</h4>
          <p>Stocks</p>
          <p>ETF's</p>
          <p>Crypto</p>
          <p>Robo Advisor</p>
        </div>
        <div>
          <h4 className="mb-4 font-bold mt-4 md:mt-0">Who We Are</h4>
          <p>About</p>
          <p>Careers</p>
        </div>
        <div>
          <h4 className="mb-4 mt-4 md:mt-0 font-bold">Why Start Now</h4>
          <p>Grow your knowledge</p>
          <p>Money Basics</p>
        </div>
      </div>

      <div className="md:flex">
        <Image src={logo} alt="logo" height={200} width={200}   />
        <div className="flex pt-20 space-x-5 text-lg mr-4 mb-4">
          <p>Pricing</p>
          <p>Store</p>
          <p>Legal</p>
          <p> Privacy Policy</p>
        </div>

        <div className="flex">
          <Image src={inst} alt="instagram" width={60} height={60} />
          <Image src={twit} width={60} height={60} />
          <Image src={link} alt="linkedin" width={60} height={60} />
          <Image src={face} alt="facebook" width={60} height={60} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
