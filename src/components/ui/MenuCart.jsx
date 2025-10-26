import React from 'react'
import { Icon } from '@iconify/react'
import { useTheme } from '../../context/ThemeContext';
import { useLocation, useNavigate } from 'react-router-dom';

function MenuCart({menu}) {
  const navigate = useNavigate();
  const {isSidebarOpen} = useTheme();
  const location = useLocation().pathname;
  const is_select = location === menu.path;
  
  const handleClikMenu =(path) =>{
    navigate(path)
  }


  return (
    <div onClick={()=>handleClikMenu(menu.path)} className={`${is_select && "bg-[#338585] border-b border-white"} ${!isSidebarOpen ? "hidden" :" sidebar-animate"} px-2.5 mb-1.5 w-full h-10 cursor-pointer  py-5 rounded-lg flex justify-start items-center hover:bg-[#338585]`}>
      <Icon icon={menu.icon} width="23" height="23"  style={{color: '#fff'}} />
      <span className='text-[18px] sidebar-animate text-white pl-3'>{menu.title}</span>
    </div>
  )
}

export default MenuCart;
