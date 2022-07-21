import Image from "next/image";
import React from "react";
import logo1 from "../public/Finetic (3).png";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-screen max-w-7xl xl:justify-center ">
      <div className="flex px-4 ">
        <Image src={logo1} alt="logo" width={100} height={100}  />

        <div className="flex space-x-5 hidden md:flex ">
          <p className="pt-8 cursor-pointer">Community</p>
          <p className="pt-8 cursor-pointer">Market</p>
          <p className="pt-8 cursor-pointer">Learn</p>
          <p className="pt-8 cursor-pointer">Support</p>
        </div>
      </div>

      <div className="flex space-x-5 py-8 px-4  ">
        <button className="w-24 h-8">Sign In</button>
        <button className="rounded-full w-24 h-8  bg-blue-700 ">Sign-Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
