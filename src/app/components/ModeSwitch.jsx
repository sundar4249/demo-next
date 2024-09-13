'use client'
import { useState,useEffect } from "react"
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes';
function ModeSwitch() {
   const[mount, setMount]= useState(false)
    const {theme, setTheme, systemTheme}=useTheme()
    const currentTheme = theme==='system'? systemTheme:theme;
    useEffect(() => {
        setMount(true)
    }, []);
  return (
    <div>{
        (mount&&currentTheme ==='dark'?(<MdLightMode onClick={()=>setTheme('light')}  className='text-xl cursor-pointer hover:text-amber-500'/>):
      (<MdDarkMode onClick={()=>setTheme('dark')} className='text-xl cursor-pointer hover:text-amber-500'/>
        ))}</div>
  )
}

export default ModeSwitch