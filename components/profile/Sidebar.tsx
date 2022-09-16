import React, { FC } from "react";
import {
  MdInsertChart,
  MdQueryStats,
  MdSchool,
  MdSettings,
} from "react-icons/md";
import { BsGraphUp, BsBookHalf } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import {
  RiStockFill,
  RiPieChartFill,
  RiCommunityFill,
  RiWallet2Fill,
  RiEyeFill,
  RiMessage2Fill,
} from "react-icons/ri";
import logo from "../../public/Finetic (1).png";
import Image from "next/image";
import Link from "next/link";
import { GiDivingDagger } from "react-icons/gi";

const Sidebar: FC = () => {
  return (
    <div className=" py-4 px-3 w-full h-full bg-gray-50  dark:bg-gray-800">
      <a
        href="http://localhost:3000/"
        className="flex items-center pl-2. pt-4 mb-8"
      >
        <Image src={logo} alt="logo" width={40} height={40} />

        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Finetic
        </span>
      </a>
      <ul className="space-y-2 mb-8">
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
          </a>
        </li>
        <li>
          <Link href="/News/NewsFeed">
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BsBookHalf className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">NewsFeed</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/portfolio/Portfolio">
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <RiPieChartFill className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Portfolio</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/market/Market">
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BsGraphUp className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Market</span>
            </div>
          </Link>
        </li>
        <li>
          <div className="display flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <BiTransfer className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap">
              Transaction(drop list)
            </span>
          </div>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <RiCommunityFill className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap">Community</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <RiWallet2Fill className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap">Wallets</span>
          </a>
        </li>
        <li>
          <Link href="/education/Education">
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <MdSchool className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Education</span>
            </div>
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <RiMessage2Fill
              className="display
             flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
            />
            <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
            <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
              3
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <MdQueryStats className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="flex-1 ml-3 whitespace-nowrap">Analytics</span>
          </a>
        </li>
      </ul>
      <div className="px-2.5 flex">
        <MdSettings className="display flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white " />
        <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
