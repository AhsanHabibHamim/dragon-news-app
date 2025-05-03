import React from 'react';
import { NavLink } from 'react-router';
import User from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='gap-5 flex text-[#706F6F] text-sm active:underline'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div  className='flex gap-5'>
                <img src={User} alt="" />
                <button className='text-white btn bg-[#403F3F] px-6 py-1 text-xl '>Login</button>
            </div>
        </div>
    );
};

export default Navbar;