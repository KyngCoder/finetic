import Image from "next/image";
import React, { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from "react";
import ID from "../../public/ID.png";
import pass from "../../public/pass.png";
import driver from "../../public/driver.png";
import later from "../../public/later.png";
import { useAuth } from "../../context/UserData";
import ImageUploading from "react-images-uploading";

export const Sign5:FC = () => {

 
  const maxNumber = 69;
 
  const {imageProof,setImageProof} = useAuth()

  const onChange = (imageList:any, addUpdateIndex:any) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImageProof(imageList);
  };

 console.log(imageProof)

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
            <ImageUploading
        multiple={false}
        value={imageProof}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg","png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button className="ml-2" onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
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
