import React, { useState } from "react";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const Graph = ({ data, period,setPeriod,crypto }) => {

  console.log(data)
  
  const [days, setDays] = useState(1);

  return (
    <div>
      <div className="flex justify-center text-black space-x-5 mb-2">
        <button
          onClick={() => setPeriod(1)}
          className="bg-yellow-500 font-bold px-4 py-1 text-lg"
        >
          1 Days
        </button>
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
          onClick={() => setPeriod("max")}
          className="bg-yellow-500 font-bold px-4 py-1 text-lg"
        >
          All Time
        </button>
      </div>

      <Line
        data={{
          labels: data.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: data.map((coin) => coin[1]),
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
};

export default Graph;
