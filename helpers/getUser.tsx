import axios from 'axios'
import React, {  useState } from 'react'


const [user, setUser] = useState<User>([]);

const getUser = async (searchEmail: string) => {
  const u = await axios.get(
    `http://localhost:3000/api/getUser?email=${searchEmail}`
  );
  const data = u.data.data;
  setUser(data);
};

useEffect(() => {
  const email= JSON.parse(localStorage.getItem("userInfo") || "{}");
  const searchEmail = email?.result?.email;
  getUser(searchEmail);
}, []);



export default getUser