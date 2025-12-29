import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/images/logo.jpg'
import { IoMdSearch } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { ThemeContext } from "../Context/ThemeContext";


function Header() {
    const [toggle, setToggle] = useState(true)
    const {theme,setTheme}=useContext(ThemeContext);

    useEffect(() => {
      console.log("Theme", theme)
    },[theme])
  return (
    <div className='flex items-center gap-2 p-4'>
      <img src={logo} width={60} height={60} />
      <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
        <IoMdSearch/>
        <input type='text' placeholder="Search games" className=' px-2 bg-transparent outline-none' />
      </div>
      <div className='cursor-pointer' >
        {theme=== 'light' ? 
          ( <IoMoon 
            onClick={() => {setTheme('dark'); localStorage.setItem('theme', 'dark')}} className='text-[35px] bg-slate-200 text-black p-1 rounded-full items-center'/>
          ) : ( <MdSunny 
            onClick={() => {setTheme('light'); localStorage.setItem('theme', 'light')}} className='text-[35px] bg-slate-200 text-black p-1 rounded-full items-center'/> )}
      </div>
    </div>
  )
}

export default Header