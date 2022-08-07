import React, { useState, useEffect } from "react";
import Stepper from "react-stepper-js";
import "react-stepper-js/dist/index.css";
import Link from "next/link";

import { useRouter } from "next/router";
import Sign1 from "../../components/forms/Sign1";
import Sign2 from "../../components/forms/Sign2";
import { Sign3 } from "../../components/forms/Sign3";
import Sign4 from "../../components/forms/Sign4";

const signup = () => {
  const [step, setStep] = useState(1);

  const router = useRouter();

  //get location

  // axios.get('https://api.ipregistry.co/?key=tryout')
  //  .then((response:any) => {
  //     return response.json()
  //  })
  //   .then((payload:any) => {
  //       console.log(payload.location.country.name);
  //   });

  const nextForm = () => {
    if (step < 4) {
      setStep((step) => step + 1);
    }
  };

  const previousForm = () => {
    if (step > 1) setStep((step) => step - 1);
  };

  return (
    <div
      className=" flex h-screen w-screen justify-center my-8
    overflow-x-hidden  back"
    >
      <div className="  rounded-md shadow-md">
        <div className="App my-4">
          <Stepper
            color="#23b561"
            fontSize="20px"
            fontColor="#18aed6"
            steps={[
              { label: "step 1" },
              { label: "step 2" },
              { label: "step 3" },
              { label: "step 4" },
            ]}
            currentStep={step}
          />
        </div>

        <div>
          <Sign4 />
        </div>

        <div className=" w-full color mt-8 flex justify-center space-x-10 back pb-4">
          <button
            className="bg-green-500 rounded-sm p-2 text-md cursor-pointer"
            onClick={previousForm}
          >
            Back
          </button>

          <button
            className="bg-green-500 rounded-sm p-2 text-md cursor-pointer"
            onClick={nextForm}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default signup;
