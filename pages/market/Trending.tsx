import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/UserData";
type Trending = {
   item:{
    id: "",
    symbol: "",
    name: "",
    thumb: "",
    price_btc: 0,
    market_cap_rank: 0,
    score: "",
   }
  }[]

const TrendingCoin = () => {
  const [trendingCoins, setTrendingCoins] = useState<Trending>([ ]);
  const {crypto,setCrypto} = useAuth()

  const getCoins = async () => {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    setTrendingCoins(data.data.coins);
  };

  useEffect(() => {
    getCoins();
  }, []);

  

  return (
    <div className="bg-gray-900">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Market Cap Rank
              </th>

              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Trending rank
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {trendingCoins?.map((coin, index:number) => {
            return (
              <tbody key={coin.item.id}>
                <tr
                  className={
                    index % 2 === 0
                      ? "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      : "bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                  }
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex space-x-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={coin.item.thumb}
                        alt="Rounded avatar"
                      />

                      <div>
                        <p>{coin.item.symbol}</p>
                        <p>{coin.item.name}</p>
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">{coin.item.market_cap_rank}</td>
                  
                  <td className="py-4 px-6">{coin.item.price_btc}</td>
                  <td className="py-4 px-6">{coin.item.score + 1}</td>

                  <td className="py-4 px-6">
                  <Link href="/details/Details">
                      <button onClick={()=>setCrypto(coin.item.id)} className="font-medium border-4 shadow-md rounded-md border-blue-500 px-2 py-1.5 text-center">
                        Trade
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })} 
        </table>
      </div>
    </div>
  );
};

export default TrendingCoin;
