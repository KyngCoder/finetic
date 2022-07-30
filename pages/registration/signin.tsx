import React, { useState } from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'

const signin = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);

  const fire = (event:any) => {
    event?.preventDefault()
    console.log(email,password)
  }

  return (
    <form className="h-screen w-screen flex justify-center items-center flex-col back">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required={true}
          value={email}
          onChange={()=>setEmail(event?.target.value)}
        />
      </div>
      <div className="mb-6 relative">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your password
        </label>
        <input
          type={show ? "text" : "password"}
          id="password"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light "
          required={true}
          value={password}
          onChange={()=>setPassword(event?.target.value)}
        />
        {show ? (
          <AiFillEye
            className="absolute top-10   right-5"
            onClick={() => setShow(!show)}
          />
        ) : (
          <AiFillEyeInvisible
            className="absolute top-10   right-5"
            onClick={() => setShow(!show)}
          />
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={fire}
      >
        Login
      </button>
    </form>
  );
};

export default signin;
