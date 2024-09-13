import Link from 'next/link'
import React from 'react'

function MenuItem({title, address, Icons}) {
  return (
    <Link href={address} className= 'hover:text-amber-500'>
    <Icons className="text-2xl sm:hidden"/>
    <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem