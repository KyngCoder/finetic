import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import axios from "axios";
import convertTimestamp from '../../helpers//ConvertTime'

interface NewsType {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related?: string;
  source: string;
  summary: string;
  url: string;
}

//  export const getStaticProps: GetStaticProps = async() => {

//   const res = await axios.get('https://finnhub.io/api/v1/news?category={category}&token=cbasedqad3i91bfqbkf0')
//   const data = await res.data
//  { props: { data } }
//   return {
//     props: {
//       data,
//     },
//   }
//  }

const NewsFeed: FC<NewsType> = ({ data }) => {
  const [position,setPosition] = useState(15)
console.log(data)
  
  const handleNews = () => {
   setPosition(position => position + 15)
  }

  return (
    <div className="bg-gray-900 text-white h-full ">
      <div>
        <h1 className="text-center py-4 text-2xl"> Today's News</h1>
      </div>

      <div className="flex justify-evenly">
        <div>
          <input
            className="py-2 px-0 w-full text-sm bg-transparent border-b-2 border-gray-300  dark:border-gray-600  focus:outline-none  focus:border-blue-600 peer"
            placeholder="search..."
          />
        </div>
        <div className="flex space-x-2 py-2 cursor-pointer">
          <p>General</p>
          <p>Stocks</p>
          <p>Crypto</p>
          <p>Forex</p>
          <p>Merger</p>
          <p>Company News</p>
          <p>Press Release</p>
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center md:grid-cols-3  lg:grid-cols-5">
        {data?.slice(0,position).map((info) => {
          return (
            <a href={info.url} target="_self"  >
            <div key={info.datetime + info.id} className="m-4 max-w-md cursor-pointer ">
              <div className="relative">
                {" "}
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
              <div >
                {info.headline}
              </div>
            </div>
            </a>
          );
        })}
      </div>
     <div className="flex justify-center items-center">
     <button onClick={handleNews} className="p-2 bg-green-500 mb-4 rounded-md">Load more</button>
     </div>
    </div>
  );
};

export default NewsFeed;
