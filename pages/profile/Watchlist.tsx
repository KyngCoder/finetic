
import React, { useEffect, useState } from 'react'
import { watchList } from '../../components/data/Data'
import Carousel from '../../components/Carousel'


const Watchlist = () => {

    const [watch,setWatch] = useState<any>([])

    useEffect(() =>{
setWatch(watchList)
    },[])

  return (
    <div>
    <div>
        <h1 className="text-center text-2xl">Your watch list</h1>
    </div>
    <Carousel data={watch} num1={1} num2={2} num3={3} />
</div>
  )
}

export default Watchlist