import React from "react";
import logo from "../assets/png/logo.png";
import home from "../assets/png/home.png";
import courses from "../assets/png/course.png";
import logouticon from "../assets/png/logout.png";
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { userLogout } from "../Redux/action";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
       dispatch(userLogout());
       navigate("/login")    
    }

    const viewCourses = () => {
        navigate("/courses");
    }

    const viewHome = () => {
        navigate("/");
    }

    return (
        <div className="h-screen w-[7vw] p-4 border-r border-gray-300 items-center bg-white flex flex-col float-left fixed">
            <img src={logo} alt="Logo" className="w-16 h-12 mb-8" onClick={viewHome} />
            <div className="bg-pink-200 p-1 rounded-lg mt-2 flex flex-col items-center justify-center w-11/12 cursor-pointer pt-2" onClick={viewHome}>
                <img src={home} alt="Home" className="w-6 h-6" />
                <p className="text-sm text-pink-700 mt-2">Home</p>
            </div>
            <div className="bg-gray-200 p-2 pb-1 rounded-lg mt-2 flex flex-col items-center justify-center w-11/12 cursor-pointer" onClick={viewCourses}>
                <img src={courses} alt="Courses" className="w-6 h-6" />
                <p className="text-sm text-gray-600 mt-2">Courses</p>
            </div>
            <div className="p-2 rounded-lg mt-[450%] flex flex-col items-center justify-center w-11/12 cursor-pointer" onClick={logout}>
                <img src={logouticon} alt="Courses" className="w-6 h-6" />
                <p className="text-sm text-gray-600 mt-2">Logout</p>
            </div>
        </div>
    )
}

export default Sidebar