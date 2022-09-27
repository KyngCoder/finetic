import React, { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/UserData";

type CoinsProps = {
  data: {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
  }[];
};

const Table: FC<CoinsProps> = ({ data }) => {

  const {crypto,setCrypto} = useAuth()

  const setSearchTerm = (coin:string) => {
    localStorage.setItem('searchTerm',coin)
  }

  useEffect(()=>{
    const setSearchTerm = (coin:string) => {
      localStorage.setItem('searchTerm',coin)
    }
  })

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
                Market Cap
              </th>

              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                24h Change
              </th>
              <th scope="col" className="py-3 px-6">
                24h Volume
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          {data?.map((coin, index: number) => {
            return (
              <tbody key={coin.id}>
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
                        src={coin.image}
                        alt="Rounded avatar"
                      />

                      <div>
                        <p>{coin.symbol}</p>
                        <p>{coin.name}</p>
                      </div>
                    </div>
                  </th>
                  <td className="py-4 px-6">{coin.market_cap}</td>
                  <td
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "text-green-600 py-4 px-6"
                        : "text-white py-4 px-6"
                    }
                  >
                    {coin.current_price}
                  </td>
                  <td
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "text-green-600 py-4 px-6"
                        : "text-red-600 py-4 px-6"
                    }
                  >
                    {coin.price_change_percentage_24h}
                  </td>
                  <td className="py-4 px-6">{coin.market_cap_change_24h}</td>

                  <td className="py-4 px-6">
                    <Link href="/details/Details">
                      <button onClick={()=>setSearchTerm(coin.id)} className="font-medium border-4 shadow-md rounded-md border-blue-500 px-2 py-1.5 text-center">
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

export default Table;
