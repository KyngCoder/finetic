import React, { useState,  } from "react";

export const SignOne = () => {
  const [country, setCountry] = useState("");
  // function to get user ip address

  return (
    <div className="color back">
      <h2>Lets Get Started</h2>
    <p>
    Before we get started, we would love to get some essential information
    </p>

<label htmlFor="Country">Country of Residence</label>
      <input
        type="text"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        placeholder="enter your country"
      />

      <p>Are you a citizen or tax resident in another country?</p>

      <div className="flex items-center">

      <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>

    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
</div>

<div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          id="terms"
          type="checkbox"
          value=""
          className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          required={true}
        />
      </div>
      <label
        htmlFor="terms"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        I hereby confirm that have I read and understood the following: 
        <a
          href="#"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          terms and conditions
        </a>
      </label>
    </div>

    </div>
  );
};
