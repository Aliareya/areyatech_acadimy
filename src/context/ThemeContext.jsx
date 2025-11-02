import { createContext , useContext , useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children})=> {
  const [isSidebarOpen , setIsSidebarOpen] = useState(true);

  const toggleSidebar = ()=>{
      setIsSidebarOpen(!isSidebarOpen); 
  }

  const [isopenPupop , setIsopenPupop] = useState(false);

  const handleTogglePupop = () =>{
    setIsopenPupop(!isopenPupop);

  }
  
  return(
    <ThemeContext.Provider value={{ isSidebarOpen , setIsSidebarOpen , toggleSidebar  , isopenPupop , setIsopenPupop , handleTogglePupop}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme =()=>{
  return useContext(ThemeContext);
} 