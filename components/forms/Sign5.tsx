import Image from "next/image";
import React, { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from "react";
import ID from "../../public/ID.png";
import pass from "../../public/pass.png";
import driver from "../../public/driver.png";
import later from "../../public/later.png";
import { useAuth } from "../../context/UserData";
import ImageUpload from "../../helpers/ImageUpload";


export const Sign5:FC = () => {

 
  
 
  const {idProof,setIdProof,passportProof,setPassportProof,driverProof,setDriverProof} = useAuth()

console.log(passportProof)
  return (
    <section className="p-8 text-white">
      <div>
        <h1 className="text-4xl font-bold mb-4">Verify Identity</h1>
        <p className="mb-4 text-lg">
          To complete your application, please provide{" "}
          <b>one(1)</b> of the following documents for proof of identity.
        </p>
      </div>

      <div className="shadow-md rounded-md p-4 bg-gray-800">
        <div>
          <label htmlFor="passport" className="mx-4 text-lg font-medium">Passport</label>
          <div className="shadow-md back mb-2 rounded-md w-4/5 h-1/4 mx-4 flex space-x-2 cursor-pointer text-lg">
            <div className="flex items-center">
              <Image src={pass} alt="" />
            </div>
            <div className="flex items-center cursor-pointer">
            <ImageUpload onChange={(imageList:any) => setPassportProof(imageList)} imageProof={passportProof} />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="ID" className="mx-4 text-lg font-medium">National ID (back and front)</label>
          <div className="shadow-md back mb-2 rounded-md w-4/5 h-1/4 mx-4 flex space-x-2 cursor-pointer text-lg">
          <div className="flex items-center">
              <Image src={ID} alt="" />
            </div>
            <div className="flex items-center cursor-pointer">
            <ImageUpload onChange={(imageList:any) => setIdProof(imageList)} imageProof={idProof} />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="drivers" className="mx-4 text-lg font-medium">Drivers License (back and front)</label>
          <div className="shadow-md back mb-2 rounded-md w-4/5 h-1/4 mx-4 flex space-x-2 cursor-pointer text-lg">
          <div className="flex items-center">
              <Image src={driver} alt=""/>
            </div>
            <div className="flex items-center cursor-pointer">
            <ImageUpload onChange={(imageList:any) => setDriverProof(imageList)} imageProof={driverProof} />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="later" className="mx-4 text-lg font-medium">Upload later</label>
          <div className="shadow-md back mb-2 rounded-md w-4/5 h-1/4 mx-4 flex space-x-2 cursor-pointer text-lg">
          <div className="flex items-center">
              <Image src={later} alt="" />
            </div>
            <div className="flex items-center cursor-pointer">
             <p>Upload Later</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
