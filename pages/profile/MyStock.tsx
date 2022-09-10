import React, { useEffect, useState } from 'react'
import { myStocks } from '../../components/data/Data'
import Carousel from '../../components/Carousel'

const MyStock = () => {
    const [myStock,setMyStock] = useState<any>([])

    useEffect(() =>{
setMyStock(myStocks)
    },[])
  return (
    <div>
        <div>
            <h1 className="text-center text-2xl">My Stocks</h1>
        </div>
        <Carousel data={myStock} num1={1} num2={2} num3={3} />
    </div>
  )
}

export default MyStock