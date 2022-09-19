import axios from "axios";
import React, { useEffect, useState } from "react";
import AllCoin from "./AllCoin";
import Image from "next/image"
import TrendingCoin from "./Trending";
import Crypto from "./Crypto";
import Stock from "./Stock";
import Link from "next/link";

//nft-index

//https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&apikey=YOUR_API_KEY search

/// https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=f777da10da2c1a70cd2f09fc262d7533 stock screener

// https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=f777da10da2c1a70cd2f09fc262d7533 company details

// https://financialmodelingprep.com/api/v3/sector-performance?apikey=f777da10da2c1a70cd2f09fc262d7533 sector performance

// https://financialmodelingprep.com/api/v3/historical-sectors-performance?limit=50&apikey=f777da10da2c1a70cd2f09fc262d7533 sector historical performance

// https://financialmodelingprep.com/api/v3/stock-price-change/AAPL?apikey=f777da10da2c1a70cd2f09fc262d7533 company price change

// https://financialmodelingprep.com/api/v3/etf-holder/SPY?apikey=f777da10da2c1a70cd2f09fc262d7533

//https://financialmodelingprep.com/api/v3/institutional-holder/AAPL?apikey=YOUR_API_KEY institutional holder



 



//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false crypto

//https://api.coingecko.com/api/v3/coins/bitcoin crypto details

//https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14 historical data

// https://api.coingecko.com/api/v3/search?query=ethereum search



//https://api.coingecko.com/api/v3/exchange_rates


interface Coins {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_Price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
}

const Market = () => {
  const [choice, setChoice] = useState(2);
 

 const stockOrCrypto = () => {
  if(choice === 1) return <Stock />
  else return <Crypto />
 }

  return (
    <div className="back h-screen text-white">
      <div className="flex justify-between px-8 py-4">
        <div className="flex space-x-8">
         <Link href="/">
         <h4>Finetic</h4>
         </Link>
          <h2 className="font-medium text-2xl">Market</h2>
        </div>
        <div className="flex">
          {/* bell */}
          <div className="rounded-full  border-2 w-8 h-8 border-black">
            <img
              className="w-fit object-cover rounded-full"
              src="https://imgs.search.brave.com/v2rLZm6pDLv52xeJJPMEAGu8vTf0TnBvDUaUudDQrOI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU0MTIx/MjQucG5n"
              alt=""
            />
          </div>
          <div className="flex items-center ml-2">
            <p>Lamoi Lewars</p>
          </div>
        </div>
      </div>

      <ul className="flex  text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-4 justify-center ">
        <li className="mr-2" onClick={() => setChoice(1)}>
          <a
            href="#"
            className={
              choice === 1
                ? "inline-block py-3 px-4 text-white bg-blue-600 rounded-lg duration-700"
                : "inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
            aria-current="page"
          >
            Stocks
          </a>
        </li>
        <li className="mr-2" onClick={() => setChoice(2)}>
          <a
            href="#"
            className={
              choice === 2
                ? "inline-block py-3 px-4 text-white bg-blue-600 rounded-lg duration-700"
                : "inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          >
            Crypto
          </a>
        </li>
      </ul>

      <hr className="bg-white border-1  border-green-500" />

     
{stockOrCrypto()}

      
    </div>
  );
};

export default Market;
