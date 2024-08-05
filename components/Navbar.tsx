import { PiMotorcycleFill } from "react-icons/pi";
import { MdSportsMotorsports } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import { IoSpeedometer } from "react-icons/io5";
import { RiArticleFill } from "react-icons/ri";
import { HiBuildingOffice } from "react-icons/hi2";

export default function Navbar() {

    return (
        <header className="z-40 relative">
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-64 p-2 shadow gap-y-4 font-medium font-cousine">
                            <li><a><PiMotorcycleFill />Motorcycles</a></li>
                            <li><a><MdSportsMotorsports />Apparels</a></li>
                            <li><a><AiFillTool />Services</a></li>
                            <li><a><IoSpeedometer />Test Drives</a></li>
                            <li><a><RiArticleFill />Articles</a></li>
                            <li><a><HiBuildingOffice />About</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold font-quicksand">Autobikes.ID</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-6 font-medium font-cousine">
                        <li><a>Motorcycles</a></li>
                        <li><a>Apparels</a></li>
                        <li><a>Services</a></li>
                        <li><a>Test Drives</a></li>
                        <li><a>Articles</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-sign font-bold font-cousine">Sign In</a>
                </div>
            </nav>
        </header>
    )
}