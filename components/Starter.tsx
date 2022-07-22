import React from "react";

const Starter = () => {
  return (
    <section className="lg:flex max-w-7xl xl:px-72">
      <div className="p-8 max-w-lg">
        <h1 className="text-2xl mb-4">Grow Your Portfolio!</h1>
        <p className="mb-4">
          In under 5 minutes you could get your own investment account. Start
          investing today with only $1.Checking, ways to earn more money, and
          grow your knowledge each day.
        </p>
        <p className="cursor-pointer">Learn More</p>
      </div>

      <div className="p-8 grid gap-4 grid-cols-2 ">
        <div className="shadow-lg bg-black p-4 rounded-md cursor-pointer borde">
            //icons
            <h2>Simple</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias excepturi laboriosam, harum consectetur nulla soluta consequuntur ratione eum dignissimos aperiam laborum qui reprehenderit porro itaque accusantium praesentium perspiciatis reiciendis!</p>
        </div>
        <div className="shadow-lg bg-black rounded-md cursor-pointer p-4">
            //icons
            <h2>Smart</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias excepturi laboriosam, harum consectetur nulla soluta consequuntur ratione eum dignissimos aperiam laborum qui reprehenderit porro itaque accusantium praesentium perspiciatis reiciendis!</p>
        </div>
        <div className="shadow-lg rounded-md cursor-pointer bg-black p-4">
            //icons
            <h2>Safe</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias excepturi laboriosam, harum consectetur nulla soluta consequuntur ratione eum dignissimos aperiam laborum qui reprehenderit porro itaque accusantium praesentium perspiciatis reiciendis!</p>
        </div>
      </div>
    </section>
  );
};

export default Starter;
