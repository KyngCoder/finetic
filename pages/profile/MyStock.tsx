import React, { useEffect, useState } from 'react'
import { UserProps } from "../../helpers/Types";
import Carousel from '../../components/Carousel'

const MyStock = ({person}:UserProps) => {
  
  

  return (
    <div>
        <div>
            <h1 className="text-center text-2xl">My Stocks</h1>
        </div>
        {person[0]?.stocks?
        <Carousel data={person[0]?.stocks} num1={1} num2={2} num3={3} />
        :
        <p className="text-4xl text-center py-4 text-gray-600">No stocks as yet</p>
        }
        
    </div>
  )
}

export default MyStock