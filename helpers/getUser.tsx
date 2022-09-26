import axios from 'axios'
import React, {  useState } from 'react'


const getUser = async(searchEmail) => {
    const u =  await axios.get(`http://localhost:3000/api/getUser?email=${searchEmail}`)
    const data = u.data.data[0]
    console.log(data)
     return data
   }




export default getUser