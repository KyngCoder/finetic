import React, { useState, useEffect, FC } from "react";
import { Favourites } from "../../components/data/Data";
import Carousel from '../../components/Carousel'
import { UserProps } from "../../helpers/Types";

const Gainers:FC<UserProps> = ({person}) => {

  
 
  return (

    <div className="">
      <div>
            <h1 className="text-center text-2xl">{person[0]?.firstName} Cryptos</h1>
        </div>
        {person[0]?.crypto?
        <Carousel data={person[0]?.crypto} num1={1} num2={2} num3={3} />
        :
        <p className="text-4xl text-center py-4 text-gray-600">No Crypto as yet</p>
        }
    </div>
  );
};

export default Gainers;
