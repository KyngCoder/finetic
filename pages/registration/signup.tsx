import React, { useState, useEffect } from "react";
import { Step, Stepper } from "react-form-stepper";
import { useRouter } from "next/router";
import Sign1 from "../../components/forms/Sign1";
import Sign2 from "../../components/forms/Sign2";
import { Sign3 } from "../../components/forms/Sign3";
import Sign4 from "../../components/forms/Sign4";
import { Sign5 } from "../../components/forms/Sign5";
import { useAuth } from "../../context/UserData";
import axios from "axios";

const signup = () => {
  const [step, setStep] = useState(0);


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
    proofType,
    imageProof,
  } = useAuth();

  const nextForm = async () => {
    if (step < 5) {
      setStep((step) => step + 1);
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
        proofType,
        imageProof,
      });
      console.log(data)
      localStorage.setItem("userInfo", JSON.stringify(data));
      router.push("/");
    }
  };

  const previousForm = () => {
    if (step > 1) setStep((step) => step - 1);
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
        <div className="App my-4">
          <Stepper activeStep={step}  connectorStateColors  >
            <Step label="Children Step 1"  />
            <Step label="Children Step 2" />
            <Step label="Children Step 3" />
            <Step label="Children Step 4" />
            <Step label="Children Step 5"  />
          </Stepper>
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

export default signup;
