import Link from "next/link";
import React, { FC } from "react";
import { useAuth } from "../../context/UserData";

type MoversProp = {
  data: {
    symbol: string;
    name: string;
    change: number;
    price: number;
    changesPercentage: number;
  }[]
}

const Movers: FC<MoversProp> = ({ data }) => {

  const {crypto,setCrypto} = useAuth()

  return (
    <div className="overflow-x-auto relative shadow-md ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>

            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              Change
            </th>
            <th scope="col" className="py-3 px-6">
              Change Percentage
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        {data.map((stock, index: number) => {
          return (
            <tbody key={`${stock.name} ${index}`}>
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
                    <div>
                      <p>{stock.symbol}</p>
                      <p>{stock.name}</p>
                    </div>
                  </div>
                </th>
                <td className={"py-4 px-6"}>{stock.price}</td>
                <td className="py-4 px-6">{stock.change}</td>
                <td className="py-4 px-6">{stock.changesPercentage}</td>

                <td className="py-4 px-6">
                <Link href="/details/StockDetails">
                      <button onClick={()=>setCrypto(stock.symbol)} className="font-medium border-4 shadow-md rounded-md border-blue-500 px-2 py-1.5 text-center">
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
  );
};

export default Movers;
