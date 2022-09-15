import React, { FC, useState, useEffect } from "react";
import { ImArrowUpRight, ImArrowDownLeft } from "react-icons/im";
import {watchList} from '../../components/data/Data'

const Asset: FC = () => {

  const [data,setData] = useState<any>([])

  useEffect(() => {
    setData(watchList)
  },[])

  return (
    <div>
      <div className="back h-1/5 flex justify-between px-16">
        <div>
          <h2 className="text-2xl">42,3777.31</h2>
          <p className="text-center">Total Value</p>
        </div>
        <div>
          <p className="text-green-300">59,686.95 (7.1%)</p>
          <p className="text-center">Profit</p>
        </div>
      </div>
      <div className="bg-gray-800 h-3/5 py-4">
        <div>
          <h1 className="text-2xl pl-16">Assets</h1>
        </div>
        {
          data.map(stock => {
            return(
              <div className="mx-16 px-4 justify-between rounded-md shadow-md flex bg-black my-2">
          <div className="flex items-center">
          {stock.changesPercentage > 0 ? (
                          <ImArrowUpRight className="text-green-600 h-6 w-6" />
                        ) : (
                          <ImArrowDownLeft className="text-red-600 h-6 w-6" />
                        )}
          </div>
          <div>
            <p>{stock.name}</p>
            <p className="text-center">20 * 5000</p>
          </div>
          <div className={stock.changesPercentage >=0 ? 'text-green-700' : 'text-red-700'}>
            <p>{stock.changesPercentage}</p>
            <p>{stock.change}</p>
          </div>
        </div>
              )
          })
        }
      </div>
    </div>
  );
};

export default Asset;
