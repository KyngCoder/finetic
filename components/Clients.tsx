import Image from "next/image";
import React from "react";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className="flex justify-center items-center my-4 px-16">
      <div className="flex justify-center items-center flex-wrap w-full">
       {clients.map(client => {
        return(
            <div className="flex-1 flex justify-center items-center max-w-lg m-5">
            <Image
              src={client.logo}
              alt="client_logo"
            />
          </div>
          )
       })}
      </div>
    </section>
  );
};

export default Clients;
