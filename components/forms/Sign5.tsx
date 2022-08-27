import Image from "next/image";
import React, { ChangeEvent, FC, SyntheticEvent } from "react";
import ID from "../../public/ID.png";
import pass from "../../public/pass.png";
import driver from "../../public/driver.png";
import later from "../../public/later.png";
import { useAuth } from "../../context/UserData";

export const Sign5:FC = () => {

  const {imageProof,setImageProof} = useAuth()

  const handleImage = (e:ChangeEvent<HTMLInputElement>) => {
    alert()
   const file = e.target.files 
   if(file){
    setImageProof(file[0])
   }else{
    setImageProof(undefined)
   }
   console.log(file,'file')
  }

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
              <Image src={pass} />
            </div>
            <div className="flex items-center cursor-pointer">
              <input id="passport" type="file" placeholder="passport" className="rounded-md cursor-pointer" value={imageProof} onChange={handleImage} />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="ID" className="mx-4 text-lg font-medium">National ID (back and front)</label>
          <div className="shadow-md back mb-2 rounded-md w-4/5 h-1/4 mx-4 flex space-x-2 cursor-pointer text-lg">
          <div className="flex items-center">
              <Image src={ID} />
            </div>
            <div className="flex items-center cursor-pointer">
              <input id="ID" type="file" placeholder="passport" className="rounded-md cursor-pointer"/>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="drivers" className="mx-4 text-lg font-medium">Driver's License (back and front)</label>
          <div className="shadow-md back mb-2 rounded-md w-4/5 h-1/4 mx-4 flex space-x-2 cursor-pointer text-lg">
          <div className="flex items-center">
              <Image src={driver} />
            </div>
            <div className="flex items-center cursor-pointer">
              <input id="drivers" type="file" placeholder="passport" className="rounded-md cursor-pointer" onChange={handleImage}/>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="later" className="mx-4 text-lg font-medium">Upload later</label>
          <div className="shadow-md back mb-2 rounded-md w-4/5 h-1/4 mx-4 flex space-x-2 cursor-pointer text-lg">
          <div className="flex items-center">
              <Image src={later} />
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
