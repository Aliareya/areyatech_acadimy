import React from 'react';
import { Icon } from '@iconify/react';
import bannerimage from "../../assets/images/bannerimage.jpg";
import DashoardCart from '../../components/ui/DashoardCart';
import { useStateData } from '../../context/StaticDataContext';

function Home() {
  const {dashboardStatsTotal} = useStateData();
  return (
    <div className='w-full'>
      <div className='w-full  h-60 rounded-xl bg-cover overflow-hidden' style={{
        backgroundImage: `url(${bannerimage})`,
        backgroundPosition: "60% 66%"
      }}>
        <div className='w-full h-60 bg-[#006666]/40 pl-5 flex-col justify-center items-center pt-10'>
          <span className='text-4xl text-white font-semibold'>Welcome back, Admin!</span>
          <p className='text-lg text-white font-normal pt-2'>Here's what's happening at your academy today</p>
        </div>
      </div>
      <div className='w-full pt-5 flex gap-4'>
        {dashboardStatsTotal.map((item , index)=>{
          return (
            <DashoardCart item={item} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home


