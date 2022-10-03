import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import LineGraph from "../../components/graphs/LineGraph";

import Gainers from "./Gainers";
import MyStock from "./MyStock";
import News from "./News";
import {User} from '../../helpers/Types'
import CryptoWatchList from "./CryptoWatchList";
import StockWatchList from "./StockWatchList";


const Main: FC = () => {
  const [user, setUser] = useState<User>([]);

  const getUser = async (searchEmail: string) => {
    const u = await axios.get(
      `http://localhost:3000/api/getUser?email=${searchEmail}`
    );
    const data = u.data.data;
    setUser(data);
  };

  useEffect(() => {
    const email= JSON.parse(localStorage.getItem("userInfo") || "{}");
    const searchEmail = email.user.email;
    getUser(searchEmail);
  }, []);

  console.log(user);
  return (
    <>
      <div className=" block lg:flex justify-between">
        <div className="px-4 ">
          <LineGraph />
        </div>
        <div className="max-w-lg md:w-md mt-4 mr-16"> <News /></div>
      </div>

      <div>
        <Gainers user={user} />
      </div>
      <div>
        <MyStock user={user} />
      </div>

      <div className="mr-16">
        <CryptoWatchList user={user} />
      </div>
      <div className="mr-16">
        <StockWatchList user={user} />
      </div>
    </>
  );
};

export default Main;
