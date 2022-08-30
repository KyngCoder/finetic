import Image from "next/image";
import React, { useState } from "react";
import logo1 from "../public/Finetic (3).png";
import {GiHamburgerMenu} from 'react-icons/gi'
import {SiBitcoinsv} from 'react-icons/si'

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <nav className="flex justify-between w-screen max-w-7xl  ">
      <div className="flex px-4 ">
        <Image src={logo1} alt="logo" width={120} height={120}  />

        <div className="flex space-x-5 hidden md:flex xl:text-lg space-x-7 ">
          <p className="pt-8 cursor-pointer">Community</p>
          <p className="pt-8 cursor-pointer">Market</p>
          <p className="pt-8 cursor-pointer">Learn</p>
          <p className="pt-8 cursor-pointer">Support</p>
        </div>
      </div>

      <div className="flex space-x-5 py-8 px-4  ">
        <GiHamburgerMenu
          className="text-white sm:hidden absolute cursor-pointer top-6 right-10"
          onClick={() => setToggleMenu(true)}
        />
      </div>
      <div>
        {toggleMenu && (
          <div className="fixed top-0 left-0 w-screen h-screen back duration-200 ease-out z-10 flex justify-center ">
            <SiBitcoinsv
              className=" text-white absolute  right-20 mb-8 mt-4 text-2xl cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="mt-10">
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Community
                </a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Market
                </a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Learn
                </a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#menu">Support</a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#awards">SignIn</a>
              </li>
              <li className="m-4 cursor-pointer primary-color text-2xl text-center font hover:text-white">
                <a href="#contact">Sign Up</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
