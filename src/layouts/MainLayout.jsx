import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useTheme } from "../context/ThemeContext";


function MainLayout() {
  const {isSidebarOpen} = useTheme();
  return (
    <div className="flex w-full h-auto">
      <div className={`${isSidebarOpen ? "w-60 sidebar-animate":"w-0 sidebar-animate"} h-screen`}>
        <Sidebar />
      </div>
      <div className={`${isSidebarOpen ? "w-[calc(100%-240px)] sidebar-animate":"w-full sidebar-animate"}  bg-[#d1e2e2d5] h-16 `}>
        <Topbar/>
      </div>
    </div>
  );
}

export default MainLayout;