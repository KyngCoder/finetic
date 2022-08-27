import React, { useState } from "react";
import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import image from "../public/Finetic (1).png";

const text: {
  id: number;
  text: string;
  company: string;
}[] = [
  {
    id: 1,
    text: "Investing is now made for everyone",
    company: "Forbes",
  },
  {
    id: 2,
    text: "lorem ipsum",
    company: "Forbes",
  },
  {
    id: 3,
    text: "lorem ipsum",
    company: "Forbes",
  },
  {
    id: 4,
    text: "lorem ipsum",
    company: "Forbes",
  },
  {
    id: 5,
    text: "lorem ipsum",
    company: "Forbes",
  },
];

const Testimonal = () => {
  const [testimonals, setTestimonals] = useState(text);
  const [position, setPosition] = useState(2);

  const next = () => {
    setPosition((prev) => prev + 1);
  };

  return (
    <section className="mt-16 p-8  max-w-7xl xl:px-72 ">
         <div>
            <h1 className="text-4xl mb-8">See what Others have to say</h1>
          </div>
      <Swiper
        spaceBetween={50}
        pagination={true} 
        modules={[Autoplay,Pagination, Navigation]}
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        
      >
         
          <div className="flex justify-between ">
            
            <div className="flex ">
              {text?.map((info, id) => {
                return (
                    <SwiperSlide key={`${info}${id}`}>

                  <div className="shadow-lg bg-black p-4 mx-2">
                    <p className="mb-4">{info.text}</p>
                    <p className="text-green-600 text-center">{info.company}</p>
                  </div>
                  </SwiperSlide>
                );
              })}
            </div>
           
          </div>
        
        
      </Swiper>
    </section>
  );
};

export default Testimonal;
