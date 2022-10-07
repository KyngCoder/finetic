import React, { useEffect, useState } from "react";
import Sidebar from "../../components/profile/Sidebar";
import Tab from "./Tab";
import { MdFilterList } from "react-icons/md";
import axios from "axios";
import Main from "../profile/Main";
import Active from "./Active";
import { User } from "../../helpers/Types";




const Profile = () => {
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

  return (
    <section className="flex w-screen">
      <div className=" md:w-1/5 w-1/3">
        <Sidebar />
      </div>
      <div className=" w-4/5 h-full">
        <div>
          <Tab />
        </div>
        <div className="bg-gray-900 flex justify-between px-4 py-4 items-center">
          <h2 className="text-2xl">{user[0]?.firstName} Dashboard</h2>
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
  );
};

export default Profile;
