import React from "react";
import Button from "./Button";

const Starter = () => {
  return (
    <section className="px-8 md:px-4 lg:px-36 py-8">
      <div className="flex flex-col lg:flex-row">
        <div className="max-w-xl pr-16 mx-auto mb-10">
          <h5 className="mb-6 text-4xl font-extrabold leading-none">
            Grow Your Portfolio!
          </h5>
          <p className="mb-6 text-gray-300 text-lg">
            In under 5 minutes you could get your own investment account. Start
            investing today with only <b>$1</b>. Checking ways to earn more
            money, and grow your knowledge each day.
          </p>
          <div className="flex items-center">
            <Button text="Get Started" size="md" />
            <button className="ml-4  text-gray-900 bg-gray-100 border-0  px-4 focus:outline-none hover:bg-gray-200 rounded text-lg h-10 mb-1 grid items-center">
              Read More
            </button>
          </div>
        </div>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-green-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">Simple</h6>
            <p className="text-sm text-gray-300">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear. I didn't even know we were calling him Big
              Bear.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-green-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">Smart</h6>
            <p className="text-sm text-gray-300">
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea robin Antarctic cod. Yellow-and-black
              triplefin.
            </p>
          </div>
          <div className="max-w-md">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-green-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-2xl">Safe</h6>
            <p className="text-sm text-gray-300">
              A slice of heaven. O for awesome, this chocka full cuzzie is as
              rip-off as a cracker. Meanwhile, in behind the bicycle shed,
              Hercules.
            </p>
          </div>
          <div className="max-w-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Starter;
