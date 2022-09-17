import React, { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {finetic} from '../public/Finetic (1).png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";



const text: {
  id: number;
  text: string;
  role: string;
  name: string;
  profile: string;
}[] = [
  {
    id: 1,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "Emma",
    role: "Forbes",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "emma",
    role: "Forbes",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "emma",
    role: "Forbes",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "ksksk",
    role: "Forbes",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    text: " “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero adtempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpaaperiam dolorum, obcaecati corrupti aspernatur a.”",
    name: "Peter Parket",
    role: "Software Engineer",
    profile:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const Testimonal = () => {
  const [testimonals, setTestimonals] = useState(text);
  const [position, setPosition] = useState(2);

  const next = () => {
    setPosition((prev) => prev + 1);
  };

  return (
    <section className="bg-white back">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize xl:text-5xl lg:text-4xl dark:text-white">
          What our <span className="text-blue-500 ">clients</span> says
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

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
            {text?.map((info, id) => {
              return (
                <SwiperSlide key={`${info}${id}`}>
                  <div className="p-8 border rounded-lg dark:border-gray-700">
                    <p className="leading-loose text-gray-500 dark:text-gray-400">
                      {info.text}
                    </p>

                    <div className="flex items-center mt-8 -mx-2">
                       <img
                        className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                        src={finetic}
                        alt=""
                      /> 

                      <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">
                          {info.name}
                        </h1>
                        <span className="text-sm text-gray-500">
                          {info.role}
                        </span>
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

export default Testimonal;
