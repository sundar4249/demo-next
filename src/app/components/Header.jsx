

"use client"


import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai"
import { BsInfoCircleFill } from "react-icons/bs";
import Link from 'next/link';
import ModeSwitch from './ModeSwitch';
import Cookie from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';


const Header = () => {

    const pathname = usePathname()
    console.log(pathname, 'pathname')

    const path = pathname.split('/')
    const token = Cookie.get('token') 

    const router = useRouter()

    console.log(token,'hello')
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl">
        <div className="flex gap-4">
            <MenuItem title="home" address="/" Icons={AiFillHome}/>
            <MenuItem title="about" address="/about" Icons={BsInfoCircleFill}/>

        </div>
        <div className='flex items-center gap-4'>
            <ModeSwitch/>
        <div className="flex items-center">
        <Link href={"/"} className ="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">Demo App</Link>
        {
            path.includes('admin') &&
        <button className ="text-2xl font-bold bg-amber-500 py-1 ml-2 px-2 rounded-lg" onClick={()=>{
            router.push('/auth/login')
            Cookie.remove('token')}}>Logout</button>
        }
        </div>
        </div>
      
    </div>
  )
}

export default Header