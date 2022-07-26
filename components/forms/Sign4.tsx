import React, { ChangeEvent, FC, useState } from "react";
import { useAuth } from "../../context/UserData";

const Sign4:FC = () => {

const {employmentStatus,setEmploymentStatus,annualIncome,setAnnualIncome,sourceOfFunds,setSourceOfFunds} = useAuth()

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="employed"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Select your employment status
        </label>
        <select
        value={employmentStatus}
          name="employed status"
          onChange={(e:ChangeEvent<HTMLSelectElement>)=>setEmploymentStatus(e.target.value)}
          id="employed"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Unemployed</option>
          <option>Employed</option>
          <option>Freelancing</option>
          <option>Buisness owner</option>
          <option>Student</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="source"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Source of funds
        </label>
        <select
        value={sourceOfFunds}
        onChange={(e:ChangeEvent<HTMLSelectElement>)=>setSourceOfFunds(e.target.value)}
          name="fundsource"
          id="source"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>JOB</option>
          <option>Buisness</option>
          <option>Freelancing</option>
          <option>Families and freinds</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="income"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Anuual Gross Income(usd)
        </label>
        <select
          name="employStatus"
          id="income"
          value={annualIncome}
          onChange={(e:ChangeEvent<HTMLSelectElement>)=>setAnnualIncome(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Less than 15k</option>
          <option>15,000-50,000</option>
          <option>50,000-100,000</option>
          <option>100k-200k</option>
          <option>Greater than 200k</option>
        </select>
      </div>
    </>
  );
};

export default Sign4;
