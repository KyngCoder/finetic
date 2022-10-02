import React, { useEffect, useState } from "react";
import { ImArrowUpRight, ImArrowDownLeft } from "react-icons/im";
import { actives } from "../../components/data/Data";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";

type Active = {
  "symbol": string,
    "name": string,
    "change": number,
    "price": number,
    "changesPercentage": number
}[]

const Active = () => {
  const [active, setActive] = useState<Active>([]);

  const getActives = async() => {
    const actives = await axios.get(`https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${process.env.NEXT_PUBLIC_FINANCE_SECRET}`)
    setActive(actives.data);
  }

  useEffect(() => {
   getActives()
  },[]);

  return (
    <section className="bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <Swiper
          spaceBetween={50}
          pagination={true}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          navigation={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            {active?.map((stock, id: number) => {
              return (
                <SwiperSlide key={`${stock}${id}`}>
                  <div className="p-8 border bg-white rounded-lg dark:border-gray-700">
                    <div className="flex justify-between items-center px-2">
                      <p className="bg-black text-white rounded-full px-2">
                        {stock.name}
                      </p>
                      <div className="text-black pt-2">
                        <p>{stock.symbol}</p>
                        <p>{stock.changesPercentage}</p>
                      </div>
                    </div>
                    <div className="text-black flex pt-4 justify-between items-center px-2">
                      <div>
                        <p>Portfolio</p>
                        <p>{stock.price}</p>
                      </div>
                      <div>
                        {stock.changesPercentage > 0 ? (
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
