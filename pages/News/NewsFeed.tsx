import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import convertTimestamp from "../../helpers//ConvertTime";





const NewsFeed: FC = () => {
  const [position, setPosition] = useState(15);
  const [category, setCategory] = useState("forex");
  const [data, setData] = useState([{
    category: '',
    datetime: 0,
    headline: '',
    id: 0,
    image: '',
    source: '',
    summary: '',
    url: '',
  }]);



  useEffect(() => {
  const getNews = async () => {
    const res = await axios.get(
      `https://finnhub.io/api/v1/news?category=${category}&token=${process.env.NEXT_PUBLIC_FINHUB_SECRET}`
    );
    const newsData = await res.data;
    setData(newsData)
  };
    getNews();
  }, [category]);


  const handleNews = () => {
    setPosition((position) => position + 15);
  };

  return (
    <div className="bg-gray-900 text-white h-full ">
      <Link href="/"><h2 className="px-8 pt-4 text-lg cursor-pointer font-bold">Finetic</h2></Link>
      <div>
        <h1 className="text-center text-green-600 font-bold  text-2xl"> Todays News</h1>
      </div>

      <div className="flex justify-evenly">
        <div>
          <input
            className="py-2 px-0 w-full text-sm bg-transparent border-b-2 border-gray-300  dark:border-gray-600  focus:outline-none  focus:border-blue-600 peer"
            placeholder="search..."
          />
        </div>
        <div className="flex space-x-2 py-2 cursor-pointer">
          <p onClick={() => setCategory("general")}>General</p>
          <p onClick={() => setCategory("stocks")}>Stocks</p>
          <p onClick={() => setCategory("crypto")}>Crypto</p>
          <p onClick={() => setCategory("forex")}>Forex</p>
          <p onClick={() => setCategory("merger")}>Merger</p>
          <p onClick={() => setCategory("companyNews")}>Company News</p>
          <p onClick={() => setCategory("press")}>Press Release</p>
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center md:grid-cols-3  lg:grid-cols-5">
        {data?.slice(0, position).map((info:NewsType) => {
          return (
            <a key={info.datetime + info.id} href={info.url} target="_self">
              <div className="m-4 max-w-md cursor-pointer ">
                <div className="relative">
                  <img
                    className="w-full h-full object-cover rounded-xl"
                    src={info.image}
                    alt=""
                  />
                  <div
                    className="bg-gradient-to-br from-pink-600 uppercase to-red-700
      absolute font-bold text-xs top-2 right-2 px-2 py-1 rounded"
                  >
                    {info.category}
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <p>{convertTimestamp(info.datetime)[0]}</p>
                  <p>{info.source}</p>
                </div>
                <div>{info.headline}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleNews}
          className="p-2 bg-green-500 mb-4 rounded-md"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;
