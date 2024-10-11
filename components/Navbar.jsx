"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import NavLink from './NavLink';

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
        px-6 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
        {/* Menu Items */}
        <div className='hidden md:flex gap-4 w-1/3'>
            {menuItems.map(item =>(
                <NavLink link={item} key={item.title}></NavLink>
            ))}
        </div>
        {/* Logo */}
        <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
            <Link href='/' 
            className='text-lg bg-white rounded-md 
                p-1  font-bold flex items-center justify-center '>
                    <span className='mr-2'>Aaditya</span>
                    <span className='w-full p-2 h-8 rounded-md bg-black flex items-center 
                    justify-center text-white'>
                        Tripathi
                    </span>
            </Link>
        </div>
        {/* Social Icons */}
        <div className='hidden md:flex gap-4 w-1/3'>
            <Link href="https://www.linkedin.com/in/aadityatripathi/">
                <Image src='/linkedin.png' alt='LinkedIn' width={24} height={24} />
            </Link>
            <Link href="https://github.com/AadityaTripathi">
                <Image src='/github.png' alt='GitHub' width={24} height={24} />
            </Link>
            <div className='border rounded-2xl border-white bg-white'>
                <Link href="https://leetcode.com/u/big_o_of_n/">
                    <Image src='/leetcode.png' alt='Twitter' width={24} height={24} />
                </Link>
            </div>
            <Link href="https://x.com/aaditya_tr">
                <Image src='/twitter.png' alt='Twitter' width={24} height={24} />
            </Link>
        </div>
        {/* Menu */}       
        <div className='md:hidden'>
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


