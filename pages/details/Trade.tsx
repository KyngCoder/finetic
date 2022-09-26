import axios from 'axios';
import { userAgent } from 'next/server';
import React, { ChangeEvent, useEffect, useState } from 'react'

const Trade = ({data}) => {

    const [amount, setAmount] = useState("1");
    const [total, setTotal] = useState<number>(1);
    

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

    useEffect(() => {
        if (amount === "") setTotal(0);
        else setTotal(data?.market_data?.current_price.usd * parseInt(amount));
      }, [amount]);

      const updateCrypto = async () => {
        await axios.put("/api/updateCrypto", {
          _id: user._id,
          crypto: {
            id: data.id,
            symbol: data.symbol,
            name: data.name,
            image: data?.image?.thumb,
            current_price: data?.market_data?.current_price.usd,
            amount: amount,
            total: total,
            profit: 0,
            profitPercentage: 0,
          },
        });
      };

  return (
    <div className=" flex flex-col  ">
    <input
      type="text"
      className="mb-2 border-2 outline-none rounded-md border-blue-500 bg-gray-900 p-2"
      disabled={true}
      value={` $${total}  USD`}
      placeholder="total"
    />

    <input
      type="text"
      className="mb-2 border-2 outline-none rounded-md border-blue-500 bg-gray-900 p-2"
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setAmount(e.target.value)
      }
      value={amount}
      placeholder="amount"
    />

    <input
      type="text"
      className="mb-2 border-2 outline-none rounded-md border-blue-500 bg-gray-900 p-2"
      disabled={true}
      value={`$${data?.market_data?.current_price.usd}  USD`}
      placeholder="price"
    />

    <input
      type="text"
      className="mb-2 border-2 outline-none rounded-md border-blue-500 bg-gray-900 p-2"
      placeholder="credit card details"
    />

    <button
      className="bg-green-700 p-2  rounded-md cursor-pointer outline-none border-none"
      onClick={updateCrypto}
    >
      Buy
    </button>
  </div>
  )
}

export default Trade