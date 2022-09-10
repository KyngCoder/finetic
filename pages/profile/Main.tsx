import React from "react";
import { LineGraph } from "../../components/graphs/LineGraph";
import Gainers from "./Gainers";
import MyStock from "./MyStock";
import News from "./News";
import Watchlist from "./Watchlist";

const main = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="px-4 ">
          <LineGraph />
        </div>
        <div className="max-w-lg mt-4 mr-16">
          {" "}
          <News />
        </div>
      </div>
    
        <div>
          <Gainers />
        </div>
        <div>
          <MyStock />
        </div>

        <div className="mr-16">
        
          <Watchlist />
        </div>
      
    </>
  );
};

export default main;
