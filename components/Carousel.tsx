import React, { FC, useEffect, useState } from "react";
import { ImArrowUpRight, ImArrowDownLeft } from "react-icons/im";



import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import {Asset} from '../helpers/Types'

const Active:FC = ({data,num1,num2,num3}:{data:Asset, num1:number, num2:number, num3:number}) => {

  

  return (
    <section className="bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <Swiper
          spaceBetween={50}
          pagination={true}
          modules={[ Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          navigation={true}
          
          breakpoints={{
            0: {
              slidesPerView: num1,
              spaceBetween: 20,
            },
            620: {
              slidesPerView: num2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: num3,
              spaceBetween: 50,
            },
          }}
        >
          <section className="grid grid-cols-1 gap-4 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            {data?.map((stock, id: number) => {
              return (
                <SwiperSlide key={`${stock}${id}`}>
                  <div className="p-8 border bg-white rounded-lg dark:border-gray-700">
                    <div className="flex justify-between items-center px-2">
                      <p className="bg-black text-white rounded-full px-2">
                        {stock?.name?.slice(0,15)}
                      </p>
                      <div className="text-black pt-2">
                        <p>{stock.symbol}</p>
              
                      </div>
                    </div>
                    <div className="text-black flex pt-4 justify-between items-center px-2">
                      <div>
                        <p>Price</p>
                        <p>{stock?.price}</p>
                      </div>
                      <div>
                        {stock?.profitPercentage > 0 ? (
                          <ImArrowUpRight className="text-green-600 h-6 w-6" />
                        ) : (
                          <ImArrowDownLeft className="text-red-600 h-6 w-6" />
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </section>
        </Swiper>
      </div>
    </section>
  );
};

export default Active;
