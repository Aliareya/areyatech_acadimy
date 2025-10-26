import React from 'react';
import logo from "../assets/images/logo2.png";
import { Icon } from '@iconify/react';

function Sidebar() {
  return (
    <div className="w-full h-screen bg-[#006666]">
      <div className='flex justify-between items-center w-full h-16 px-2 border-b border-[#d1e2e2] '>
        <img src={logo} className='w-[80%] h-16 ' alt="" />
      </div>
    </div>
  )
}

export default Sidebar