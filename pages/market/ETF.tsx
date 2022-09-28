import axios from 'axios'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'

import { useAuth } from "../../context/UserData";


const ETF = () => {
  const {crypto,setCrypto} = useAuth()

  const [etf,setETF] = useState([ {
    "symbol" : "SPY",
    "name" : "SPDR S&P 500 ETF Trust",
    "price" : 441.4,
    "exchange" : "New York Stock Exchange Arca",
    "exchangeShortName" : "NYSE",
  }])

  const getEtf = async() => {
    const data = await axios.get(`https://financialmodelingprep.com/api/v3/etf/list?apikey=${process.env.NEXT_PUBLIC_FINANCE_SECRET}`)
    setETF(data.data)
  }

  useEffect(()=>{
    getEtf()
  },[])

 

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
              Ticker
            </th>

            <th scope="col" className="py-3 px-6">
              Price
            </th>
          
            <th scope="col" className="py-3 px-6">
             Market
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        {etf?.map((coin, index:number) => {
          return (
            <tbody key={`${coin.symbol}${index} `}>
              <tr
                className={
                  index % 2 === 0
                    ? "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                    : "bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700"
                }
              >
                <td
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >


                  
                      <p>{coin.name}</p>
            
                  
                
                </td>
                <td className="py-4 px-6">{coin.symbol}</td>
                <td
                  className="py-4 px-6"
                >
                  {coin.price}
                </td>
                <td
                  className="py-4 px-6"
                >
                 <div className='block'>
                 {coin.exchange}
                 {coin.exchangeShortName}
                 </div>
                </td>

                <td className="py-4 px-6">
                <Link href="/details/StockDetails">
                      <button onClick={()=>setCrypto(coin.symbol)} className="font-medium border-4 shadow-md rounded-md border-blue-500 px-2 py-1.5 text-center">
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

export default ETF