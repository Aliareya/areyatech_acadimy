import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useTheme } from "../context/ThemeContext";

//import pages
import Home from "../pages/home/Home";
import Students from "../pages/students/Students";
import Teachers from "../pages/teachers/Teachers";
import Attendance from "../pages/attendance/Attendance";
import AddStudent from "../pages/addstudent/AddStudent";
import Roles from "../pages/roles/Roles";
import Setting from "../pages/settings/Settings";


function MainLayout() {
  const {isSidebarOpen} = useTheme();
  return (
    <div className="flex w-full h-auto">
      <div className={`${isSidebarOpen ? "w-60 sidebar-animate":"w-0  sidebar-animate"} h-screen`}>
        <Sidebar />
      </div>
      <div className={`${isSidebarOpen ? "w-[calc(100%-240px)] sidebar-animate":"w-full sidebar-animate"}  bg-[#d1e2e2d5] h-16 `}>
        <div>
        <Topbar/>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/students" element={<Students/>}/>
            <Route path="/teachers" element={<Teachers/>}/>
            <Route path="/attendance" element={<Attendance/>}/>
            <Route path="/addStudent" element={<AddStudent/>}/>
            <Route path="/roles" element={<Roles/>}/>
            <Route path="/setting" element={<Setting/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;