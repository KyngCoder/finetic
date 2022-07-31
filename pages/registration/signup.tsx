import React, { useState, useEffect } from "react";

import axios from 'axios'
import { SignOne } from "../../components/forms/SignOne.tsx"

const signup = () => {
  

  //get location

  // axios.get('https://api.ipregistry.co/?key=tryout')
  //  .then((response:any) => {
  //     return response.json()
  //  })
  //   .then((payload:any) => {
  //       console.log(payload.location.country.name);
  //   });

  return (
    <div className="back h-screen w-screen overflow-hidden">
      <div className="pt-8 space-x-5 justify-center flex">
        <div className=" border-green-500 border-4 h-4 w-4 rounded-full"></div>
        <div className=" border-green-500 border-4 h-4 w-4 rounded-full"></div>
        <div className=" border-green-500 border-4 h-4 w-4 rounded-full"></div>
        <div className=" border-green-500 border-4 h-4 w-4 rounded-full"></div>
        <div className=" border-green-500 border-4 h-4 w-4 rounded-full"></div>
      </div>

     
      
      <SignOne />

      <div className="back color mt-8 flex justify-between">
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default signup;
