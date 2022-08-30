import Image from "next/image";
import React from "react";
import safety from "../public/safety.png";
import eth from "../public/cryp.png";
import exchange from "../public/etf.png";
import exchange1 from "../public/etf2.png";
import exchange2 from "../public/etf3.png";
import robo from "../public/robo.png";
import otc from "../public/otc.png";

const Perks = () => {
  return (
    <div className="lg:flex flex-col bg-gray-900">
      <div className="max-h-lg ">
        <div className="md:flex justify-evenly">
          <div className="max-w-lg">
          <Image src={safety} alt="safety" />
          </div>
          <div className="py-8 flex flex-col  justify-center">
            <h2 className="text-4xl px-8 mb-4 font-bold ">Diamond Security </h2>
            <p className="px-8 mb-4 text-lg max-w-lg">
              We use bank-level security, 256-bit encryption and allow
              two-factor authentication for added security
            </p>
            <p className="px-8 cursor-pointer text-green-500">Learn more</p>
          </div>
        </div>
      </div>

      <div className="max-h-lg back">
        <div className="md:flex flex-row-reverse justify-evenly">
      <div className="max-w-lg">
      <Image src={eth} alt="safety" />
      </div>
          <div className="py-8 flex flex-col  justify-center">
            <h2 className="text-4xl px-8 mb-4 font-bold">Crypto Currency </h2>
            <p className="px-8 mb-4 text-lg max-w-lg">
              Diversify your holdings by investing in digital currencies
              including Bitcoin,Ethereum,Solana, Litecoin.
            </p>
            <p className="px-8 cursor-pointer text-green-500">Learn more</p>
          </div>
        </div>
      </div>

      <div className="max-h-lg ">
        <div className="md:flex justify-evenly">
          <div className="max-w-lg">
          <Image src={exchange1} alt="OTC" />
          </div>
          <div className="py-8 flex flex-col  justify-center">
            <h2 className="text-4xl px-8 mb-4 font-bold ">
              Exchange Traded Funds
            </h2>
            <p className="px-8 mb-4 text-lg max-w-2xl">
              Exchange traded funds are a type of investment fund that offer the
              best attributes of two popular assets: They have the
              diversification benefits of mutual funds while mimicking the ease
              with which stocks are traded.
            </p>
            <p className="px-8 cursor-pointer text-green-500">Learn more</p>
          </div>
        </div>
      </div>

      
     
      <div className="max-h-lg back">
        <div className="md:flex flex-row-reverse justify-evenly">
      <div className="max-w-lg">
      <Image src={otc} alt="safety" />
      </div>
          <div className="py-8 flex flex-col  justify-center">
            <h2 className="text-4xl px-8 mb-4 font-bold">Crypto Currency </h2>
            <p className="px-8 mb-4 text-lg max-w-lg">
            Get the chance to invest in stocks that aren't officially part of the market as yet.
            </p>
            <p className="px-8 cursor-pointer text-green-500">Learn more</p>
          </div>
        </div>
      </div>
            

      <div className="max-h-lg ">
        <div className="md:flex justify-evenly">
         <div className="max-w-lg">
         <Image src={robo} alt="safety" />
         </div>
          <div className="py-8 flex flex-col  justify-center">
            <h2 className="text-4xl px-8 mb-4 font-bold ">Robo Advisors </h2>
            <p className="px-8 mb-4 text-lg max-w-lg">
            Robo-advisors can help put your money to work so you don’t have to.
            </p>
            <p className="px-8 cursor-pointer text-green-500">Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
