import React from 'react';
import logo from "../assets/images/logo2.png";
import { Icon } from '@iconify/react';
import MenuCart from './ui/menuCart';
import { useTheme } from '../context/ThemeContext';
import { useStateData } from '../context/StaticDataContext';


function Sidebar() {
  const {isSidebarOpen} = useTheme();
  const {menu} = useStateData();

  return (
    <div className={` w-full h-screen bg-[#006666]`}>
      <div className='flex justify-between items-center w-full h-16 px-3 border-b border-[#d1e2e2] '>
        <img src={logo} className='w-[80%] h-16 ' alt="" />
      </div>
      <div className='w-full h-auto px-2 py-2'>
        {menu.map((item , index)=>{
          return <MenuCart menu={item} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Sidebar