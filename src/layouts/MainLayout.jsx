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
import AddTeacher from "../pages/addteacher/AddTeacher";

function MainLayout() {
  const { isSidebarOpen } = useTheme();

  return (
    <div className="flex">
      <div
        className={`${
          isSidebarOpen ? "w-60" : "w-0"
        } fixed left-0 top-0 h-screen bg-white shadow-md sidebar-animate z-40`}
      >
        <Sidebar />
      </div>

      <div
        className={`${
          isSidebarOpen ? "ml-60" : "ml-0"
        } flex-1 min-h-screen bg-[#d1e2e2d5] transition-all duration-300`}
      >
        <div className="sticky top-0 z-30 bg-white shadow">
          <Topbar />
        </div>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/addteacher" element={<AddTeacher />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
