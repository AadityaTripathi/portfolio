"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const menuItems = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/projects", title: "Projects"},
    {url: "/contact", title: "Contact"}
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
    <div className='h-full flex items-center justify-between 
        px-6 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* Logo */}
        <div>
            <Link href='/' 
            className='text-lg bg-white rounded-md 
                p-1 font-bold flex items-center justify-center'>
                    <span className='mr-2'>Aaditya</span>
                    <span className='w-full p-2 h-8 rounded-md bg-black flex items-center 
                    justify-center text-white'>
                        Tripathi
                    </span>
            </Link>
        </div>

        {/* Menu */}       
        <div>
            {/* Menu Button */}
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
                onClick={()=>setOpen(!open)}>
                <div className='w-10 h-1 bg-black rounded'></div>
                <div className='w-10 h-1 bg-black rounded'></div>
                <div className='w-10 h-1 bg-black rounded'></div>
            </button>
            
            {/* Menu Items */}
            {open && (<div className='absolute top-0 left-0 w-screen h-screen bg-black
                 text-white flex flex-col justify-center items-center text-5xl gap-10'>
                {menuItems.map(menuItem => (
                    <Link href={menuItem.url} key = {menuItem.title}>
                        {menuItem.title}
                    </Link>
                ))}
            </div>)}
        </div>
    </div>
  )
}
