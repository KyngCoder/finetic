import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sign1 from "../../components/forms/Sign1";
import Sign2 from "../../components/forms/Sign2";
import { Sign3 } from "../../components/forms/Sign3";
import Sign4 from "../../components/forms/Sign4";
import { Sign5 } from "../../components/forms/Sign5";
import { useAuth } from "../../context/UserData";
import axios from "axios";

const SignUp = () => {
  const [step, setStep] = useState(0);
  const [size,setSize] = useState(0)

  const router = useRouter();

  const {
    firstName,
    lastName,
    country,
    addressLineOne,
    addressLineTwo,
    city,
    state,
    zipCode,
    telephone,
    email,
    password,
    DOB,
    residence,
    employmentStatus,
    sourceOfFunds,
    annualIncome,
    passportProof,
    idProof,
    driverProof
  } = useAuth();

  console.log(passportProof)

  const nextForm = async () => {
    if (step < 5 || size < 100) {
      setStep((step) => step + 1);
      setSize((size) => size + 20)
    }
    if (step === 5) {
      const {data} = await axios.post("http://localhost:3000/api/signup", {
        firstName,
        lastName,
        country,
        addressLineOne,
        addressLineTwo,
        city,
        state,
        zipCode,
        telephone,
        email,
        password,
        DOB,
        residence,
        employmentStatus,
        sourceOfFunds,
        annualIncome,
        idProof,
        driverProof,
        passportProof
      });
      console.log(data)
      localStorage.setItem("userInfo", JSON.stringify(data));
      router.push("/");
    }
  };

  const previousForm = () => {
    if (step > 1 || size > 0){
    setStep((step) => step - 1);
    setSize(size => size - 20)
    }
  };

  const displayPage = () => {
    if (step === 0) return <Sign1 />;
    else if (step === 1) return <Sign2 />;
    else if (step === 2) return <Sign3 />;
    else if (step === 3) return <Sign4 />;
    else if (step === 4) return <Sign5 />;
  };

  return (
    <div
      className="flex h-screen w-screen justify-center py-8
    overflow-x-hidden  back"
    >
      <div className="  rounded-md shadow-md">
       

        
  <div className={`${size>100? 'hidden': 'w-full  bg-gray-200 rounded-full dark:bg-gray-700'}`}>
    <div className={`${size < 1? 'bg-gray-200' : 'bg-green-600 h-8 text-xs font-medium text-blue-100 flex justify-center items-center p-0.5 leading-none rounded-full' }`} style={{width:`${size}%`}} > {size}%</div>
  </div>


        <div>{displayPage()}</div>

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
            {step === 5 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
