import Image from "next/image";
import React from "react";
import banner1 from "../public/banner1.jpg";
import banner2 from "../public/banner2.jpg";
import banner3 from "../public/banner3.jpg";
import banner4 from "../public/banner4.jpg";
import banner5 from "../public/5.jpg";
import banner6 from "../public/banner6.jpg";
import bann from '../public/bann1.jpg'
import Link from 'next/link'
import Button from "./Button";


const Banner = () => {
  return (
    <section className="text-gray-600 dark:bg-gray-900 lg:px-36 px-8">
    <div className="container mx-auto flex py-4 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2  flex flex-col items-start md:text-left   ">
        <h1 className="text-5xl  font-extrabold  lg:text-7xl 2xl:text-8xl mb-4 ">
          <p className="text-transparent bg-gradient-to-br bg-clip-text from-teal-200 via-indigo-300 to-sky-500  ">
            Simple
          </p>

          <p className="text-transparent bg-gradient-to-tr bg-clip-text from-sky-300 via-pink-300 to-red-500  ">
            Investment
          </p>
        </h1>
        <p className="mb-8 leading-relaxed max-w-lg">
        Meet the platform that gives you the tools, inpiration and community
          you need to become a better investor.
        </p>
        <div className="flex justify-center mb-4">
       
              <Button text="Get Started" />
          
          <button className="ml-4 inline-flex text-gray-9 bg-gray-100 border-0  px-4 focus:outline-none hover:bg-gray-200 rounded text-lg h-10 mt-1 grid items-center">
            Read More
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src={bann}
        />
      </div>
    </div>
  </section>
  );
};

export default Banner;
