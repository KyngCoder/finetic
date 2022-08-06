import React from "react";

export const Sign3 = () => {
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
              placeholder=""
            />
          </label>
        </div>
      </div>
    </div>
  );
};
