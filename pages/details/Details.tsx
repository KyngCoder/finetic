import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
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
import Image from "next/image";

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
  image: {
    large: string;
  };
  description: {
    en: string ;
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
  const { crypto } = useAuth();
  const [period, setPeriod] = useState(7);
  const [currency, setCurrency] = useState("usd");
  const [data, setData] = useState<DataType>();

  const getData = async () => {
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${crypto}?localization=false`
    );
    setData(data.data);
  };

  const getInfo = async () => {
    const data = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${crypto.toLowerCase()}/market_chart?vs_currency=${currency}&days=${period}`
    );
    setInfo(data.data.prices);
  };

  useEffect(() => {
    getInfo();
    getData();
  }, []);

  console.log(data);

  const [days, setDays] = useState(1);

  return (
    <div className="bg-gray-900 h-screen overflow-x-hidden p-8 text-white  justify-between w-screen">
      <div className="lg:flex mb-4">
        <div className="mt-4 lg:w-1/2 xl:w-1/4 border-4 p-4 mr-2 mb-8 lg:mb-0">
          <div className=" flex flex-col items-center">
            <img className="" src={data?.image?.large} alt="bitcoin" />
          </div>
          <p className="text-lg my-2">
          {ReactHtmlParser(data?.description.en.split(". ")[0])}
          </p>
          <p className="font-bold text-2xl">
            Rank:{" "}
            <span className="font-medium">
              {data?.market_data.market_cap_rank}
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
              {data?.market_data.market_cap.usd}
            </span>
          </p>

          <a href={data?.links?.homepage[0]} target="_blank">
            {" "}
            <button className="bg-yellow-500">Read More</button>
          </a>
        </div>

        <div className="lg:w-1/2 xl:w-3/4 ">
          <Line
            data={{
              labels: info.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: info.map((coin) => coin[1]),
                  label: `${crypto} Price ( Past 7 Days ) in USD`,
                  borderColor: "#EEBC1D",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
          />
        </div>
      </div>
      <div>buy /sell</div>
    </div>
  );
}
