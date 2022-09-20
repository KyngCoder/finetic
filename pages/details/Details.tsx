import React, { useState,useEffect } from "react";
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useAuth } from "../../context/UserData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)



export default function Details() {

  const [info,setInfo] = useState([])
  const {crypto} = useAuth()
  const [period,setPeriod] = useState(7)
  const [currency,setCurrency] = useState('usd')
  const [data,setData] = useState([])

  const getData = async() => {
    const data = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto.toLowerCase()}/market_chart?vs_currency=${currency}&days=${period}`)
    setInfo(data.data.prices)
  }


  const getInfo = async() => {

      const data = await axios.get(`https://api.coingecko.com/api/v3/coins/${crypto.toLowerCase()}/market_chart?vs_currency=${currency}&days=${period}`)
      setInfo(data.data.prices)
  
    }
  
    useEffect(()=>{
  getInfo()
    },[])
  
  const [days,setDays] = useState(1)
  

  return (
    <div className="back h-screen overflow-x-hidden p-8 text-white flex justify-between w-screen">
     <div className="w-4/5">
    
     <Line data={{
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
              }}  />
 <div>data</div>

              
     </div>
     <div>buy /sell</div>
    </div>
  );
}
