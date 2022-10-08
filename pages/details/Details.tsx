import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";



import Trade from "./Trade";
import Watch from "./Watch";
import Graph from "../../helpers/Graph";

type DataType = {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
    thumb: string;
  };
  description: {
    en: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap_rank: number;
    market_cap: {
      usd: number;
    };
  };
  links: {
    homepage: string[];
  };
};

export default function Details() {
  const [info, setInfo] = useState([]);
  const [crypto, setCrypto] = useState();
  const [data, setData] = useState<DataType>();
  const [active, setActive] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const [period, setPeriod] = useState(7);
  const getSearchTerm = () => {
    const searchTerm = (localStorage.getItem("searchTerm") || " ");
    setCrypto(searchTerm);
  };

  useEffect(() => {
    getSearchTerm();
    const getData = async () => {
      const data = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${crypto}?localization=false`
      );
      setData(data.data);
    };
    getData();
  }, [crypto]);

  useEffect(() => {
    const getInfo = async () => {
      const data = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${crypto?.toLowerCase()}/market_chart?vs_currency=${currency}&days=${period}`
      );
      setInfo(data.data.prices);
    };

    getInfo();
  }, [period, crypto, currency]);

  const renderCheckOut = () => {
    if (active === 0)
      return <Trade data={data} category="buy" type="cryptoWatchList" />;
    else if (active === 1)
      return <Trade data={data} category="sell" type="cryptoWatchList" />;
    else return <Watch data={data} type="cryptoWatchList" />;
  };


  return (
    <div className="bg-gray-900 h-screen overflow-x-hidden p-8 text-white  justify-between w-screen">
      <div className="lg:flex mb-4">
        <div className="mt-4 lg:w-1/2 xl:w-1/4 border-4 p-4 mr-2 mb-8 lg:mb-0">
          <div className=" flex flex-col items-center">
            <img className="" src={data?.image?.large} alt="bitcoin" />
          </div>
          <p className="text-lg my-2">
            {ReactHtmlParser(data?.description?.en.split(". ")[0])}
          </p>
          <p className="font-bold text-2xl">
            Rank:{" "}
            <span className="font-medium">
              {data?.market_data?.market_cap_rank}
            </span>
          </p>
          <p className="font-bold text-2xl">
            Current Price:{" "}
            <span className="font-medium">
              {data?.market_data?.current_price.usd}
            </span>
          </p>
          <p className="font-bold text-2xl">
            Market Cap:{" "}
            <span className="font-medium">
              {data?.market_data?.market_cap.usd}
            </span>
          </p>

          <a href={data?.links?.homepage[0]} rel="noreferrer" target="_blank">
            {" "}
            <button className="bg-green-500 text-lg px-4 py-2 rounded-md">
              Read More
            </button>
          </a>
        </div>

        <div className="lg:w-1/2 xl:w-3/4 ">
          <Graph
            data={info}
            period={period}
            setPeriod={setPeriod}
            crypto={crypto}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-evenly back w-96 pb-4 ">
          <div className=" py-2">
            <ul className="flex flex-wrap  mb-4">
              <li className="mr-2" onClick={() => setActive(0)}>
                <a
                  href="#"
                  className={
                    active === 0
                      ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                >
                  Buy
                </a>
              </li>
              <li className="mr-2" onClick={() => setActive(1)}>
                <a
                  href="#"
                  className={
                    active === 1
                      ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                  aria-current="page"
                >
                  Sell
                </a>
              </li>
              <li className="mr-2" onClick={() => setActive(2)}>
                <a
                  href="#"
                  className={
                    active === 2
                      ? "inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                >
                  WatchList
                </a>
              </li>
            </ul>
            {renderCheckOut()}
          </div>
        </div>
      </div>
    </div>
  );
}
