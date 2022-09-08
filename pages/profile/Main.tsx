import React from 'react'
import { LineGraph } from '../../components/graphs/LineGraph'
import Gainers from './Gainers'
import News from './News'

const main = () => {
  return (
    <div className="grid grid-cols-2">
        <LineGraph />
        <Gainers />
        <News />
        
       
    </div>
  )
}

export default main