import User from "../assets/welcome.jpeg";

const users= [{Image: User}];

import React from 'react'

const Import = () => {
  return (

    <div>
        {users.map((m, index) => (
            <div key={index} >
        <img src={m.Image} alt="User Image"
                className="w-80 h-40 rounded-full mx-auto mb-3"/>
    </div>
  ))}
  </div>
  )
}



export default Import