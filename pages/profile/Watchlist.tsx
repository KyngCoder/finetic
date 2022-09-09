
import React, { useEffect, useState } from 'react'
import { watchList } from '../../components/data/Data'
import { ImArrowUpRight, ImArrowDownLeft } from "react-icons/im";


const Watchlist = () => {

    const [watch,setWatch] = useState<any>([])

    useEffect(() =>{
setWatch(watchList)
    },[])

  return (
    <div>
    <div>
        <h1 className="text-center text-2xl">My Stocks</h1>
    </div>
    {
        watch.map((stock:any,id:any) => {
            return(
                <div className="flex my-3 space-x-4" key={`${stock} ${id}`}>
        <div className="">
            <p>{stock.symbol}</p>
            <p>{Math.floor(Math.random()*10)} shares</p>
        </div>
        <div>
        {stock.changesPercentage > 0 ? (
                      <ImArrowUpRight className="text-green-600 h-6 w-6" />
                    ) : (
                      <ImArrowDownLeft className="text-red-600 h-6 w-6" />
                    )}
        </div>
        <div>
<p>{stock.price}</p>
        </div>
    </div>
                )
        })
    }
</div>
  )
}

export default Watchlist