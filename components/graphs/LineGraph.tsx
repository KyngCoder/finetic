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
import { Graph } from "../../helpers/Types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph() {
  const [info, setInfo] = useState<Graph>([]);
  const [crypto, setCrypto] = useState("SPY");
  const [period, setPeriod] = useState(28);
  

  useEffect(() => {
    const getInfo = async () => {
      const data = await axios.get(
        `https://financialmodelingprep.com/api/v3/historical-price-full/${crypto}?timeseries=${period}&apikey=f777da10da2c1a70cd2f09fc262d7533`
      );
      setInfo(data.data.historical);
    };
    getInfo();
  }, [period, crypto]);

  console.log(info)

  return (
    
        <div className="lg:w-1/2 xl:w-3/4 px-8 ">
          <div className="flex justify-center ml-2 text-black space-x-2 mb-2">
            <button
              onClick={() => setPeriod(7)}
              className="bg-yellow-500 font-bold px-6 py-1 "
            >
              7 Days
            </button>
            <button
              onClick={() => setPeriod(14)}
              className="bg-yellow-500 font-bold px-6  py-1 "
            >
              14 Days
            </button>
            <button
              onClick={() => setPeriod(28)}
              className="bg-yellow-500 font-bold px-6 py-1 "
            >
              28 Days
            </button>
            <button
              onClick={() => setPeriod(90)}
              className="bg-yellow-500 font-bold px-6 py-1 "
            >
              90 Days
            </button>
            <button
              onClick={() => setPeriod(150)}
              className="bg-yellow-500 font-bold px-6 py-1 "
            >
              Max
            </button>
          </div>
          <Line
            data={{
              labels: info.map((coin) => coin.label.split(", ")[0]),

              datasets: [
                {
                  data: info.map((coin) => coin.high),
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
  );
}
