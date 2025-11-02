import React from 'react';
import { Icon } from '@iconify/react';
import { useStateData } from '../context/StaticDataContext';
import StatusCart from './ui/StatusCart';
import Button from './ui/Button';

function ContentDashboardHeader({title , desc , data}) {
  const {dashboardStatsTotal} = useStateData();

  const handleClick = () => {

  }

  return (
    <div className='w-full h-auto pt-3 '>
      <div className='w-full flex justify-between items-center'>
        <div>
          <h1 className="text-[33px] text-[#338585] font-bold">{title}</h1>
          <p className="text-md text-gray-600 pt-0 ">{desc}</p>
        </div>
        <Button title={"Add "+title} icon={"material-symbols:add-rounded"} onclick={handleClick}/>
      </div>
      <div className="w-full pt-5 flex gap-4">
        {data.map((item, index) => {
          return <StatusCart item={item} key={index} />;
        })}
      </div>
    </div>
  )
}

export default ContentDashboardHeader;
