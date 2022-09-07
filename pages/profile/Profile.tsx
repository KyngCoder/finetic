import React,{useEffect, useState} from 'react'
import Sidebar from '../../components/profile/Sidebar'
import Tab from './Tab'
import {MdFilterList} from 'react-icons/md'
import {ImArrowUpRight,ImArrowDownLeft} from 'react-icons/im'
import { BsFileArrowUp } from 'react-icons/bs'
import axios from 'axios'
import LineGraph from '../../components/graphs/LineGraph'



const Profile = () => {

  //const key = 'sandbox_cbasedqad3i91bfqbkfg'

  // useEffect(()=>{
  //   const data = axios.get(`https://finnhub.io/api/v1/search?q=apple&token=${key}`)

  //   console.log(data)
    
  // },[])

  

  return (
    <section className="flex w-screen">
      <div className="bg-blue-500 md:w-1/5 w-1/3  h-screen">
<Sidebar />
      </div>
      <div className=" w-4/5 h-full">
<div>
  <Tab />
</div>
<div className="bg-gray-900 flex justify-between px-4 py-4 items-center">
  <h2 className="text-2xl">Dashboard</h2>
  <MdFilterList />
</div>
<div className="bg-gray-900">
  <div className="bg-white p-2 rounded-md max-w-sm">
  <div className="flex justify-between items-center px-2">
    <p className="bg-black text-white rounded-full px-2">Apple. inc</p>
    <div className="text-black pt-2">
      <p>AAPL</p>
      <p>+1.8%</p>
    </div>
  </div>
  <div className="text-black flex pt-4 justify-between items-center px-2">
    <div>
      <p>Portfolio</p>
      <p>32,140.20</p>
    </div>
    <div>
      <ImArrowUpRight className="text-green-600 h-6 w-6" />
    </div>
  </div>
  </div>
</div>
<div>
<div style={{ width: 700 }}>
        <LineGraph  />
      </div>
</div>
      </div>
    </section>
  )
}

export default Profile