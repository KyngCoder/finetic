import React, { useState } from 'react'
import Commodities from './Commodities';
import ETF from './ETF';
import GainerLoser from './GainerLoser';
import Tradable from './Tradable';


const Stock = () => {

    const [index, setIndex] = useState(1);

    const choose = () => {
      if(index === 1)return <Tradable />
      else if(index === 2) return <GainerLoser />
      else if (index === 3) return <Commodities />
      else return <ETF />
   }

  return (
    <div>
         <div className="flex justify-between px-8 mt-4">
          <ul className="flex  text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-4 justify-center ">
            <li className="mr-2" onClick={() => setIndex(1)}>
              <a
                href="#"
                className={
                  index === 1
                    ? "inline-block py-3 px-4 text-white bg-blue-600 rounded-lg duration-700"
                    : "inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }
                aria-current="page"
              >
                 Tradable Stock
              </a>
            </li>
            <li className="mr-2" onClick={() => setIndex(2)}>
              <a
                href="#"
                className={
                  index === 2
                    ? "inline-block py-3 px-4 text-white bg-blue-600 rounded-lg duration-700"
                    : "inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }
                aria-current="page"
              >
                Gainers/Loser
              </a>
            </li>
            <li className="mr-2" onClick={() => setIndex(3)}>
              <a
                href="#"
                className={
                  index === 3
                    ? "inline-block py-3 px-4 text-white bg-blue-600 rounded-lg duration-700"
                    : "inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }
                aria-current="page"
              >
                Commodities
              </a>
            </li>
            <li className="mr-2" onClick={() => setIndex(4)}>
              <a
                href="#"
                className={
                  index === 4
                    ? "inline-block py-3 px-4 text-white bg-blue-600 rounded-lg duration-700"
                    : "inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                }
                aria-current="page"
              >
                ETF
              </a>
            </li>
          </ul>

          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search a coin"
              />
            </div>
          </form>
        </div>
        {choose()}
    </div>
  )
}

export default Stock