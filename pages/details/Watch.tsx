import axios from 'axios';

import React, { ChangeEvent, useEffect, useState } from 'react'

const Watch = ({data,type}) => {


    

    const [user, setUser] = useState([]);

    const email = JSON.parse(localStorage.getItem("userInfo"));
    const searchEmail = email.user.email;
  
   
  
    useEffect(() => {
      const getUser = async () => {
        const u = await axios.get(
          `http://localhost:3000/api/getUser?email=${searchEmail}`
        );
        const data = u.data.data[0];
        setUser(data);
      };
      getUser();
    }, [searchEmail]);


  

      const updateCrypto = async () => {
        await axios.put("/api/createWatch", {
          _id: user._id,
          cryptoWatchList: {
            id: data.id,
            symbol: data.symbol,
            name: data.name,
          },
        });
      };

      const updateStock = async () => {
        await axios.put("/api/updateStock", {
          _id: user._id,
          stockWatchList: {
            symbol: data[0].symbol,
            name: data[0].companyName,
          },
        });
      };

  return (
    <div className=" flex flex-col  ">
    <button
      className="bg-yellow-500 text-black text-lg font-bold p-2  rounded-md cursor-pointer outline-none border-none"
      onClick={
        type === 'cryptoWatchList' ? updateCrypto : updateStock
      }
    >
      Add to WatchList
    </button>
  </div>
  )
}

export default Watch