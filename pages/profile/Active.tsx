import React,{useEffect,useState} from 'react'
import {ImArrowUpRight,ImArrowDownLeft} from 'react-icons/im'
import { actives } from '../../components/data/Data'

const Active = () => {

    const [active,setActive] = useState<any>([])

    useEffect(()=>{
        setActive(actives)
    })

  return (
    <div className="flex space-x-5 p-4">
        {active.map(stock => {
            return(
                <div className="bg-gray-900">
  <div className="bg-white p-2 rounded-md max-w-sm">
  <div className="flex justify-between items-center px-2">
    <p className="bg-black text-white rounded-full px-2">{stock.name}</p>
    <div className="text-black pt-2">
      <p>{stock.symbol}</p>
      <p>{stock.changesPercentage > 0 ? + stock.changesPercentage : - stock.changesPercentage
        }</p>
    </div>
  </div>
  <div className="text-black flex pt-4 justify-between items-center px-2">
    <div>
      <p>Portfolio</p>
      <p>{stock.price}</p>
    </div>
    <div>
     {
        stock.changesPercentage > 0 ?
        <ImArrowUpRight className="text-green-600 h-6 w-6" />
        :
        <ImArrowDownLeft className="text-red-600 h-6 w-6" />
     }
    </div>
  </div>
  </div>
</div>
            )
        })}
    </div>
  )
}

export default Active