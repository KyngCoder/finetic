import React, { useState, useEffect } from "react";
import axios from "axios";
import {CoinInfo} from '../../helpers/Types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAuth } from "../../context/UserData";
import Trade from "./Trade";
import Watch from "./Watch";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type DataType = {
  image: string;
  website: string;
  companyName: string;
  mktCap: number;
  price: number;
  industry: string;
  description: string;
  sector: string;
}[];

export default function StockDetails() {
  const [info, setInfo] = useState<CoinInfo>([]);
  const [crypto, setCrypto] = useState('');
  const [period, setPeriod] = useState(7);
  const [currency, setCurrency] = useState("usd");
  const [days, setDays] = useState(1);
  const [data, setData] = useState<DataType>([]);
  const [active, setActive] = useState(0);

  const getSearchTerm = () => {
    const searchTerm = (localStorage.getItem("searchTerm") || " ");
    setCrypto(searchTerm);
  };

  useEffect(() => {
    getSearchTerm();
    const getData = async () => {
      const data = await axios.get(
        `https://financialmodelingprep.com/api/v3/profile/${crypto}?apikey=f777da10da2c1a70cd2f09fc262d7533`
      );
      setData(data.data);
    };
    getData();
  }, [crypto]);

  useEffect(() => {
    const getInfo = async () => {
      const data = await axios.get(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${crypto}?timeseries=${period}&apikey=f777da10da2c1a70cd2f09fc262d7533`
      );
      setInfo(data.data.historical);
    };
    getInfo();
  }, [period, crypto]);

  const renderCheckOut = () => {
    if (active === 0)
      return <Trade data={data} category="buy" type="stockWatchList" />;
    else if (active === 1)
      return <Trade data={data} category="sell" type="stockWatchList" />;
    else return <Watch data={data} type="stockWatchList" />;
  };

  return (
    <div className="bg-gray-900 h-screen overflow-x-hidden p-8 text-white  justify-between w-screen">
      <div className="lg:flex mb-4">
        {data?.map((stock) => {
          return (
            <div
              key={stock.companyName}
              className="mt-4 lg:w-1/2 xl:w-1/4 border-4 p-4 mr-2 mb-8 lg:mb-0"
            >
              <div className=" flex flex-col items-center">
                <img className="" src={stock.image} alt="bitcoin" />
                <p className="text-2xl font-medium">{stock.companyName}</p>
              </div>
              <p className="text-lg my-2">
                {stock.description.split(". ").slice(0, 2).join(" ")}.
              </p>
              <p className="font-bold text-2xl">
                Sector: <span className="font-medium">{stock?.sector}</span>
              </p>
              <p className="font-bold text-2xl">
                Sector: <span className="font-medium">{stock?.industry}</span>
              </p>
              <p className="font-bold text-2xl">
                Current Price:{" "}
                <span className="font-medium">{stock?.price}</span>
              </p>
              <p className="font-bold text-2xl">
                Market Cap: <span className="font-medium">{stock?.mktCap}</span>
              </p>

              <a href={stock?.website} rel="noreferrer" target="_blank">
                {" "}
                <button className="bg-green-500 text-lg px-4 py-2 rounded-md">
                  Read More
                </button>
              </a>
            </div>
          );
        })}

        <div className="lg:w-1/2 xl:w-3/4 ">
          <div className="flex justify-center text-black space-x-5 mb-2">
            <button
              onClick={() => setPeriod(7)}
              className="bg-yellow-500 font-bold px-4 py-1 text-lg"
            >
              7 Days
            </button>
            <button
              onClick={() => setPeriod(14)}
              className="bg-yellow-500 font-bold px-4 py-1 text-lg"
            >
              14 Days
            </button>
            <button
              onClick={() => setPeriod(28)}
              className="bg-yellow-500 font-bold px-4 py-1 text-lg"
            >
              28 Days
            </button>
            <button
              onClick={() => setPeriod(90)}
              className="bg-yellow-500 font-bold px-4 py-1 text-lg"
            >
              90 Days
            </button>
            <button
              onClick={() => setPeriod(150)}
              className="bg-yellow-500 font-bold px-4 py-1 text-lg"
            >
              Max
            </button>
          </div>
          <Line
            data={{
              labels: info?.map((coin) => coin?.label?.split(", ")[0]),

              datasets: [
                {
                  data: info?.map((coin) => coin?.high),
                  label: `${crypto} Price ( Past ${period} Days ) in USD`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 2,
                },
              },
            }}
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
