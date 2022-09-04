import React from 'react'
import Sidebar from '../../components/profile/Sidebar'

const Profile = () => {
  return (
    <section className="md:flex block w-screen">
      <div className="bg-blue-500 md:w-1/5 w-1/3  h-screen">
<Sidebar />
      </div>
      <div className="bg-green-300 w-4/5 h-full">
main
      </div>
    </section>
  )
}

export default Profile