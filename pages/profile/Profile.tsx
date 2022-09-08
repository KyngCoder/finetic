import React,{useEffect, useState} from 'react'
import Sidebar from '../../components/profile/Sidebar'
import Tab from './Tab'
import {MdFilterList} from 'react-icons/md'
import {ImArrowUpRight,ImArrowDownLeft} from 'react-icons/im'
import axios from 'axios'
import Main from '../profile/Main'
import Active from './Active'




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

<div>
<Active />
</div>

<div>
<div className="bg-gray-900">
<Main />
      </div>
</div>
      </div>
    </section>
  )
}

export default Profile