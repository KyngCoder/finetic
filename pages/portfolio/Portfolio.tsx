import React, { useState } from "react";
import Asset from './Asset'

const Portfolio = () => {
  const [index, setIndex] = useState(2);

  return (
    <div className="flex flex-col text-white">
      <div className="h-1/5 bg-gray-800 flex flex-col items-center">
        <h1 className="mb-4 text-2xl pt-2 font-extrabold">Portfolio</h1>

        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-2">
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
              Stocks
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
            >
              Crypto
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
            >
              Bonds
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
            >
              Mutual Funds
            </a>
          </li>
          <li className="mr-2 " onClick={() => setIndex(5)}>
            <a
              href="#"
              className={
                index === 5
                  ? "inline-block py-3 px-4 text-white bg-blue-600 rounded-lg duration-700"
                  : "inline-block py-3 px-4 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
              }
            >
              Index Fund
            </a>
          </li>
        </ul>
      </div>
      <div>
        <Asset />
      </div>
    </div>
  );
};

export default Portfolio;
