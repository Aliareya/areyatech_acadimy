import { createContext , useContext , useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children})=> {
  const [isSidebarOpen , setIsSidebarOpen] = useState(true);

  const toggleSidebar = ()=>{
      setIsSidebarOpen(!isSidebarOpen); 
  }
  
  return(
    <ThemeContext.Provider value={{ isSidebarOpen , setIsSidebarOpen , toggleSidebar }}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme =()=>{
  return useContext(ThemeContext);
} 