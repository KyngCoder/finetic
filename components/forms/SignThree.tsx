import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const SignTwo = () => {

    const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const fire = (event: any) => {
    event?.preventDefault();
    console.log(password, email, confirmPassword);
  };

  return (
    <form className="h-full w-screen flex justify-center items-center flex-col ">
      
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
        placeholder="kyngcoder@gmail.com"
        value={email}
        onChange={() => setEmail(event?.target.value)}
        required={true}
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
        onChange={() => setPassword(event?.target.value)}
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
    <div className="mb-6 relative">
      <label
        htmlFor="repeat-password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Repeat password
      </label>
      <input
        type={show ? "text" : "password"}
        id="repeat-password"
        className="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light "
        required={true}
        onChange={() => setConfirmPassword(event?.target.value)}
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
        I agree with the{" "}
        <a
          href="#"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          terms and conditions
        </a>
      </label>
    </div>
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={fire}
    >
      Register new account
    </button>
  </form>
  )
}
