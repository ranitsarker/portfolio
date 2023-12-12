import { NavLink } from "react-router-dom";

import logo from '../../assets/logo/ranit-logo.png'

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="px-2"><NavLink to="/">Home</NavLink></li>
                        <li className="px-2"><NavLink to="/about">About</NavLink></li>
                        <li className="px-2"><NavLink to="/projects">Projects</NavLink></li>
                        <li className="px-2"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    </div>
                    <img src={logo} alt="Ranit" className="w-28 h-auto"/>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="px-2 font-bold"><NavLink to="/">Home</NavLink></li>
                        <li className="px-2 font-bold"><NavLink to="/about">About</NavLink></li>
                        <li className="px-2 font-bold"><NavLink to="/projects">Projects</NavLink></li>
                        <li className="px-2 font-bold"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;