import React from "react";
import { Icon } from "@iconify/react";

function StudentCart() {
  return (
    <div className="flex items-center justify-between hover:bg-[#4e8a8a] bg-[#5d9f9f] rounded-lg border border-slate-100 p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-medium">
          JD
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-white cursor-pointer text-xl font-semibold">
              John Doe
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#b7998c] text-white">
              Active
            </span>
          </div>
          <div className="text-xs text-white mt-2 flex gap-6">
            <span>
              <b>ID:</b> STU001
            </span>
            <span>
              <b>Course:</b> Computer Science
            </span>
            <span>
              <b>Year:</b> 2nd Year
            </span>
            <span>
              <b>Email:</b> john.doe@email.com
            </span>
          </div>
        </div>
      </div>
      <Icon
        icon="solar:menu-dots-bold"
        className="cursor-pointer"
        width="26"
        height="26"
        style={{ color: "#fff" }}
      />
    </div>
  );
}

export default StudentCart;
