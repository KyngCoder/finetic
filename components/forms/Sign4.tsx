import React, { useState } from 'react'

const Sign4 = () => {

  return (
    <>
      <label htmlFor="employed" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select your employment status</label>
<select name="employStatus" id="employStatus" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option>Unemployed</option>
  <option>Employed</option>
  <option>Freelancing</option>
  <option>Buisness owner</option>
  <option>Student</option>
  <option>Other</option>
</select>
    </>
  )
}

export default Sign4