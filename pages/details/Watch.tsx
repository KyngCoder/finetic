import axios from 'axios';
import { userAgent } from 'next/server';
import React, { ChangeEvent, useEffect, useState } from 'react'

const Watch = ({data}) => {


    

    const [user, setUser] = useState([]);

    const email = JSON.parse(localStorage.getItem("userInfo"));
    const searchEmail = email.user.email;
  
    const getUser = async () => {
      const u = await axios.get(
        `http://localhost:3000/api/getUser?email=${searchEmail}`
      );
      const data = u.data.data[0];
      setUser(data);
    };
  
    useEffect(() => {
      getUser();
    }, []);


  

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

  return (
    <div className=" flex flex-col  ">
    <button
      className="bg-yellow-500 text-black text-lg font-bold p-2  rounded-md cursor-pointer outline-none border-none"
      onClick={updateCrypto}
    >
      Add to WatchList
    </button>
  </div>
  )
}

export default Watch