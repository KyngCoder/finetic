import React, { useEffect, useState } from "react";

import Image from "next/image"
import axios from "axios";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  const getNews = async() => {
    const news = await axios.get(`https://finnhub.io/api/v1/news?category=general&token=${process.env.NEXT_PUBLIC_FINHUB_SECRET}`)
    console.log(news)
    setNewsList(news.data[Math.floor(Math.random()*5)])
  }

  useEffect(() => {
    getNews()
  }, []);

  console.log(newsList);

  function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
      dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
      ampm = "AM",
      time;

    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }
    // yyyy + "-" + mm + "-" + dd + ", "
    // ie: 2013-02-18, 8:35 AM
    let day = yyyy + "-" + mm + "-" + dd ;
    time = h + ":" + min + " " + ampm;

    return [day, time];
  }

  return (
    <div className="bg-gray-700 rounded-md shadow-md   p-4 ">
      <div>
        <div className="flex justify-between text-2xl pb-4">
          <h1>News</h1>
          <p>{convertTimestamp(newsList?.datetime)[0]}</p>
        </div>
        <p className="text-lg font-bold font">{newsList?.headline}</p>
      </div>
      <div className="flex pt-4 ">
        <div className="w-full mr-4 ">
          <img src={newsList?.image} alt="pic of news" />
        </div>
        <div>
          <div className="flex space-x-2 text-sm">
            <p>{newsList?.source}</p>
            <p className="pb-4">{convertTimestamp(newsList?.datetime)[1]}</p>
          </div>
          <div>
            <p className="text-sm pb-4">{newsList?.summary?.slice(0, 50)}...</p>
            <a  href={newsList?.url}>
              <p className="bg-blue-700 rounded-md text-lg shadow-sm text-center py-2">View full story</p>
            </a>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default News;
