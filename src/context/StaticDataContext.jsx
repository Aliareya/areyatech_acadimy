import { createContext , useContext , useState } from "react";

const StaticContext = createContext();

export function StaticDataProvider({children}){
    const[menu , setMenu] = useState([
        {title:"Dashborad" , icon : "mage:chart" , path : "/"},
        {title:"Students" , icon : "mage:chart" , path : "/students"},
        {title:"Teachers" , icon : "mage:chart", path : "/teachers"},
        {title:"Attendance" , icon : "mage:chart", path : "/attendance"},
        {title:"Add Student" , icon : "mage:chart", path : "/addstudent"},
        {title:"User Roles" , icon : "mage:chart", path : "/roles"},
        {title:"Profile" , icon : "mage:chart", path : "/porfile"},
        {title:"Setting" , icon : "mage:chart", path : "/setting"},
    ])
    return(
        <StaticContext.Provider value={{menu}}>
            {children}
        </StaticContext.Provider>
    )
}

export const useStateData = () => {
    return(
        useContext(StaticContext)
    )
}