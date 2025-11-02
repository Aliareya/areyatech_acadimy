import React from "react";
import ContentDashboardHeader from "../../components/ContentDashboardHeader";
import { useStateData } from "../../context/StaticDataContext";

function Teachers() {
  const { teacherStatusStats } = useStateData();
  return (
    <div>
      <ContentDashboardHeader
        title={"Teacher"}
        data={teacherStatusStats}
        desc={"Manage academy teaching staff"}
      />
    </div>
  );
}

export default Teachers;
