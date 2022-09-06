
import React,{useState, useEffect, ChangeEvent} from 'react'
import {MdNotifications, MdMessage} from 'react-icons/md'

const Tab = () => {
    const [state,setState] = useState<boolean>(false)
    const [searchTerm,setSearchTerm] = useState<string>(' ')
      
 
  return (
    
<nav className=" border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">

    
  <div className="container flex flex-wrap justify-end items-center mx-auto">

    <div className="flex items-center">
        <input placeholder="search..." className="border-blue-900 border-b-2 px-2 outline-none bg-transparent mr-8" type="text" value={searchTerm} onChange={(e:ChangeEvent<HTMLInputElement>)=>setSearchTerm(e.target.value)} />
        <MdNotifications className="w-8 h-6 mr-2" />
        <MdMessage className="w-8 h-6 mr-4" />
    </div>

  <div className="flex flex-col justify-center items-center md:order-2">
      <button   type="button" className="flex mr-3 text-sm  bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <img onClick={() => setState(!state)}  className="w-8 h-8 rounded-full" src="https://imgs.search.brave.com/KQGJ3pJd5WTn5fyR5b-imgnlyCqjo_8LBr0Q_untyY4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmVzdGhkd2FsbHBh/cGVyZ2FsbGVyeS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDgvQWNvcm4t/UGljLWluLUhELmpw/Zw" alt="user photo" />
      </button>
      
      <div className={`${state? 'block' : 'hidden'}  z-50  text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`} id="user-dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
        <div className="py-3 px-4">
          <span className="block text-sm text-gray-900 dark:text-white">Ricardo Merchant</span>
          <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">kyngcoder</span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">

    </button>
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Tab