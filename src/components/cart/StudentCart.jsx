import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

// کارت دانشجو
function StudentCart({ student, openId, setOpenId }) {
  const cardRef = useRef();
  const [popupPosition, setPopupPosition] = useState("bottom"); 

  const isOpen = openId === student.id;

  const handleTogglePopup = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const popupHeight = 160; 

      if (windowHeight - rect.bottom < popupHeight) {
        setPopupPosition("top");
      } else {
        setPopupPosition("bottom");
      }
    }

    if (isOpen) {
      setOpenId(null);
    } else {
      setOpenId(student.id);
    }
  };

  return (
    <div
      ref={cardRef}
      className="flex items-center relative justify-between hover:bg-[#4e8a8a] bg-[#5d9f9f] rounded-lg border border-slate-100 p-4 shadow-md transition duration-200"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-medium">
          {student.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-white cursor-pointer text-xl font-semibold">
              {student.name}
            </h3>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#b7998c] text-white">
              {student.status}
            </span>
          </div>
          <div className="text-xs text-white mt-2 flex flex-wrap gap-6">
            <span>
              <b>ID:</b> {student.id}
            </span>
            <span>
              <b>Course:</b> {student.course}
            </span>
            <span>
              <b>Year:</b> {student.year}
            </span>
            <span>
              <b>Email:</b> {student.email}
            </span>
          </div>
        </div>
      </div>

      <Icon
        onClick={handleTogglePopup}
        icon="solar:menu-dots-bold"
        className="cursor-pointer"
        width="26"
        height="26"
        style={{ color: "#fff" }}
      />

      {isOpen && (
        <div
          className={`.sidebar-animate absolute right-5 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-slate-200 transition-all duration-200 ${
            popupPosition === "bottom" ? "top-14" : "-top-24"
          }`}
        >
          <ul className="flex flex-col">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-150">
              View
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-150">
              Edit
            </li>
            <li className="px-4 py-2 hover:bg-red-500 text-red-600 hover:text-white cursor-pointer transition duration-150">
              Delete
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default StudentCart;
