import React, { FC, useEffect, useState } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import axios from 'axios'


  

interface NewsType{
category:string,
datetime:number,
headline:string,
id:number,
image:string,
related?:string,
source:string,
summary:string,
url:string,
 }




 export const getStaticProps: GetStaticProps = async() => {


 

 
 
  const res = await axios.get('https://finnhub.io/api/v1/news?category={category}&token=cbasedqad3i91bfqbkf0')
  const data = await res.data
console.log(data)
 { props: { data } }
  return {
    props: {
      data,
    },
  }
 }



const NewsFeed:FC<NewsType> = ({data}) => {
console.log(data)
  
    

  return (
    <div>
      <div>
        <h1> Today's News</h1>
      </div>

      <div className="flex">
        <div>
          <input type="text" placeholder="search..." />
          </div>
          <div className="flex">
            <p>General</p>
            <p>Stocks</p>
            <p>Crypto</p>
            <p>Forex</p>
            <p>Merger</p>
            <p>Company News</p>
            <p>Press Release</p>
          
        </div>
      </div>

      <div></div>
      
    </div>
  );
};

export default NewsFeed;
