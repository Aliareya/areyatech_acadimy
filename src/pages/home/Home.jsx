import React from "react";
import { Icon } from "@iconify/react";
import bannerimage from "../../assets/images/bannerimage.jpg";
import StatusCart from "../../components/ui/StatusCart";
import { useStateData } from "../../context/StaticDataContext";
import DashboardNotifCart from "../../components/ui/DashboardNotifCart";

function Home() {
  const { dashboardStatsTotal, notifications ,schedule } = useStateData();
  return (
    <div className="w-full">
      <div
        className="w-full  h-60 rounded-xl bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${bannerimage})`,
          backgroundPosition: "60% 66%",
        }}
      >
        <div className="w-full h-60 bg-[#006666]/40 pl-5 flex-col justify-center items-center pt-10">
          <span className="text-4xl text-white font-semibold">
            Welcome back, Admin!
          </span>
          <p className="text-lg text-white font-normal pt-2">
            Here's what's happening at your academy today
          </p>
        </div>
      </div>
      <div className="w-full pt-5 flex gap-4">
        {dashboardStatsTotal.map((item, index) => {
          return <StatusCart item={item} key={index} />;
        })}
      </div>
      <div className="w-full pt-5 flex items-start gap-5">
        <DashboardNotifCart notifications={notifications} title={"Recent Activities"} subtitle={"Latest updates from your academy"} />
        <DashboardNotifCart notifications={schedule} title={"Upcoming Events"} subtitle={"Don't miss these important dates"} />
      </div>
      <div className="w-full mt-4 hover:shadow-lg h-auto bg-[#d1e2e2] border pt-5 p-6 border-gray-400/30 rounded-lg">
        <h1 className="text-2xl font-semibold">Quick Actions</h1>
        <p className="text-sm text-gray-600 ">Common tasks you might want to perform</p>
        <div className="w-full flex gap-5 mt-5">
          <div className="w-1/4 h-24 bg-white/20 rounded-md hover:shadow-lg cursor-pointer border-gray-300 border flex flex-col gap-2 justify-center items-center">
            <Icon
              icon="majesticons:users-line"
              width="25"
              height="25"
              style={{ color: "#166534" }}
            />
            <h1 className="text-xl font-semibold">Add Student</h1>
          </div>
          <div className="w-1/4 h-24 bg-white/20 rounded-md hover:shadow-lg cursor-pointer border-gray-300 border flex flex-col gap-2 justify-center items-center">
            <Icon
              icon="majesticons:users-line"
              width="25"
              height="25"
              style={{ color: "#166534" }}
            />
            <h1 className="text-xl font-semibold">Add Student</h1>
          </div>
          <div className="w-1/4 h-24 bg-white/20 rounded-md hover:shadow-lg cursor-pointer border-gray-300 border flex flex-col gap-2 justify-center items-center">
            <Icon
              icon="majesticons:users-line"
              width="25"
              height="25"
              style={{ color: "#166534" }}
            />
            <h1 className="text-xl font-semibold">Add Student</h1>
          </div>
          <div className="w-1/4 h-24 bg-white/20 rounded-md hover:shadow-lg cursor-pointer border-gray-300 border flex flex-col gap-2 justify-center items-center">
            <Icon
              icon="majesticons:users-line"
              width="25"
              height="25"
              style={{ color: "#166534" }}
            />
            <h1 className="text-xl font-semibold">Add Student</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
