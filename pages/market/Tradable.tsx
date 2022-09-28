import React,{useState,useEffect} from 'react'
import axios from "axios";
import Link from 'next/link';

import { useAuth } from "../../context/UserData";


const Tradable = () => {
  const {crypto,setCrypto} = useAuth()
    const [tradable, setTradable] = useState([
        {
        symbol:'',
        name:'',
        price:0,
        exchange:'',
        exchangeShortName:'',
        }]);

        const [position, setPosition] = useState(30);

        const handleStocks = () => {
            setPosition((position) => position + 30);
          };

  const getStocks = async () => {
    const data = await axios.get(
    `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${process.env.NEXT_PUBLIC_FINANCE_SECRET}`
    );

    setTradable(data.data.flat());
  };

  useEffect(() => {
    getStocks();
  }, []);

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
           {tradable.slice(0,position).map((stock, index:number) => {
            return (
              <tbody key={`${stock.name} ${stock.price} ${index}`}>
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
                  <td
                    className={
                       "py-4 px-6"
                    }
                  >
                    {stock.price}
                  </td>
                  <td className="py-4 px-6">
                    <div>
                        <p>{stock.exchange}</p>
                        <p>{stock.exchangeShortName}</p>
                    </div>
                  </td>

                  <td className="py-4 px-6">
                  <Link href="/details/StockDetails">
                      <button onClick={()=>setSearchTerm(stock.symbol)} className="font-medium border-4 shadow-md rounded-md border-blue-500 px-2 py-1.5 text-center">
                        Trade
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}  
        </table>
        <div className="py-4 flex justify-center">
        <button
          onClick={handleStocks}
          className="p-2 bg-inherit border-4 text-lg mb-4 rounded-md"
        >
          Load more
        </button>
        </div>
      </div>
    </div>
  )
}

export default Tradable