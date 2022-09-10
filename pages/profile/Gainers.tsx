import React, { useState, useEffect } from "react";
import { Favourites } from "../../components/data/Data.js";
import Carousel from '../../components/Carousel'

const Gainers = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(Favourites);
  }, []);

  return (

    <div className="">
      <div>
            <h1 className="text-center text-2xl">Top Gainers</h1>
        </div>
      <Carousel data={favourites} num1={1} num2={2} num3={3} />
    </div>
  );
};

export default Gainers;
