import React, { useState, useEffect } from "react";
import axios from "axios";
import Movers from "./Movers";

type Movers = {
  symbol: string;
  name: string;
  change: number;
  price: number;
  changesPercentage: number;
}[];

const GainerLoser = () => {
  const [winners, setWinners] = useState<Movers>([]);
  const [losers, setLosers] = useState<Movers>([]);

  const getMovers = async (type: string) => {
    const data = await axios.get(
      `https://financialmodelingprep.com/api/v3/stock_market/${type}?apikey=${process.env.NEXT_PUBLIC_FINANCE_SECRET}`
    );

    if(type=== 'gainers') setWinners(data.data)
    if(type=== 'losers') setLosers(data.data)
  };

  useEffect(()=>{
    getMovers('gainers')
    getMovers('losers')
  },[])

  console.log(winners);

  return (
    <div>
      <div className="text-center">
        <h2 className="relative text-2xl top-5 back inline-block px-4">
          Stock Movers
        </h2>

        <div className="h-1 mt-1 bg-green-700 rounded-md"></div>
      </div>


      <div className="block 2xl:flex h-full back justify-center px-8  space-x-10">
        <div className=" w-full 2xl:w-1/2">
        <div className="bg-green-600 w-full mt-4 text-center">Gainers ↗️</div>
          <Movers data={winners}/>
        </div>

        <div className=" w-full 2xl:w-1/2 ">
        <div className="bg-red-600  w-full mt-4 mr-6 text-center">Losers ↙️</div>
          <Movers data={losers} />
        </div>
      </div>
    </div>
  );
};

export default GainerLoser;
