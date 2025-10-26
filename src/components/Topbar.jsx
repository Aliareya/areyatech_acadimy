import { Icon } from "@iconify/react";
import {useTheme} from "../context/ThemeContext"

function Topbar() {
  const {toggleSidebar , isSidebarOpen} = useTheme();


  return (
  <div class="w-full h-16 bg-[#d1e2e2] flex ">
    <div className="w-1/2 h-16 flex justify-start items-center px-1">
    {isSidebarOpen ? (
      <Icon icon="ic:round-menu-open" className="cursor-pointer"
       onClick={toggleSidebar}
       width="39" height="39"  style={{color: '#006666'}} />
    ):(
      <Icon icon="line-md:menu-fold-right" className="cursor-pointer"
       onClick={toggleSidebar}
       width="32" height="32"  style={{color: '#006666'}} />
    )
    }
      
    </div>
    <div className="w-1/2 h-16"></div>
  </div>
  );
}

export default Topbar;
