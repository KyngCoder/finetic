import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuth } from "../../context/UserData";
import Link from 'next/link';

type Comm =  {
  "symbol" : "EDF.PA",
  "price" : 9.83400000,
  "changesPercentage" : -0.83000000,
  "change" : -0.08200000,
  "marketCap" : 30423642112.00000000,
  "volume" : 1998436,
}[]

const Commodities = () => {
  const {crypto,setCrypto} = useAuth()

  const [comm,setComm] = useState<Comm>([
    {
      "symbol" : "EDF.PA",
      "price" : 9.83400000,
      "changesPercentage" : -0.83000000,
      "change" : -0.08200000,
      "marketCap" : 30423642112.00000000,
      "volume" : 1998436,
    }
  ])

  const getCommodities = async() => {
    const data = await  axios.get(`https://financialmodelingprep.com/api/v3/quotes/commodity?apikey=${process.env.NEXT_PUBLIC_FINANCE_SECRET}`)

    setComm(data.data)

  }

//   useEffect(() =>{
//  getCommodities()
//   },[])

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
        {comm?.map((coin, index:number) => {
          return (
            <tbody key={`${coin.marketCap}${index} `}>
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


                  
                      <p>{coin.symbol}</p>
            
                  
                
                </th>
                <td className="py-4 px-6">{coin.marketCap}</td>
                <td
                  className={
                    coin.changesPercentage > 0
                      ? "text-green-600 py-4 px-6"
                      : "text-white py-4 px-6"
                  }
                >
                  {coin.price}
                </td>
                <td
                  className={
                    coin.changesPercentage > 0
                      ? "text-green-600 py-4 px-6"
                      : "text-red-600 py-4 px-6"
                  }
                >
                  {coin.changesPercentage}
                </td>
                <td className="py-4 px-6">{coin.marketCap}</td>

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
  </div>
  )
}

export default Commodities