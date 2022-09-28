import React, { useState, FC, ChangeEvent, SyntheticEvent } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "../../context/UserData";

const Sign2: FC = () => {
  const {
    email,
    setEmail,
    repeatPassword,
    setRepeatPassword,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    DOB,
    setDOB,
  } = useAuth();

  const [show, setShow] = useState(false);

  const fire = (event: SyntheticEvent) => {
    event?.preventDefault();
    
  };

  return (
    <form className="h-full w-full flex justify-center items-center flex-col ">
      <div>
        <div className="color">
          <h2 className="mx-8 text-2xl font-bold">Personal Information</h2>
        </div>
        <div className="flex p-8">
          <div>
            <div>
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Ricardo"
                value={firstName}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                required={true}
              />
            </div>
          </div>
          <div className="space-x-5">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Last Name
            </label>

            <input
              type="text"
              id="lastName"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Merchant"
              value={lastName}
              onChange={(e:ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
              required={true}
            />
          </div>
        </div>
        <div>
          <label htmlFor="DOB">DOB</label>
          <input id="DOB" className="border-4 p-2 text-lg" type="date" onChange={(e:ChangeEvent<HTMLInputElement>) => setDOB(e.target.value)} />
          <p className="color px-8 mb-2">Month/Day/Year</p>
        </div>
        <div className="p-8">
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
            onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required={true}
          />
        </div>
      </div>
      <div className="flex space-x-5 px-8">
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
            onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
            value={repeatPassword}
            onChange={(e:ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)}
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
      </div>

    </form>
  );
};
export default Sign2;
