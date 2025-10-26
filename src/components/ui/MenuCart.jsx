import React from 'react'
import { Icon } from '@iconify/react'

function MenuCart({is_select}) {
  return (
    <div className={`${is_select && "bg-[#338585]"} px-2.5 mb-1 w-full h-10  py-5 rounded-lg flex justify-start items-center hover:bg-[#338585]`}>
      <Icon icon="icon-park-solid:dashboard-car" width="23" height="23"  style={{color: '#fff'}} />
      <span className='text-[18px]  text-white pl-3'>Dashboard</span>
    </div>
  )
}

export default MenuCart;
