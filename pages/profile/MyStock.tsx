import React, { useEffect, useState } from 'react'
import { UserProps } from "../../helpers/Types";
import Carousel from '../../components/Carousel'

const MyStock = ({user}:UserProps) => {
  
  

  return (
    <div>
        <div>
            <h1 className="text-center text-2xl">My Stocks</h1>
        </div>
        <Carousel data={user[0]?.stocks} num1={1} num2={2} num3={3} />
    </div>
  )
}

export default MyStock