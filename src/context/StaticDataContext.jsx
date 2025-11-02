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

    const notifications = [
        {
            message: "New student John Doe enrolled in Computer Science",
            time: "5 minutes ago",
            type: "success"
        },
        {
            message: "Weekly attendance report generated",
            time: "1 hour ago",
            type: "info"
        },
        {
            message: "Low attendance alert for Mathematics class",
            time: "2 hours ago",
            type: "warning"
        },
        {
            message: "Science Fair event scheduled for next week",
            time: "3 hours ago",
            type: "success"
        }
    ];

    const schedule = [
        {
            message: "Parent-Teacher Conference",
            time: "Tomorrow, 9:00 AM",
            type: "meeting"
        },
        {
            message: "Science Fair",
            time: "Friday, 10:00 AM",
            type: "event"
        },
        {
            message: "Monthly Assessment",
            time: "Next Monday, 2:00 PM",
            type: "exam"
        }
    ];

    const dashboardStatsTotal = [
        {title:"Total Students" , icon :"" , total : "2,530" , increase : "30" , decrease :null},
        {title:"Total Teachers" , icon :"" , total : "300" , increase : "5" , decrease :null},
        {title:"Attendance Rate" , icon :"" , total : "80.7%" , increase : "40" , decrease :null},
        {title:"Active Courses" , icon :"" , total : "50" , increase : "5" , decrease :null},
    ];

    const studentStatusStats = [
        { title: "Active Students", icon: "", total: "2,100", increase: "50", decrease: null },
        { title: "Inactive Students", icon: "", total: "250", increase: null, decrease: "10" },
        { title: "Suspended Students", icon: "", total: "80", increase: null, decrease: "5" },
        { title: "Graduated Students", icon: "", total: "100", increase: "10", decrease: null },
    ];

    const teacherStatusStats = [
        { title: "Active Teachers", icon: "", total: "250", increase: "5", decrease: null },
        { title: "On Leave Teachers", icon: "", total: "20", increase: null, decrease: "2" },
        { title: "Retired Teachers", icon: "", total: "10", increase: null, decrease: null },
        { title: "Terminated Teachers", icon: "", total: "5", increase: null, decrease: null },
    ];
    
    const attendanceStatusStats = [
        { title: "Present Attendance", icon: "", total: "2,100", increase: "40", decrease: null },
        { title: "Absent Attendance", icon: "", total: "200", increase: null, decrease: "15" },
        { title: "Late Attendance", icon: "", total: "120", increase: "5", decrease: null },
        { title: "Excused Attendance", icon: "", total: "110", increase: null, decrease: null },
    ];



    return(
        <StaticContext.Provider value={{
            dashboardStatsTotal,menu ,schedule, menuSystem , notifications,
            studentStatusStats,teacherStatusStats ,attendanceStatusStats
            }}>
            {children}
        </StaticContext.Provider>
    )
}

export const useStateData = () => {
    return(
        useContext(StaticContext)
    )
}