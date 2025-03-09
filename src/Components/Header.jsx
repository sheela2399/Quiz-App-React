import React from 'react'
import Avatar from "../assets/Avatar.png";
import techpaathshala from "../assets/techpaathshala.png"
import { useNavigate } from 'react-router';
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {

    let userData = JSON.parse(localStorage.getItem("userLoggedIn"))
    const navigate = useNavigate()

    const handleLogout = () => {
        if (confirm("Are you sure you want to logout")) {
            localStorage.clear()
            navigate("/")
        }
    }

    return (
        <>
            <header id="header" className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <div id="tech-logo" className="flex items-center">
                    <GiHamburgerMenu style={{ marginRight: "30px", fontSize: "26px" }} className='hamburger' />    
                        <img
                            src={techpaathshala}
                            alt="techpaathsala"
                        />
                </div>

                <div className="right-side-info">
                    <ul>
                        <li>Welcome</li>
                        {/* <li>Welcome, {userData?.isAdmin ? "Admin" : userData?.fullName}</li> */}
                        <li>{userData?.fullName}</li>
                        <img
                            id="popup"
                            src={Avatar}
                            alt="userimage"
                            onClick={handleLogout}
                        />
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header