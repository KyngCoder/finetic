import React, { useState, useEffect } from "react";
import { Favourites } from "../../components/data/Data";
import Carousel from '../../components/Carousel'
import { UserProps } from "../../helpers/Types";

const Gainers = ({user}:UserProps) => {

  console.log('gainers',user)
 
  return (

    <div className="">
      <div>
            <h1 className="text-center text-2xl">{user[0].firstName} Cryptos</h1>
        </div>
      <Carousel data={user[0].crypto}  num1={1} num2={2} num3={3} />
    </div>
  );
};

export default Gainers;
