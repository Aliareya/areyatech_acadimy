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
    ]);

    const[menuSystem , setmenuSystem] = useState([
        {title:"Profile" , icon : "ix:user-profile", path : "/porfile"},
        {title:"User Roles" , icon : "oui:app-users-roles", path : "/roles"},
        {title:"Setting" , icon : "tdesign:setting-1", path : "/setting"},
    ]);

    const dashboardStatsTotal = [
        {title:"Total Students" , icon :"" , total : "2,530" , increase : "30" , decrease :null},
        {title:"Total Teachers" , icon :"" , total : "300" , increase : "5" , decrease :null},
        {title:"Attendance Rate" , icon :"" , total : "80.7%" , increase : "40" , decrease :null},
        {title:"Active Courses" , icon :"" , total : "50" , increase : "5" , decrease :null},
    ]

    return(
        <StaticContext.Provider value={{dashboardStatsTotal,menu , menuSystem}}>
            {children}
        </StaticContext.Provider>
    )
}

export const useStateData = () => {
    return(
        useContext(StaticContext)
    )
}