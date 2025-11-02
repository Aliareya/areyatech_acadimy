import React from 'react'
import ContentDashboardHeader from "../../components/ContentDashboardHeader";
import { useStateData } from '../../context/StaticDataContext';

function Attendance() {
  const {attendanceStatusStats} = useStateData();
  return (
    <div>
      <ContentDashboardHeader
        title={"Attendance"}
        desc={"Manage student profiles and information"}
        data={attendanceStatusStats}
      />
    </div>
  )
}

export default Attendance
