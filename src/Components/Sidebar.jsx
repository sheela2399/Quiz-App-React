import React from 'react'
import "../admin/admin.css"
import { NavLink } from 'react-router'
import { FaHouseUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <>
            <section class="sidebar">
                <h2>Dashboard</h2>
                <ul clas="menu">
                    <NavLink to="/admindashboard">
                        <li className="nav-item">
                            <FaHouseUser />
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/userinfo">
                        <li className="nav-item">
                            <FaUsers></FaUsers>
                            Users
                        </li>
                    </NavLink>
                    <NavLink to="/quizzes">
                        <li className="nav-item">
                            <FaRegCircleQuestion />
                            Quizzes
                        </li>
                    </NavLink>
                </ul>
            </section>
        </>
    )
}

export default Sidebar;
