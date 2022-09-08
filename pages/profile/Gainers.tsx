import React, { useState, useEffect } from "react";
import { Favourites } from "../../components/data/Data.js";

const Gainers = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(Favourites);
  }, []);

  return (
    <div>
        <h2 className="text-2xl px-4 mb-4">Top Gainers</h2>
      {Favourites.map((top) => {
        return (
          <div className="bg-black rounded-full w-fit m-2 flex space-x-5 px-4">
            <p>{top.symbol}</p>
            <p>+{top.changesPercentage}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Gainers;
