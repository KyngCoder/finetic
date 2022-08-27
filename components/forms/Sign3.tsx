import React, { FC, ChangeEvent } from "react";
import { useAuth } from "../../context/UserData";

export const Sign3: FC = () => {
  const {
    addressLineOne,
    setAddressLineOne,
    addressLineTwo,
    setAddressLineTwo,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
    country,
    setCountry,
    telephone,
    setTelephone,
  } = useAuth();

  return (
    <div className=" p-8">
      <div>
        <h2 className="mb-4 text-2xl font-bold color">Contact and Address</h2>
      </div>

      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6  sm:rounded-md">
          <label className="block mb-6">
            <span className="text-gray-700">Address line 1</span>
            <input
              name="address1"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={addressLineOne}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setAddressLineOne(e.target.value)}
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Address line 2</span>
            <input
              name="address2"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={addressLineTwo}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setAddressLineTwo(e.target.value)}
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">City</span>
            <input
              name="city"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={city}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setCity(e.target.value)}
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">State/Province</span>
            <input
              name="state"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={state}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setState(e.target.value)}
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Zip/Postal code</span>
            <input
              name="zip"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={zipCode}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setZipCode(+(e.target.value))}
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Country</span>
            <input
              name="country"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={country}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setCountry(e.target.value)}
              placeholder=""
            />
          </label>
          <label className="block mb-6">
            <span className="text-gray-700">Telephone</span>
            <input
              name="telephone"
              type="text"
              className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
          value={telephone}
          onChange={(e:ChangeEvent<HTMLInputElement>)=>setTelephone(e.target.value)}
              placeholder=""
            />
          </label>
        </div>
      </div>
    </div>
  );
};
