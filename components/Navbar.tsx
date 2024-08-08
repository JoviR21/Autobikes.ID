import { IoMdHome } from "react-icons/io";
import { PiMotorcycleFill } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";
import { IoSpeedometer } from "react-icons/io5";
import { RiArticleFill } from "react-icons/ri";
import { HiBuildingOffice } from "react-icons/hi2";

import Link from "next/link";

export default function Navbar() {

    return (
        <header className="z-40 relative">
            <nav className="navbar bg-transparent">
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
                            className="menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-96 p-2 shadow gap-y-4 font-medium font-cousine items-center">
                            <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear flex mb-4 ps-3 pt-3" href="/"><IoMdHome className="me-3" />Home</Link>
                            <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear flex mb-4 ps-3" href="/motorcycles"><PiMotorcycleFill className="me-3" />Motorcycles</Link>
                            <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear flex mb-4 ps-3" href="/services"><AiFillTool className="me-3" />Services</Link>
                            <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear flex mb-4 ps-3" href="/teams"><MdGroups className="me-3" />Our Teams</Link>
                            <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear flex mb-4 ps-3" href="/ride"><IoSpeedometer className="me-3"/>Test Ride</Link>
                            <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear flex mb-4 ps-3" href="/articles"><RiArticleFill className="me-3" />Articles</Link>
                            <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear flex mb-4 ps-3" href="/about"><HiBuildingOffice className="me-3" />About</Link>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl font-bold font-quicksand">Autobikes.ID</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-6 font-medium font-cousine">
                        <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear" href="/">Home</Link>
                        <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear" href="/motorcycles">Motorcycles</Link>
                        <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear" href="/services">Services</Link>
                        <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear" href="/teams">Our Teams</Link>
                        <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear" href="/ride">Test Ride</Link>
                        <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear" href="/articles">Articles</Link>
                        <Link className="hover:border-b-4 hover:border-third hover:text-third transition-all ease-linear" href="/about">About</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-sign font-bold font-cousine">Sign In</a>
                </div>
            </nav>
        </header>
    )
}