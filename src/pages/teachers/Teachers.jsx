import React from "react";
import ContentDashboardHeader from "../../components/ContentDashboardHeader";
import { useStateData } from "../../context/StaticDataContext";
import Searchcomponent from "../../components/ui/Searchcomponent"

function Teachers() {
  const { teacherStatusStats } = useStateData();
  return (
    <div>
      <ContentDashboardHeader
        title={"Teacher"}
        data={teacherStatusStats}
        desc={"Manage academy teaching staff"}
      />
      <div className="h-auto bg-[#d1e2e2] rounded-lg border border-gray-400/30 p-6 mt-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">
              Student Directory
            </h2>
            <p className="text-sm text-slate-500">
              Search and manage all student records
            </p>
          </div>

          <div className="rounded-xl shadow-sm border border-gray-400/30 p-6">
            <Searchcomponent />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
