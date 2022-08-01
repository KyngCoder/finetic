import Image from "next/image";
import React from "react";
import banner1 from "../public/banner1.jpg";
import banner2 from "../public/banner2.jpg";
import banner3 from "../public/banner3.jpg";
import banner4 from "../public/banner4.jpg";
import banner5 from "../public/5.jpg";
import banner6 from "../public/banner6.jpg";
import Link from 'next/link'

const Banner = () => {
  return (
    <section className="lg:flex max-w-7xl xl:px-72 ">
      <div className="p-8 ">
        <h1 className="text-6xl mb-4 font-extrabold">Investing Made Simple</h1>
        <h3 className="mb-4 text-lg">
          Meet the platform that gives you the tools, inpiration and community
          you need to become a better investor.
        </h3>
        <Link href="registration/signup">
        <button className="bg-blue-800 w-32 rounded-full p-4 text-lg">Get Started</button>
        </Link>
        
      </div>

      <div className=" m-4 rounded-lg">
        <Image src={banner6} alt="banner"  />
      </div>
    </section>
  );
};

export default Banner;
