import { createContext , useContext , useState } from "react";

const StaticContext = createContext();

export function StaticDataProvider({children}){
    const[menu , setMenu] = useState([
        {title:"Dashborad" , icon : "mage:chart" , path : "/"},
        {title:"Students" , icon : "majesticons:users-line" , path : "/students"},
        {title:"Teachers" , icon : "heroicons:users-20-solid", path : "/teachers"},
        {title:"Attendance" , icon : "proicons:task-list", path : "/attendance" },
        {title:"Add Student" , icon : "humbleicons:user-add", path : "/addstudent"},
        {title:"Add Teacher" , icon : "mdi:account-student-outline", path : "/addteacher"},
        // {title:"User Roles" , icon : "oui:app-users-roles", path : "/roles"},
        // {title:"Profile" , icon : "ix:user-profile", path : "/porfile"},
        // {title:"Setting" , icon : "tdesign:setting-1", path : "/setting"},
    ]);

    const[menuSystem , setmenuSystem] = useState([
        {title:"Profile" , icon : "ix:user-profile", path : "/porfile"},
        {title:"User Roles" , icon : "oui:app-users-roles", path : "/roles"},
        {title:"Setting" , icon : "tdesign:setting-1", path : "/setting"},
    ])

    return(
        <StaticContext.Provider value={{menu , menuSystem}}>
            {children}
        </StaticContext.Provider>
    )
}

export const useStateData = () => {
    return(
        useContext(StaticContext)
    )
}